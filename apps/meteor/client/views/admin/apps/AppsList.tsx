import { App } from '@rocket.chat/core-typings';
import { Box } from '@rocket.chat/fuselage';
import React, { ReactElement } from 'react';

import AppRow from './AppRow';

type AppsListProps = {
	apps: App[];
	title: string;
	isMarketplace: boolean;
	mbe?: string | number;
	isAdminSection: boolean;
	currentRouteName: string;
};

const AppsList = ({ apps, title, isMarketplace, mbe, isAdminSection, currentRouteName }: AppsListProps): ReactElement => (
	<>
		<Box is='h3' fontScale='h3' color='default' mbe='x20'>
			{title}
		</Box>
		<Box mbe={mbe}>
			{apps.map((app) => (
				<AppRow key={app.id} isMarketplace={isMarketplace} isAdminSection={isAdminSection} currentRouteName={currentRouteName} {...app} />
			))}
		</Box>
	</>
);

export default AppsList;
