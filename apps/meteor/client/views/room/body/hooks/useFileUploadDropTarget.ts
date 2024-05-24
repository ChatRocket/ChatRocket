import { useMutableCallback } from '@rocket.chat/fuselage-hooks';
import { useSetting, useTranslation, useUser } from '@rocket.chat/ui-contexts';
import type { ReactNode } from 'react';
import type React from 'react';
import { useCallback, useMemo } from 'react';

import { useIsRoomOverMacLimit } from '../../../../hooks/omnichannel/useIsRoomOverMacLimit';
import { useReactiveValue } from '../../../../hooks/useReactiveValue';
import { roomCoordinator } from '../../../../lib/rooms/roomCoordinator';
import { useChat } from '../../contexts/ChatContext';
import { useRoom } from '../../contexts/RoomContext';
import { useDropTarget } from './useDropTarget';

export const useFileUploadDropTarget = (): readonly [
	fileUploadTriggerProps: {
		onDragEnter: (event: React.DragEvent<Element>) => void;
	},
	fileUploadOverlayProps: {
		visible: boolean;
		onDismiss: () => void;
		enabled: boolean;
		reason?: ReactNode;
	},
] => {
	const room = useRoom();
	const { triggerProps, overlayProps } = useDropTarget();

	const isRoomOverMacLimit = useIsRoomOverMacLimit(room);

	const t = useTranslation();

	const fileUploadEnabled = useSetting<boolean>('FileUpload_Enabled');
	const rejectUnknownMediaTypes = useSetting<boolean>('FileUpload_UnknownMediaTypeProtection');
	const user = useUser();
	const fileUploadAllowedForUser = useReactiveValue(
		useCallback(() => !roomCoordinator.readOnly(room._id, { username: user?.username }), [room._id, user?.username]),
	);

	const chat = useChat();

	const onFileDrop = useMutableCallback(async (files: File[]) => {
		const { mime } = await import('../../../../../app/utils/lib/mimeTypes');

		const getUniqueFiles = () => {
			const uniqueFiles: File[] = [];
			const st: Set<number> = new Set();
			files.forEach((file) => {
				const key = file.size;
				if (!st.has(key)) {
					uniqueFiles.push(file);
					st.add(key);
				}
			});
			return uniqueFiles;
		};
		const uniqueFiles = getUniqueFiles();

		const uploads = Array.from(uniqueFiles).map((file) => {
			const fileMimeType = mime.lookup(file.name);
			Object.defineProperty(file, 'type', { value: fileMimeType ?? (rejectUnknownMediaTypes ? undefined : 'application/octet-stream') });
			return file;
		});

		chat?.flows.uploadFiles(uploads);
	});

	const allOverlayProps = useMemo(() => {
		if (!fileUploadEnabled || isRoomOverMacLimit) {
			return {
				enabled: false,
				reason: t('FileUpload_Disabled'),
				...overlayProps,
			} as const;
		}

		if (!fileUploadAllowedForUser) {
			return {
				enabled: false,
				reason: t('error-not-allowed'),
				...overlayProps,
			} as const;
		}

		return {
			enabled: true,
			onFileDrop,
			...overlayProps,
		} as const;
	}, [fileUploadAllowedForUser, fileUploadEnabled, isRoomOverMacLimit, onFileDrop, overlayProps, t]);

	return [triggerProps, allOverlayProps] as const;
};
