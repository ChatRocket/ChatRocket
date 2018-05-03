export function shouldNotifyAudio({ disableAllMessageNotifications, status, audioNotifications, toAll, toHere, isHighlighted, isMentioned}) {
	if (disableAllMessageNotifications && audioNotifications == null) {
		return false;
	}

	if (status === 'busy' || audioNotifications === 'nothing') {
		return false;
	}

	if (!audioNotifications && RocketChat.settings.get('Accounts_Default_User_Preferences_audioNotifications') === 'all') {
		return true;
	}

	return toAll || toHere || isHighlighted || audioNotifications === 'all' || isMentioned;
}

export function notifyAudioUser(userId, message, room) {
	RocketChat.Notifications.notifyUser(userId, 'audioNotification', {
		payload: {
			_id: message._id,
			rid: message.rid,
			sender: message.u,
			type: room.t,
			name: room.name
		}
	});
}
