import { NotificationQueue, Subscriptions } from '@rocket.chat/models';

import { callbacks } from '../../lib/callbacks';

export async function markRoomAsRead(rid: string, uid: string): Promise<void> {
	callbacks.run('beforeReadMessages', rid, uid);

	const projection = { ls: 1 };
	const sub = await Subscriptions.findOneByRoomIdAndUserId(rid, uid, { projection });
	if (!sub) {
		throw new Error('error-invalid-subscription');
	}

	await Subscriptions.setAsReadByRoomIdAndUserId(rid, uid);

	await NotificationQueue.clearQueueByUserId(uid);

	callbacks.runAsync('afterReadMessages', rid, { uid, lastSeen: sub.ls });
}
