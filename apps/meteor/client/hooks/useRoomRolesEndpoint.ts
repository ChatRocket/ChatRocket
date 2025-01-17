import { useEndpoint } from '@rocket.chat/ui-contexts';
import { useQuery } from '@tanstack/react-query';
import { minutesToMilliseconds } from 'date-fns';

export const useRoomRolesEndpoint = (roomId: string, roles: string[]) => {
	const getUsersInRole = useEndpoint('GET', '/v1/roles.getUsersInRole');

	return useQuery(
		['/v1/roles.getUsersInRole', roomId, roles],
		async () => {
			const roleData = await Promise.all(
				roles.map((role) =>
					getUsersInRole({ roomId, role }).then((data) =>
						data.users.map(({ _id, username, name }: { _id: string; username?: string; name?: string }) => ({
							_id,
							username,
							name,
						})),
					),
				),
			);
			return roleData.flat();
		},
		{
			cacheTime: minutesToMilliseconds(15),
			staleTime: minutesToMilliseconds(5),
			retry: (count, _error) => count <= 2,
		},
	);
};
