import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Users } from '@rocket.chat/models';
import { isRegisterUser } from '@rocket.chat/core-typings';
import type { ServerMethods } from '@rocket.chat/ui-contexts';

import { hasPermissionAsync } from '../../../authorization/server/functions/hasPermission';
import { Rooms } from '../../../models/server';
import { unarchiveRoom } from '../functions';

declare module '@rocket.chat/ui-contexts' {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	interface ServerMethods {
		unarchiveRoom(rid: string): Promise<void>;
	}
}

Meteor.methods<ServerMethods>({
	async unarchiveRoom(rid) {
		check(rid, String);

		const userId = Meteor.userId();

		if (!userId) {
			throw new Meteor.Error('error-invalid-user', 'Invalid user', { method: 'unarchiveRoom' });
		}

		const user = await Users.findOneById(userId, { projection: { username: 1, name: 1 } });
		if (!user || !isRegisterUser(user)) {
			throw new Meteor.Error('error-invalid-user', 'Invalid user', { method: 'archiveRoom' });
		}

		const room = Rooms.findOneById(rid);

		if (!room) {
			throw new Meteor.Error('error-invalid-room', 'Invalid room', { method: 'unarchiveRoom' });
		}

		if (!(await hasPermissionAsync(userId, 'unarchive-room', room._id))) {
			throw new Meteor.Error('error-not-authorized', 'Not authorized', { method: 'unarchiveRoom' });
		}

		return unarchiveRoom(rid, user);
	},
});
