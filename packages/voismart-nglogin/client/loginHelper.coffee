Meteor.loginWithOrchestra = (username, password, callback) ->
	customOrchestraOpts = customOrchestraOpts or {}

	loginRequest =
		username: username,
		ngPassword: password,
		orchestraNG: true

	console.log('loginrequest', loginRequest)
	Accounts.callLoginMethod
		methodArguments: [loginRequest],
		userCallback: (err) =>
			if callback
				if err?
					callback err
				else
					callback()
