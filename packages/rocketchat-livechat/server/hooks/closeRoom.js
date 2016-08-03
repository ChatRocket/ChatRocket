RocketChat.callbacks.add('livechat.closeRoom', (room) => {
	if (!RocketChat.settings.get('Livechat_webhook_on_close')) {
		return room;
	}

	let postData = RocketChat.Livechat.getLivechatRoomGuestInfo(room);
	postData.type = 'LivechatSession';
	postData.messages = [];

	RocketChat.models.Messages.findVisibleByRoomId(room._id, { sort: { ts: 1 } }).forEach((message) => {
		if (message.t) {
			return;
		}
		let msg = {
			username: message.u.username,
			msg: message.msg,
			ts: message.ts
		};

		if (message.u.username !== postData.visitor.username) {
			msg.agentId = message.u._id;
		}
		postData.messages.push(msg);
	});

	const response = RocketChat.Livechat.sendRequest(postData);

	if (response && response.data && response.data.data) {
		RocketChat.models.Rooms.saveCRMDataByRoomId(room._id, response.data.data);
	}

	return room;
});
