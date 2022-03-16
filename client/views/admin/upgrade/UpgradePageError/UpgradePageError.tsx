import { States, StatesIcon, StatesSubtitle, StatesTitle, StatesActions, Button, Icon, Box } from '@rocket.chat/fuselage';
import React, { ReactElement } from 'react';

import Page from '../../../../components/Page';
import { useTranslation } from '../../../../contexts/TranslationContext';

const UpgradePageError = (): ReactElement => {
	const t = useTranslation();
	const handleReconnect = (): void => {
		console.log('reconnect');
	};

	return (
		<Page data-qa='admin-upgrade'>
			<Box display='flex' justifyContent='center' height='full'>
				<States>
					<StatesIcon name='globe-cross' />
					<StatesTitle>{t('Connection_error')}</StatesTitle>
					<StatesSubtitle>{t('Upgrade_tab_connection_error_description')}</StatesSubtitle>
					<StatesSubtitle>
						<strong>{t('Upgrade_tab_connection_error_restore')}</strong>
					</StatesSubtitle>
					<StatesActions>
						<Button onClick={handleReconnect}>
							<Icon name='reload' /> {t('Refresh')}
						</Button>
					</StatesActions>
				</States>
			</Box>
		</Page>
	);
};

export default UpgradePageError;
