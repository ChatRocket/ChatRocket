import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { OAuth } from 'meteor/oauth';
import { check } from 'meteor/check';

import { callbacks } from '../../callbacks';
import { checkCodeForUser } from './code/index';

Accounts.registerLoginHandler('totp', function(options) {
	if (!options.totp || !options.totp.code) {
		return;
	}

	return Accounts._runLoginHandlers(this, options.totp.login);
});

callbacks.add('onValidateLogin', (login) => {
	if (login.type === 'resume' || login.type === 'proxy') {
		return login;
	}

	const { totp } = login.methodArguments[0];

	checkCodeForUser({ user: login.user, code: totp && totp.code, options: { disablePasswordFallback: true } });

	return login;
}, callbacks.priority.MEDIUM, '2fa');

const recreateError = (errorDoc) => {
	let error;

	if (errorDoc.meteorError) {
		error = new Meteor.Error();
		delete errorDoc.meteorError;
	} else {
		error = new Error();
	}

	Object.getOwnPropertyNames(errorDoc).forEach((key) => {
		error[key] = errorDoc[key];
	});
	return error;
};

OAuth._retrievePendingCredential = function(key, ...args) {
	const credentialSecret = args.length > 0 && args[0] !== undefined ? args[0] : null;
	check(key, String);

	const pendingCredential = OAuth._pendingCredentials.findOne({
		key,
		credentialSecret,
	});

	if (!pendingCredential) {
		return;
	}

	if (pendingCredential.credential?.serviceData?._OAuthCustom && !pendingCredential.credential.error) {
		// Work-around to make the credentials reusable for 2FA
		const future = new Date();
		future.setMinutes(future.getMinutes() + 2);

		OAuth._pendingCredentials.update({
			_id: pendingCredential._id,
		}, {
			$set: {
				_createdAt: future,
			},
		});
	} else {
		OAuth._pendingCredentials.remove({
			_id: pendingCredential._id,
		});
	}

	if (pendingCredential.credential.error) {
		return recreateError(pendingCredential.credential.error);
	}

	return OAuth.openSecret(pendingCredential.credential);
};
