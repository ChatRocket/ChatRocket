import { isRoomFederated } from '@rocket.chat/core-typings';
import type { BadgeProps } from '@rocket.chat/fuselage';
import { HeaderToolboxAction, HeaderToolboxActionBadge } from '@rocket.chat/ui-client';
import { useSetting } from '@rocket.chat/ui-contexts';
import type { LazyExoticComponent, FC } from 'react';
import React, { lazy, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useRoom, useRoomSubscription } from '../../views/room/contexts/RoomContext';
import type { ToolboxActionConfig } from '../../views/room/contexts/RoomToolboxContext';

const getVariant = (tunreadUser: number, tunreadGroup: number): BadgeProps['variant'] => {
	if (tunreadUser > 0) {
		return 'danger';
	}

	if (tunreadGroup > 0) {
		return 'warning';
	}

	return 'primary';
};

const Threads = lazy(() => import('../../views/room/contextualBar/Threads')) as LazyExoticComponent<FC>;

export const useThreadRoomAction = () => {
	const enabled = useSetting('Threads_enabled', false);
	const room = useRoom();
	const federated = isRoomFederated(room);
	const subscription = useRoomSubscription();

	const tunread = subscription?.tunread?.length ?? 0;
	const tunreadUser = subscription?.tunreadUser?.length ?? 0;
	const tunreadGroup = subscription?.tunreadGroup?.length ?? 0;
	const unread = tunread > 99 ? '99+' : tunread;
	const variant = getVariant(tunreadUser, tunreadGroup);
	const { t } = useTranslation();

	return useMemo((): ToolboxActionConfig | undefined => {
		if (!enabled) {
			return undefined;
		}

		return {
			id: 'thread',
			groups: ['channel', 'group', 'direct', 'direct_multiple', 'team'],
			full: true,
			title: 'Threads',
			icon: 'thread',
			template: Threads,
			...(federated && {
				tooltip: t('core.Threads_unavailable_for_federation'),
				disabled: true,
			}),
			order: 2,
			renderToolboxItem: ({ id, className, index, icon, title, toolbox: { tab }, action, disabled, tooltip }) => (
				<HeaderToolboxAction
					key={id}
					className={className}
					index={index}
					id={id}
					icon={icon}
					title={t(title)}
					pressed={id === tab?.id}
					action={action}
					disabled={disabled}
					tooltip={tooltip}
				>
					{!!unread && <HeaderToolboxActionBadge variant={variant}>{unread}</HeaderToolboxActionBadge>}
				</HeaderToolboxAction>
			),
		};
	}, [enabled, federated, t, unread, variant]);
};
