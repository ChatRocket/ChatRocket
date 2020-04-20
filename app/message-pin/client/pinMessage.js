import { Meteor } from 'meteor/meteor';
import toastr from 'toastr';
import { TAPi18n } from 'meteor/rocketchat:tap-i18n';

import { settings } from '../../settings';
import { ChatMessage, CachedChatMessage, Subscriptions } from '../../models';

Meteor.methods({
	pinMessage(message) {
		if (!Meteor.userId()) {
			toastr.error(TAPi18n.__('error-not-authorized'));
			return false;
		}
		if (!settings.get('Message_AllowPinning')) {
			toastr.error(TAPi18n.__('pinning-not-allowed'));
			return false;
		}
		if (Subscriptions.findOne({ rid: message.rid }) == null) {
			toastr.error(TAPi18n.__('error-pinning-message'));
			return false;
		}
		toastr.success(TAPi18n.__('Message_has_been_pinned'));
		return ChatMessage.update({
			_id: message._id,
		}, {
			$set: {
				pinned: true,
			},
		}, null, CachedChatMessage.save);
	},
	unpinMessage(message) {
		if (!Meteor.userId()) {
			toastr.error(TAPi18n.__('error-not-authorized'));
			return false;
		}
		if (!settings.get('Message_AllowPinning')) {
			toastr.error(TAPi18n.__('unpinning-not-allowed'));
			return false;
		}
		if (Subscriptions.findOne({ rid: message.rid }) == null) {
			toastr.error(TAPi18n.__('error-unpinning-message'));
			return false;
		}
		toastr.success(TAPi18n.__('Message_has_been_unpinned'));
		return ChatMessage.update({
			_id: message._id,
		}, {
			$set: {
				pinned: false,
			},
		}, null, CachedChatMessage.save);
	},
});
