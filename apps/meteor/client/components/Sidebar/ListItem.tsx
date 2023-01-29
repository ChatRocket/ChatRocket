import { Option, OptionColumn, OptionContent, OptionIcon } from '@rocket.chat/fuselage';
import type { ComponentProps, MouseEventHandler, ReactElement, ReactNode } from 'react';
import React from 'react';

type ListItemProps = {
	text: ReactNode;
	icon?: ComponentProps<typeof OptionIcon>['name'];
	input?: any;
	action?: MouseEventHandler<HTMLOrSVGElement>;
	clickAction?: MouseEventHandler<HTMLOrSVGElement>;
};

const ListItem = ({ text, icon, input, action, clickAction }: ListItemProps): ReactElement => (
	<Option onClick={action || clickAction}>
		{icon && <OptionIcon name={icon} />}
		<OptionContent>{text}</OptionContent>
		{input && <OptionColumn>{input}</OptionColumn>}
	</Option>
);

export default ListItem;
