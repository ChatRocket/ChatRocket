import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Babel } from 'meteor/babel-compiler';
import _ from 'underscore';
import s from 'underscore.string';
import type { INewIncomingIntegration, IIncomingIntegration } from '@rocket.chat/core-typings';

import { hasPermission, hasAllPermission } from '../../../../authorization/server';
import { Users, Rooms, Subscriptions } from '../../../../models/server';
import { Integrations, Roles } from '../../../../models/server/raw';

const validChannelChars = ['@', '#'];

Meteor.methods({
	async addIncomingIntegration(integration: INewIncomingIntegration): Promise<IIncomingIntegration> {
		const { userId } = this;

		if (!userId || !hasPermission(userId, 'manage-incoming-integrations') && !hasPermission(userId, 'manage-own-incoming-integrations')) {
			throw new Meteor.Error('not_authorized', 'Unauthorized', {
				method: 'addIncomingIntegration',
			});
		}

		if (!_.isString(integration.channel)) {
			throw new Meteor.Error('error-invalid-channel', 'Invalid channel', {
				method: 'addIncomingIntegration',
			});
		}

		if (integration.channel.trim() === '') {
			throw new Meteor.Error('error-invalid-channel', 'Invalid channel', {
				method: 'addIncomingIntegration',
			});
		}

		const channels = _.map(integration.channel.split(','), (channel) => s.trim(channel));

		for (const channel of channels) {
			if (!validChannelChars.includes(channel[0])) {
				throw new Meteor.Error('error-invalid-channel-start-with-chars', 'Invalid channel. Start with @ or #', {
					method: 'updateIncomingIntegration',
				});
			}
		}

		if (!_.isString(integration.username) || integration.username.trim() === '') {
			throw new Meteor.Error('error-invalid-username', 'Invalid username', {
				method: 'addIncomingIntegration',
			});
		}

		const integrationData: IIncomingIntegration = {
			...integration,
			channel: [],
		};

		if (integration.scriptEnabled === true && integration.script && integration.script.trim() !== '') {
			try {
				let babelOptions = Babel.getDefaultOptions({ runtime: false });
				babelOptions = _.extend(babelOptions, { compact: true, minified: true, comments: false });

				integrationData.scriptCompiled = Babel.compile(integration.script, babelOptions).code;
				integrationData.scriptError = undefined;
			} catch (e) {
				integrationData.scriptCompiled = undefined;
				integrationData.scriptError = _.pick(e, 'name', 'message', 'stack');
			}
		}

		for (let channel of channels) {
			let record;
			const channelType = channel[0];
			channel = channel.substr(1);

			switch (channelType) {
				case '#':
					record = Rooms.findOne({
						$or: [{ _id: channel }, { name: channel }],
					});
					break;
				case '@':
					record = Users.findOne({
						$or: [{ _id: channel }, { username: channel }],
					});
					break;
			}

			if (!record) {
				throw new Meteor.Error('error-invalid-room', 'Invalid room', {
					method: 'addIncomingIntegration',
				});
			}

			if (
				!hasAllPermission(userId, ['manage-incoming-integrations', 'manage-own-incoming-integrations']) &&
				!Subscriptions.findOneByRoomIdAndUserId(record._id, this.userId, { fields: { _id: 1 } })
			) {
				throw new Meteor.Error('error-invalid-channel', 'Invalid Channel', {
					method: 'addIncomingIntegration',
				});
			}
		}

		const user = Users.findOne({ username: integration.username });

		if (!user) {
			throw new Meteor.Error('error-invalid-user', 'Invalid user', {
				method: 'addIncomingIntegration',
			});
		}

		const token = Random.id(48);

		integrationData.type = 'webhook-incoming';
		integrationData.token = token;
		integrationData.channel = channels;
		integrationData.userId = user._id;
		integrationData._createdAt = new Date();
		integrationData._createdBy = Users.findOne(this.userId, { fields: { username: 1 } });

		await Roles.addUserRoles(user._id, ['bot']);

		const result = await Integrations.insertOne(integrationData);

		integrationData._id = result.insertedId;

		return integrationData;
	},
});
