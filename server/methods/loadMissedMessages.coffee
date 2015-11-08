Meteor.methods
	loadMissedMessages: (rid, start) ->
		fromId = Meteor.userId()
		# console.log '[methods] loadMissedMessages -> '.green, 'fromId:', fromId, 'rid:', rid, 'start:', start

		unless Meteor.call 'canAccessRoom', rid, fromId
			return false

		options =
			sort:
				ts: -1

		if not RocketChat.settings.get 'Message_ShowEditedStatus'
			options.fields = { 'edit.at': 0 }

		return RocketChat.models.Messages.findVisibleByRoomIdAfterTimestamp(rid, start, options).fetch()
