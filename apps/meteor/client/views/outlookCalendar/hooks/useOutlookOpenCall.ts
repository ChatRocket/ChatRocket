import { useUser } from '@rocket.chat/ui-contexts';

import { useUserDisplayName } from '../../../hooks/useUserDisplayName';
import { useVideoConfOpenCall } from '../../room/contextualBar/VideoConference/hooks/useVideoConfOpenCall';

export const useOutlookOpenCall = (meetingUrl?: string) => {
	const user = useUser();
	const handleOpenCall = useVideoConfOpenCall();
	const userDisplayName = useUserDisplayName({ name: user?.name, username: user?.username });

	const namedMeetingUrl = `${meetingUrl}&name=${userDisplayName}`;

	if (!meetingUrl) {
		return;
	}

	return () => handleOpenCall(namedMeetingUrl);
};
