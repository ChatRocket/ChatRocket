import { Meteor } from 'meteor/meteor';

import { roomCoordinator } from '../../../client/lib/rooms/roomCoordinator';
import { MessageAction } from '../../ui-utils/client';
import { sdk } from '../../utils/client/lib/SDKClient';

Meteor.startup(() => {
	MessageAction.addButton({
		id: 'reaction-message',
		icon: 'add-reaction',
		label: 'Add_Reaction',
		context: ['message', 'message-mobile', 'threads', 'federated', 'videoconf', 'videoconf-threads'],
		action(event, { message, chat }) {
			event?.stopPropagation();
			chat?.emojiPicker.open(event?.currentTarget as Element, (emoji , reactionWithTranslation) => sdk.call('setReaction', emoji, message._id, undefined, reactionWithTranslation));
		},
		condition({ message, user, room, subscription }) {
			if (!room) {
				return false;
			}

			if (!subscription) {
				return false;
			}

			if (message.private) {
				return false;
			}

			if (roomCoordinator.readOnly(room._id, user!) && !room.reactWhenReadOnly) {
				return false;
			}
			const isLivechatRoom = roomCoordinator.isLivechatRoom(room.t);
			if (isLivechatRoom) {
				return false;
			}

			return true;
		},
		order: -3,
		group: 'message',
	});
});
