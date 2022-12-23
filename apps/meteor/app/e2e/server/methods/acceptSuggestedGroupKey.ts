import { Meteor } from 'meteor/meteor';

import { handleSuggestedGroupKey } from '../functions/handleSuggestedGroupKey';

const method = 'e2e.acceptSuggestedGroupKey';

Meteor.methods({
	async [method](rid) {
		return handleSuggestedGroupKey('accept', rid, Meteor.userId(), method);
	},
});
