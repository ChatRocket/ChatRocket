import Ajv from 'ajv';

import { API } from '../../../../../app/api/server';
import { changeContactBlockStatus, closeBlockedRoom, hasSingleContactLicense } from './lib/contacts';

const ajv = new Ajv({
	coerceTypes: true,
});

type blockContactProps = {
	contactId: string;
	visitorId: string;
};

const blockContactSchema = {
	type: 'object',
	properties: {
		contactId: {
			type: 'string',
		},
		visitorId: {
			type: 'string',
		},
	},
	required: ['contactId', 'visitorId'],
	additionalProperties: false,
};

const isBlockContactProps = ajv.compile<blockContactProps>(blockContactSchema);

declare module '@rocket.chat/rest-typings' {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	interface Endpoints {
		'/v1/omnichannel/contacts.block': {
			POST: (params: blockContactProps) => void;
		};
		'/v1/omnichannel/contacts.unblock': {
			POST: (params: blockContactProps) => void;
		};
	}
}

API.v1.addRoute(
	'omnichannel/contacts.block',
	{
		authRequired: true,
		permissionsRequired: ['block-livechat-contact'],
		validateParams: isBlockContactProps,
	},
	{
		async post() {
			await hasSingleContactLicense();
			const { contactId, visitorId } = this.bodyParams;
			const { user } = this;

			await changeContactBlockStatus({
				contactId,
				visitorId,
				block: true,
			});

			await closeBlockedRoom(visitorId, user);

			return API.v1.success();
		},
	},
);

API.v1.addRoute(
	'omnichannel/contacts.unblock',
	{
		authRequired: true,
		permissionsRequired: ['unblock-livechat-contact'],
		validateParams: isBlockContactProps,
	},
	{
		async post() {
			await hasSingleContactLicense();
			const { contactId, visitorId } = this.bodyParams;

			await changeContactBlockStatus({
				contactId,
				visitorId,

				block: false,
			});

			return API.v1.success();
		},
	},
);
