import { serverFetch as fetch } from '@rocket.chat/server-fetch';

import { callbacks } from '../../../../lib/callbacks';
import { CloudWorkspaceConnectionError } from '../../../../lib/errors/CloudWorkspaceConnectionError';
import { CloudWorkspaceRegistrationError } from '../../../../lib/errors/CloudWorkspaceRegistrationError';
import { settings } from '../../../settings/server';
import { CloudWorkspaceAccessTokenEmptyError, getWorkspaceAccessToken } from './getWorkspaceAccessToken';
import { retrieveRegistrationStatus } from './retrieveRegistrationStatus';
import { syncWorkspace } from './syncWorkspace';

export async function removeLicense() {
	try {
		const { workspaceRegistered } = await retrieveRegistrationStatus();
		if (!workspaceRegistered) {
			throw new CloudWorkspaceRegistrationError('Workspace is not registered');
		}

		const token = await getWorkspaceAccessToken(true);
		if (!token) {
			throw new CloudWorkspaceAccessTokenEmptyError();
		}

		const workspaceRegistrationClientUri = settings.get<string>('Cloud_Workspace_Registration_Client_Uri');
		const response = await fetch(`${workspaceRegistrationClientUri}/client/downgrade`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		if (!response.ok) {
			try {
				const { error } = await response.json();
				throw new CloudWorkspaceConnectionError(`Failed to connect to Rocket.Chat Cloud: ${error}`);
			} catch (error) {
				throw new CloudWorkspaceConnectionError(`Failed to connect to Rocket.Chat Cloud: ${response.statusText}`);
			}
		}

		await syncWorkspace();
	} catch (err) {
		await callbacks.run('workspaceLicenseRemoved');
		throw err;
	}
}
