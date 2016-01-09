Api = new Restivus
	enableCors: true
	apiPath: 'hooks/'
	auth:
		user: ->
			if @bodyParams?.payload?
				@bodyParams = JSON.parse @bodyParams.payload

			user = RocketChat.models.Users.findOne
				_id: @request.params.userId
				'services.resume.loginTokens.hashedToken': decodeURIComponent @request.params.token

			return user: user


Api.addRoute ':integrationId/:userId/:token', authRequired: true,
	post: ->
		console.log 'Post integration'
		console.log '@urlParams', @urlParams
		console.log '@bodyParams', @bodyParams

		integration = RocketChat.models.Integrations.findOne(@urlParams.integrationId)
		user = RocketChat.models.Users.findOne(@userId)

		channel = @bodyParams.channel or integration.channel
		channelType = channel[0]
		channel = channel.substr(1)

		switch channelType
			when '#'
				room = RocketChat.models.Rooms.findOne
					$or: [
						{_id: channel}
						{name: channel}
					]

				if not room?
					return {} =
						statusCode: 400
						body:
							success: false
							error: 'invalid-channel'

				rid = room._id
				if room.t is 'c'
					Meteor.runAsUser user._id, ->
						Meteor.call 'joinRoom', room._id

			when '@'
				roomUser = RocketChat.models.Users.findOne
					$or: [
						{_id: channel}
						{username: channel}
					]

				if not roomUser?
					return {} =
						statusCode: 400
						body:
							success: false
							error: 'invalid-channel'

				rid = [user._id, roomUser._id].sort().join('')
				room = RocketChat.models.Rooms.findOne(rid)

				if not room
					Meteor.runAsUser user._id, ->
						Meteor.call 'createDirectMessage', roomUser.username
						room = RocketChat.models.Rooms.findOne(rid)

			else
				return {} =
					statusCode: 400
					body:
						success: false
						error: 'invalid-channel-type'

		message =
			alias: @bodyParams.username or @bodyParams.alias or integration.alias
			msg: _.trim(@bodyParams.text or @bodyParams.msg or '')
			attachments: @bodyParams.attachments
			parseUrls: false
			bot:
				i: integration._id
			groupable: false

		if @bodyParams.icon_url? or @bodyParams.avatar?
			message.avatar = @bodyParams.icon_url or @bodyParams.avatar
		else if @bodyParams.icon_emoji? or @bodyParams.emoji?
			message.emoji = @bodyParams.icon_emoji or @bodyParams.emoji
		else if integration.avatar?
			message.avatar = integration.avatar
		else if integration.emoji?
			message.emoji = integration.emoji

		if _.isArray message.attachments
			for attachment in message.attachments
				if attachment.msg
					attachment.text = _.trim(attachment.msg)
					delete attachment.msg

		RocketChat.sendMessage user, message, room, {}

		return {} =
			statusCode: 200
			body:
				success: true


createIntegration = (options, user) ->
	console.log 'Add integration'
	console.log options

	Meteor.runAsUser user._id, =>
		switch options['event']
			when 'newMessageOnChannel'
				options.data ?= {}

				if options.data.channel_name? and options.data.channel_name.indexOf('#') is -1
					options.data.channel_name = '#' + options.data.channel_name

				Meteor.call 'addOutgoingIntegration',
					username: 'rocket.cat'
					urls: [options.target_url]
					name: options.name
					channel: options.data.channel_name
					triggerWords: options.data.trigger_words

			when 'newMessageToUser'
				if options.data.username.indexOf('@') is -1
					options.data.username = '@' + options.data.username

				Meteor.call 'addOutgoingIntegration',
					username: 'rocket.cat'
					urls: [options.target_url]
					name: options.name
					channel: options.data.username
					triggerWords: options.data.trigger_words

	return RocketChat.API.v1.success()


removeIntegration = (options, user) ->
	console.log 'Remove integration'
	console.log options

	integrationToRemove = RocketChat.models.Integrations.findOne urls: options.target_url
	Meteor.runAsUser user._id, =>
		Meteor.call 'deleteOutgoingIntegration', integrationToRemove._id

	return RocketChat.API.v1.success()


Api.addRoute 'add/:integrationId/:userId/:token', authRequired: true,
	post: ->
		integration = RocketChat.models.Integrations.findOne(@urlParams.integrationId)

		if not integration?
			return RocketChat.API.v1.failure 'Invalid integraiton id'

		user = RocketChat.models.Users.findOne(@userId)

		return createIntegration @bodyParams, user


Api.addRoute 'remove/:integrationId/:userId/:token', authRequired: true,
	post: ->
		integration = RocketChat.models.Integrations.findOne(@urlParams.integrationId)

		if not integration?
			return RocketChat.API.v1.failure 'Invalid integraiton id'

		user = RocketChat.models.Users.findOne(@userId)

		return removeIntegration @bodyParams, user


RocketChat.API.v1.addRoute 'integrations.create', authRequired: true,
	post: ->
		return createIntegration @bodyParams, @user


RocketChat.API.v1.addRoute 'integrations.remove', authRequired: true,
	post: ->
		return removeIntegration @bodyParams, @user


Api.addRoute 'sample/:integrationId/:userId/:token', authRequired: true,
	get: ->
		console.log 'Sample Integration'

		return {} =
			statusCode: 200
			body: [
				token: Random.id(24)
				channel_id: Random.id()
				channel_name: 'general'
				timestamp: new Date
				user_id: Random.id()
				user_name: 'rocket.cat'
				text: 'Sample text 1'
				trigger_word: 'Sample'
			,
				token: Random.id(24)
				channel_id: Random.id()
				channel_name: 'general'
				timestamp: new Date
				user_id: Random.id()
				user_name: 'rocket.cat'
				text: 'Sample text 2'
				trigger_word: 'Sample'
			,
				token: Random.id(24)
				channel_id: Random.id()
				channel_name: 'general'
				timestamp: new Date
				user_id: Random.id()
				user_name: 'rocket.cat'
				text: 'Sample text 3'
				trigger_word: 'Sample'
			]


Api.addRoute 'info/:integrationId/:userId/:token', authRequired: true,
	get: ->
		console.log 'Info integration'

		return {} =
			statusCode: 200
			body:
				success: true

