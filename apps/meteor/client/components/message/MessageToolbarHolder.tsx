import type { IMessage } from '@rocket.chat/core-typings';
import { MessageToolbarWrapper } from '@rocket.chat/fuselage';
import { useQuery } from '@tanstack/react-query';
import type { ReactElement } from 'react';
import React, { Suspense, lazy, memo } from 'react';

import type { MessageActionContext } from '../../../app/ui-utils/client/lib/MessageAction';
import { useChat } from '../../views/room/contexts/ChatContext';
import { useIsVisible } from '../../views/room/hooks/useIsVisible';

type MessageToolbarHolderProps = {
	message: IMessage;
	context?: MessageActionContext;
	isToolbarMenuOpen: boolean;
	setIsToolbarMenuOpen: (b: boolean) => void;
};

const MessageToolbar = lazy(() => import('./toolbar/MessageToolbar'));

const MessageToolbarHolder = ({ message, context, isToolbarMenuOpen, setIsToolbarMenuOpen }: MessageToolbarHolderProps): ReactElement => {
	const chat = useChat();
	const [ref, isVisible] = useIsVisible();

	const showToolbar = isVisible || isToolbarMenuOpen;

	const depsQueryResult = useQuery(
		['toolbox', message._id, context],
		async () => {
			const room = await chat?.data.findRoom();
			const subscription = await chat?.data.findSubscription();
			return {
				room,
				subscription,
			};
		},
		{
			enabled: showToolbar,
		},
	);

	return (
		<MessageToolbarWrapper ref={ref} visible={isToolbarMenuOpen}>
			{showToolbar && depsQueryResult.isSuccess && depsQueryResult.data.room && (
				<Suspense fallback={null}>
					<MessageToolbar
						message={message}
						messageContext={context}
						room={depsQueryResult.data.room}
						subscription={depsQueryResult.data.subscription}
						onChangeMenuVisibility={setIsToolbarMenuOpen}
						isToolbarMenuOpen={isToolbarMenuOpen}
					/>
				</Suspense>
			)}
		</MessageToolbarWrapper>
	);
};

export default memo(MessageToolbarHolder);
