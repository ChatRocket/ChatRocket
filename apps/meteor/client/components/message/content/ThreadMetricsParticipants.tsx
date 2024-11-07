import { MessageMetricsItem, MessageMetricsItemLabel, MessageMetricsItemAvatarRow } from '@rocket.chat/fuselage';
import { useTranslation } from '@rocket.chat/ui-contexts';
import type { ReactElement } from 'react';
import React from 'react';

import ThreadMetricAvatar from './ThreadMetricAvatar';

type ThreadMetricsParticipantsProps = {
	participants: Array<string>;
};

const ThreadMetricsParticipants = ({ participants }: ThreadMetricsParticipantsProps): ReactElement => {
	const t = useTranslation();

	const participantsLengthExcludingVisibleAvatars = participants.length - 2;
	const participantsLabel = participantsLengthExcludingVisibleAvatars > 0 ? `+${participantsLengthExcludingVisibleAvatars}` : undefined;

	return (
		<MessageMetricsItem title={t('Follower', { count: participants.length })}>
			<MessageMetricsItemAvatarRow>
				{participants.slice(0, 2).map((uid) => (
					<ThreadMetricAvatar userId={uid} key={uid} />
				))}
			</MessageMetricsItemAvatarRow>
			{participantsLabel && <MessageMetricsItemLabel>{participantsLabel}</MessageMetricsItemLabel>}
		</MessageMetricsItem>
	);
};

export default ThreadMetricsParticipants;
