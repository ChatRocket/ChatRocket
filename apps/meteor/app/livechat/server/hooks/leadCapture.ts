import { LivechatVisitors } from '@rocket.chat/models';
import type { IMessage, IOmnichannelRoom } from '@rocket.chat/core-typings';
import { isEditedMessage, isOmnichannelRoom } from '@rocket.chat/core-typings';

import { callbacks } from '../../../../lib/callbacks';
import { settings } from '../../../settings/server';
import { isTruthy } from '../../../../lib/isTruthy';

function validateMessage(message: IMessage, room: IOmnichannelRoom) {
	// skips this callback if the message was edited
	if (isEditedMessage(message)) {
		return false;
	}

	// message valid only if it is a livechat room
	if (!(typeof room.t !== 'undefined' && room.t === 'l' && room.v && room.v.token)) {
		return false;
	}

	// if the message hasn't a token, it was NOT sent from the visitor, so ignore it
	if (!message.token) {
		return false;
	}

	// if the message has a type means it is a special message (like the closing comment), so skips
	if (message.t) {
		return false;
	}

	return true;
}

callbacks.add(
	'afterSaveMessage',
	async function (message, room) {
		if (!isOmnichannelRoom(room)) {
			return message;
		}

		if (!validateMessage(message, room)) {
			return message;
		}

		const phoneRegexp = new RegExp(settings.get<string>('Livechat_lead_phone_regex'), 'g');
		const msgPhones = message.msg.match(phoneRegexp)?.filter(isTruthy) || [];

		const emailRegexp = new RegExp(settings.get<string>('Livechat_lead_email_regex'), 'gi');
		const msgEmails = message.msg.match(emailRegexp)?.filter(isTruthy) || [];
		if (msgEmails || msgPhones) {
			await LivechatVisitors.saveGuestEmailPhoneById(room.v._id, msgEmails, msgPhones);

			callbacks.run('livechat.leadCapture', room);
		}

		return message;
	},
	callbacks.priority.LOW,
	'leadCapture',
);
