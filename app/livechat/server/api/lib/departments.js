import { hasPermissionAsync } from '../../../../authorization/server/functions/hasPermission';
import { LivechatDepartment, LivechatDepartmentAgents } from '../../../../models/server/raw';

export async function findDepartments({ userId, pagination: { offset, count, sort } }) {
	if (!await hasPermissionAsync(userId, 'view-livechat-departments') || !await hasPermissionAsync(userId, 'view-l-room')) {
		throw new Error('error-not-authorized');
	}

	const cursor = LivechatDepartment.find({}, {
		sort: sort || { name: 1 },
		skip: offset,
		limit: count,
	});

	const total = await cursor.count();

	const departments = await cursor.toArray();

	return {
		departments,
		count: departments.length,
		offset,
		total,
	};
}

export async function findDepartmentById({ userId, departmentId }) {
	if (!await hasPermissionAsync(userId, 'view-livechat-departments') || !await hasPermissionAsync(userId, 'view-l-room')) {
		throw new Error('error-not-authorized');
	}
	return {
		department: await LivechatDepartment.findOneById(departmentId),
		agents: await LivechatDepartmentAgents.find({ departmentId }).toArray(),
	};
}
