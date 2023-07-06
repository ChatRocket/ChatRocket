import type { Icon } from '@rocket.chat/fuselage';
import { Box, Button, Modal } from '@rocket.chat/fuselage';
import { useRouter, useSetModal, useSetting, useTranslation } from '@rocket.chat/ui-contexts';
import type { ReactNode, ReactElement, ComponentProps } from 'react';
import React, { useCallback } from 'react';

type UpsellModalProps = {
	children?: ReactNode;
	tagline?: ReactNode;
	cancelText?: ReactNode;
	confirmText?: ReactNode;
	title: string | ReactElement;
	subtitle?: string | ReactElement;
	description?: string | ReactElement;
	icon?: ComponentProps<typeof Icon>['name'];
	img: ComponentProps<typeof Modal.HeroImage>['src'];
	onCancel?: () => void;
	onClose?: () => void;
	onConfirm?: () => void;
	onCloseEffect?: () => void;
};

const UpsellModal = ({
	tagline,
	title,
	subtitle,
	img,
	cancelText,
	confirmText,
	icon,
	description,
	onCancel,
	onConfirm,
	onClose = onCancel,
	onCloseEffect,
}: UpsellModalProps) => {
	const t = useTranslation();
	const cloudWorkspaceHadTrial = Boolean(useSetting('Cloud_Workspace_Had_Trial'));

	const router = useRouter();
	const setModal = useSetModal();

	const handleModalClose = useCallback(() => {
		setModal(null);
		if (onCloseEffect) {
			onCloseEffect();
		}
	}, [onCloseEffect, setModal]);

	const handleConfirmModal = useCallback(() => {
		handleModalClose();
		router.navigate({
			pathname: '/admin/upgrade/go-fully-featured-registered',
		});
	}, [handleModalClose, router]);

	const talkToSales = 'https://go.rocket.chat/i/contact-sales';
	const handleCancelModal = useCallback(() => {
		handleModalClose();
		window.open(talkToSales, '_blank');
	}, [handleModalClose]);

	return (
		<Modal.Backdrop onClick={onClose ?? handleModalClose}>
			<Modal>
				<Modal.Header>
					{icon && <Modal.Icon name={icon} />}
					<Modal.HeaderText>
						<Modal.Tagline color='font-annotation'>{tagline ?? t('Enterprise_capability')}</Modal.Tagline>
						<Modal.Title>{title}</Modal.Title>
					</Modal.HeaderText>
					<Modal.Close title={t('Close')} onClick={onClose ?? handleModalClose} />
				</Modal.Header>
				<Modal.Content>
					<Modal.HeroImage src={img} />
					{subtitle && (
						<Box is='h3' fontScale='h3'>
							{subtitle}
						</Box>
					)}
					<br />
					{description && <Box fontScale='p2'>{description}</Box>}
				</Modal.Content>
				<Modal.Footer>
					<Modal.FooterControllers>
						<Button secondary onClick={onCancel ?? handleCancelModal}>
							{cancelText ?? t('Talk_to_an_expert')}
						</Button>

						<Button primary onClick={onConfirm ?? handleConfirmModal}>
							{confirmText ?? cloudWorkspaceHadTrial ? t('Learn_more') : t('Start_a_free_trial')}
						</Button>
					</Modal.FooterControllers>
				</Modal.Footer>
			</Modal>
		</Modal.Backdrop>
	);
};

export default UpsellModal;
