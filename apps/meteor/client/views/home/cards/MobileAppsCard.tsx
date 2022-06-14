import { Button } from '@rocket.chat/fuselage';
import { useTranslation } from '@rocket.chat/ui-contexts';
import React, { ReactElement } from 'react';

import CardBody from '../../../components/Card/Body';
import Card from '../../../components/Card/Card';
import CardFooterWrapper from '../../../components/Card/CardFooterWrapper';
import CardFooter from '../../../components/Card/Footer';
import CardTitle from '../../../components/Card/Title';
import ExternalLink from '../../../components/ExternalLink';

const GOOGLE_PLAY_URL = 'https://google.com';
const APP_STORE_URL = 'https://google.com';

const MobileAppsCard = (): ReactElement => {
	const t = useTranslation();

	return (
		<Card variant='light' data-qa-id='homepage-mobile-apps-card'>
			<CardTitle>{t('Mobile_apps')}</CardTitle>

			<CardBody>{t('Take_rocket_chat_with_you_with_mobile_applications')}</CardBody>

			<CardFooterWrapper>
				<CardFooter>
					<ExternalLink to={GOOGLE_PLAY_URL}>
						<Button>{t('Google_Play')}</Button>
					</ExternalLink>
					<ExternalLink to={APP_STORE_URL}>
						<Button>{t('App_Store')}</Button>
					</ExternalLink>
				</CardFooter>
			</CardFooterWrapper>
		</Card>
	);
};

export default MobileAppsCard;
