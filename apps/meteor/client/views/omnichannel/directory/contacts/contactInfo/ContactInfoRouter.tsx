import { useRoute, useRouteParameter } from '@rocket.chat/ui-contexts';
import React from 'react';
import { useTranslation } from 'react-i18next';

import ContactInfo from './ContactInfo';
import ContactEditWithData from './EditContactInfoWithData';
import { ContextualbarHeader, ContextualbarIcon, ContextualbarTitle, ContextualbarClose } from '../../../../../components/Contextualbar';
import { useOmnichannelRoom } from '../../../../room/contexts/RoomContext';
import { useRoomToolbox } from '../../../../room/contexts/RoomToolboxContext';

const PATH = 'live';

const ContactInfoRouter = () => {
	const { t } = useTranslation();
	const room = useOmnichannelRoom();
	const { closeTab } = useRoomToolbox();

	const directoryRoute = useRoute(PATH);
	const context = useRouteParameter('context');

	const handleCloseEdit = (): void => {
		directoryRoute.push({ id: room._id, tab: 'contact-profile' });
	};

	const {
		v: { _id },
	} = room;

	return (
		<>
			<ContextualbarHeader>
				{(context === 'info' || !context) && (
					<>
						<ContextualbarIcon name='info-circled' />
						<ContextualbarTitle>{t('Contact_Info')}</ContextualbarTitle>
					</>
				)}
				{context === 'edit' && (
					<>
						<ContextualbarIcon name='pencil' />
						<ContextualbarTitle>{t('Edit_Contact_Profile')}</ContextualbarTitle>
					</>
				)}
				<ContextualbarClose onClick={closeTab} />
			</ContextualbarHeader>
			{context === 'edit' ? (
				<ContactEditWithData id={_id} onCancel={handleCloseEdit} />
			) : (
				<ContactInfo id={_id} rid={room._id} route={PATH} />
			)}
		</>
	);
};

export default ContactInfoRouter;
