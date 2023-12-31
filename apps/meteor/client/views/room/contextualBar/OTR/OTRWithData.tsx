import { useUserId } from '@rocket.chat/ui-contexts';
import type { ReactElement } from 'react';
import React, { useCallback, useEffect, useMemo } from 'react';

import OTR from '../../../../../app/otr/client/OTR';
import { OtrRoomState } from '../../../../../app/otr/lib/OtrRoomState';
import { usePresence } from '../../../../hooks/usePresence';
import { useReactiveValue } from '../../../../hooks/useReactiveValue';
import { useRoom } from '../../contexts/RoomContext';
import { useRoomToolbox } from '../../contexts/RoomToolboxContext';
import OTRComponent from './OTR';

const OTRWithData = (): ReactElement => {
	const uid = useUserId();
	const room = useRoom();
	const { closeTab } = useRoomToolbox();
	const otr = useMemo(() => {
		if (!uid) {
			return;
		}

		return OTR.getInstanceByRoomId(uid, room._id);
	}, [uid, room._id]);
	const otrState = useReactiveValue(useCallback(() => (otr ? otr.getState() : OtrRoomState.ERROR), [otr]));
	const peerUserPresence = usePresence(otr?.getPeerId());
	const userStatus = peerUserPresence?.status;
	const peerUsername = peerUserPresence?.username;
	const isOnline = !['offline', 'loading'].includes(userStatus || '');

	const handleStart = (): void => {
		otr?.handshake();
	};

	const handleEnd = (): void => {
		otr?.end();
	};

	const handleReset = (): void => {
		otr?.reset();
		otr?.handshake(true);
	};

	useEffect(() => {
		if (otrState !== OtrRoomState.ESTABLISHING) {
			return;
		}

		const timeout = setTimeout(() => {
			otr?.setState(OtrRoomState.TIMEOUT);
		}, 10000);

		return (): void => {
			clearTimeout(timeout);
		};
	}, [otr, otrState]);

	return (
		<OTRComponent
			isOnline={isOnline}
			onClickClose={closeTab}
			onClickStart={handleStart}
			onClickEnd={handleEnd}
			onClickRefresh={handleReset}
			otrState={otrState}
			peerUsername={peerUsername}
		/>
	);
};

export default OTRWithData;
