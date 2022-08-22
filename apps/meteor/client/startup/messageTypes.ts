import type { IMessage } from '@rocket.chat/core-typings';
import { escapeHTML } from '@rocket.chat/string-helpers';
import { Meteor } from 'meteor/meteor';

import { MessageTypes } from '../../app/ui-utils/client';
import { t } from '../../app/utils/client';

Meteor.startup(() => {
	MessageTypes.registerType({
		id: 'room_changed_type',
		system: true,
		message: 'room_changed_type',
		data(message: IMessage) {
			return {
				room_type: t(message.msg),
			};
		},
	});

	MessageTypes.registerType({
		id: 'room_changed_topic_to',
		system: true,
		message: 'room_changed_topic_to',
		data(message: IMessage) {
			return {
				room_topic: escapeHTML(message.msg || `(${t('None').toLowerCase()})`),
			};
		},
	});

	MessageTypes.registerType({
		id: 'room_avatar_changed',
		system: true,
		message: 'room_avatar_changed',
	});

	MessageTypes.registerType({
		id: 'room_changed_announcement',
		system: true,
		message: 'room_changed_announcement',
		data(message: IMessage) {
			return {
				user_by: message.u?.username,
				room_announcement: escapeHTML(message.msg || `(${t('None').toLowerCase()})`),
			};
		},
	});

	MessageTypes.registerType({
		id: 'room_changed_description',
		system: true,
		message: 'room_changed_description',
		data(message: IMessage) {
			return {
				user_by: message.u?.username,
				room_description: escapeHTML(message.msg || `(${t('None').toLowerCase()})`),
			};
		},
	});
});
