Meteor.methods({
	async pauseBot(bot) {
		check(bot, Object);

		if (RocketChat.authz.hasPermission(Meteor.userId(), 'manage-bot-client') !== true) {
			throw new Meteor.Error('error-not-allowed', 'Not allowed', {
				method: 'pauseBot'
			});
		}

		await RocketChat.sendClientCommand(bot, { key: 'pauseMessageStream' });
		const update = RocketChat.models.Users.update({ _id: bot._id }, {
			$set: {
				'customClientData.pausedMsgStream': true
			}
		});
		if (update > 0) {
			Meteor.call('UserPresence:setDefaultStatus', bot._id, 'busy');
		}
	}
});
