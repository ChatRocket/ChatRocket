import { hasPermissionAsync } from '../../../../authorization/server/functions/hasPermission';
import { LivechatVisitors, Messages, LivechatRooms } from '../../../../models/server/raw';
import { canAccessRoomAsync } from '../../../../authorization/server/functions/canAccessRoom';

export async function findVisitorInfo({ userId, visitorId }) {
	if (!await hasPermissionAsync(userId, 'view-l-room')) {
		throw new Error('error-not-authorized');
	}

	const visitor = await LivechatVisitors.findOneById(visitorId);
	if (!visitor) {
		throw new Error('visitor-not-found');
	}

	return {
		visitor,
	};
}

export async function findVisitedPages({ userId, roomId, pagination: { offset, count, sort } }) {
	if (!await hasPermissionAsync(userId, 'view-l-room')) {
		throw new Error('error-not-authorized');
	}
	const room = await LivechatRooms.findOneById(roomId);
	if (!room) {
		throw new Error('invalid-room');
	}
	const cursor = Messages.findByRoomIdAndType(room._id, 'livechat_navigation_history', {
		sort: sort || { ts: -1 },
		skip: offset,
		limit: count,
	});

	const total = await cursor.count();

	const pages = await cursor.toArray();

	return {
		pages,
		count: pages.length,
		offset,
		total,
	};
}

export async function findChatHistory({ userId, roomId, visitorId /* , text */, closedChatsOnly, servedChatsOnly: served, pagination: { offset, count, sort } }) {
	if (!await hasPermissionAsync(userId, 'view-l-room')) {
		throw new Error('error-not-authorized');
	}
	const room = await LivechatRooms.findOneById(roomId);
	if (!room) {
		throw new Error('invalid-room');
	}
	if (!await canAccessRoomAsync(room, { _id: userId })) {
		throw new Error('error-not-allowed');
	}

	const options = {
		sort: sort || { ts: -1 },
		skip: offset,
		limit: count,
	};

	// const roomIds = text && text !== '' & Messages.findDistinctLivechatRoomIdsByTextMessage();
	const cursor = LivechatRooms.findRoomsWithCriteria({ visitorId, open: !closedChatsOnly, served, options });

	const total = await cursor.count();

	const history = await cursor.toArray();

	return {
		history,
		count: history.length,
		offset,
		total,
	};
}

export async function findVisitorsToAutocomplete({ userId, selector }) {
	if (!await hasPermissionAsync(userId, 'view-l-room')) {
		return { items: [] };
	}
	const { exceptions = [], conditions = {} } = selector;

	const options = {
		fields: {
			_id: 1,
			name: 1,
			username: 1,
		},
		limit: 10,
		sort: {
			name: 1,
		},
	};

	const items = await LivechatVisitors.findByNameRegexWithExceptionsAndConditions(selector.term, exceptions, conditions, options).toArray();
	return {
		items,
	};
}
