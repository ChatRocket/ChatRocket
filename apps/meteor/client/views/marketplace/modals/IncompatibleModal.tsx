import type { App } from '@rocket.chat/core-typings';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

import IframeModal from '../IframeModal';
import { useAppsOrchestrator } from '../hooks/useAppsOrchestrator';
import { marketplaceQueryKeys } from '../queryKeys';

type IncompatibleModalProps = {
	app: App;
	action: 'subscribe' | 'update';
	onClose: () => void;
};

const IncompatibleModal = ({ app, action, onClose }: IncompatibleModalProps) => {
	const appsOrchestrator = useAppsOrchestrator();

	const { isSuccess, data: url } = useQuery({
		queryKey: marketplaceQueryKeys.app.urls.incompatible(app.id),
		queryFn: async () => {
			const data = await appsOrchestrator.buildIncompatibleExternalUrl(app.id, app.marketplaceVersion, action);
			return data.url;
		},
	});

	if (!isSuccess) {
		return null;
	}

	return <IframeModal url={url} confirm={onClose} cancel={onClose} />;
};

export default IncompatibleModal;
