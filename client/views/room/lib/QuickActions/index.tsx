import { ReactNode, MouseEvent } from 'react';
import { BoxProps, OptionProps } from '@rocket.chat/fuselage';

import { IRoom } from '../../../../../definition/IRoom';
import { generator, Events as GeneratorEvents } from './generator';


type QuickActionsHook = ({ room }: { room: IRoom }) => QuickActionsActionConfig | null

type ActionRendererProps = Omit<QuickActionsActionConfig, 'renderAction' | 'groups'> & {
	className: BoxProps['className'];
	tabId: QuickActionsActionConfig['id'] | undefined;
	index: number;
}

export type ActionRenderer = (props: ActionRendererProps) => ReactNode;

type OptionRendererProps = OptionProps;

export type OptionRenderer = (props: OptionRendererProps) => ReactNode;

export type QuickActionsActionConfig = {
	id: string;
	icon: string;
	color?: string;
	title: string;
	anonymous?: boolean;
	renderAction?: ActionRenderer;
	full?: true;
	renderOption?: OptionRenderer;
	order?: number;
	groups: Array<'group' | 'channel' | 'live' | 'direct' | 'direct_multiple'>;
	hotkey?: string;
	action?: (e: MouseEvent<HTMLElement>) => void;
}

export type QuickActionsAction = QuickActionsHook | QuickActionsActionConfig;

const { listen, add: addAction, remove: deleteAction, store: actions } = generator<QuickActionsAction>();

export type Events = GeneratorEvents<QuickActionsAction>;

export { listen, addAction, deleteAction, actions };
