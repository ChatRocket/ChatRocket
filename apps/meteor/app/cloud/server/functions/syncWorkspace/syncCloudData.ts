import type { Cloud, Serialized } from '@rocket.chat/core-typings';
import { DuplicatedLicenseError } from '@rocket.chat/license';
import { Settings } from '@rocket.chat/models';
import { serverFetch as fetch } from '@rocket.chat/server-fetch';
import { v, compile } from 'suretype';

import { callbacks } from '../../../../../lib/callbacks';
import { CloudWorkspaceAccessError } from '../../../../../lib/errors/CloudWorkspaceAccessError';
import { CloudWorkspaceConnectionError } from '../../../../../lib/errors/CloudWorkspaceConnectionError';
import { CloudWorkspaceRegistrationError } from '../../../../../lib/errors/CloudWorkspaceRegistrationError';
import { SystemLogger } from '../../../../../server/lib/logger/system';
import { settings } from '../../../../settings/server';
import { buildWorkspaceRegistrationData } from '../buildRegistrationData';
import { CloudWorkspaceAccessTokenEmptyError, getWorkspaceAccessToken } from '../getWorkspaceAccessToken';
import { retrieveRegistrationStatus } from '../retrieveRegistrationStatus';

const workspaceSyncPayloadSchema = v.object({
	workspaceId: v.string().required(),
	publicKey: v.string(),
	license: v.string().required(),
});

const assertWorkspaceSyncPayload = compile(workspaceSyncPayloadSchema);

const fetchWorkspaceSyncPayload = async ({
	token,
	data,
}: {
	token: string;
	data: Cloud.WorkspaceSyncRequestPayload;
}): Promise<Serialized<Cloud.WorkspaceSyncResponse>> => {
	const workspaceRegistrationClientUri = settings.get<string>('Cloud_Workspace_Registration_Client_Uri');
	const response = await fetch(`${workspaceRegistrationClientUri}/sync`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`,
		},
		body: data,
	});

	if (!response.ok) {
		try {
			const { error } = await response.json();
			throw new CloudWorkspaceConnectionError(`Failed to connect to Rocket.Chat Cloud: ${error}`);
		} catch (error) {
			throw new CloudWorkspaceConnectionError(`Failed to connect to Rocket.Chat Cloud: ${response.statusText}`);
		}
	}

	const payload = await response.json();

	assertWorkspaceSyncPayload(payload);

	const cloudSyncAnnouncement = {
		viewId: 'subscription-announcement',
		appId: 'cloud-announcements-core',
		blocks: [
			{
				type: 'callout',
				title: {
					type: 'plain_text',
					text: 'Callout Title',
				},
				text: {
					type: 'plain_text',
					text: 'Callout Text',
				},
				accessory: {
					type: 'button',
					text: {
						type: 'plain_text',
						text: 'Callout Action',
					},
					actionId: 'callout-action',
					appId: 'cloud-announcements-core',
					blockId: 'section-button',
				},
			},
		],
	};

	return { ...payload, cloudSyncAnnouncement };
};

export async function syncCloudData() {
	try {
		const { workspaceRegistered } = await retrieveRegistrationStatus();
		if (!workspaceRegistered) {
			throw new CloudWorkspaceRegistrationError('Workspace is not registered');
		}

		const token = await getWorkspaceAccessToken(true);
		if (!token) {
			throw new CloudWorkspaceAccessTokenEmptyError();
		}

		const workspaceRegistrationData = await buildWorkspaceRegistrationData(undefined);

		const {
			license,
			removeLicense = false,
			cloudSyncAnnouncement,
		} = await fetchWorkspaceSyncPayload({
			token,
			data: workspaceRegistrationData,
		});

		if (cloudSyncAnnouncement) {
			await Settings.updateValueById('Cloud_Sync_Announcement_Payload', JSON.stringify(cloudSyncAnnouncement));
		}

		if (removeLicense) {
			await callbacks.run('workspaceLicenseRemoved');
		} else {
			await callbacks.run('workspaceLicenseChanged', license);
		}

		SystemLogger.info({
			msg: 'Synced with Rocket.Chat Cloud',
			function: 'syncCloudData',
		});

		return true;
	} catch (err) {
		/**
		 * If some of CloudWorkspaceAccessError and CloudWorkspaceRegistrationError happens, makes no sense to run the legacySyncWorkspace
		 * because it will fail too.
		 * The DuplicatedLicenseError license error is also ignored because it is not a problem. the Cloud is allowed to send the same license twice.
		 */
		switch (true) {
			case err instanceof DuplicatedLicenseError:
				return;
			case err instanceof CloudWorkspaceAccessError:
			case err instanceof CloudWorkspaceRegistrationError:
			case err instanceof CloudWorkspaceAccessTokenEmptyError:
				SystemLogger.info({
					msg: 'Failed to sync with Rocket.Chat Cloud',
					function: 'syncCloudData',
					err,
				});
				break;

			default:
				SystemLogger.error({
					msg: 'Failed to sync with Rocket.Chat Cloud',
					function: 'syncCloudData',
					err,
				});
		}
		throw err;
	}
}
