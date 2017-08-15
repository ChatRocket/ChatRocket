/* globals SystemLogger */

let script;

function loadSmarti() {
	if (!RocketChat.settings.get('DBS_AI_Redlink_URL').trim()) {
		throw new Meteor.Error('no-smarti-url-configured');
	}

	const DBS_AI_SMARTI_URL =
		RocketChat.settings.get('DBS_AI_Redlink_URL').endsWith('/') ?
			RocketChat.settings.get('DBS_AI_Redlink_URL') :
			`${ RocketChat.settings.get('DBS_AI_Redlink_URL') }/`;
	SystemLogger.debug('Trying to retrieve Smarti UI from', DBS_AI_SMARTI_URL);

	const response = HTTP.get(`${ DBS_AI_SMARTI_URL }plugin/v1/rocket.chat.js`);
	if (response.statusCode === 200) {
		script = response.content;

		if (!script) {
			SystemLogger.error('Could not extract script from Smarti response');
			throw new Meteor.Error('no-smarti-ui-script');
		} else {
			// add pseudo comment in order to make the script appear in the frontend as a file. This makes it de-buggable
			script += '//#  sourceURL=SmartiWidget.js';
		}
	} else {
		SystemLogger.error('Could not reach Smarti service at', DBS_AI_SMARTI_URL);
		throw new Meteor.Error('no-smarti-ui-script');
	}
}

Meteor.methods({
	reloadSmarti() {
		script = undefined;
		loadSmarti();
	}
});

Meteor.methods({
	getSmartiUiScript() {
		if (!script) { //buffering
			loadSmarti();
		}

		return script;
	}
});
