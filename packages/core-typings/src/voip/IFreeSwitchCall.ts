import type { IRocketChatRecord } from '../IRocketChatRecord';
import type { IUser } from '../IUser';
import type { IFreeSwitchEventCall, IFreeSwitchEventCaller } from './IFreeSwitchEvent';

export interface IFreeSwitchCall extends IRocketChatRecord {
	UUID: string;
	channels: string[];
	events: IFreeSwitchCallEvent[];
	from?: Pick<IUser, '_id' | 'username' | 'name' | 'avatarETag'>;
	to?: Pick<IUser, '_id' | 'username' | 'name' | 'avatarETag'>;
	forwardedFrom?: Omit<IFreeSwitchCall, 'events'>[];
}

const knownEventTypes = [
	'NEW',
	'INIT',
	'CREATE',
	'DESTROY',
	'ANSWER',
	'HANGUP',
	'BRIDGE',
	'UNBRIDGE',
	'OUTGOING',
	'PARK',
	'UNPARK',
	'HOLD',
	'UNHOLD',
	'ORIGINATE',
	'UUID',
	'REPORTING',
	'ROUTING',
	'RINGING',
	'ACTIVE',
	'EARLY',
	'RING_WAIT',
	'EXECUTE',
	'CONSUME_MEDIA',
	'EXCHANGE_MEDIA',
	'OTHER',
	'OTHER_STATE',
	'OTHER_CALL_STATE',
] as const;

export type IFreeSwitchCallEventType = (typeof knownEventTypes)[number];

export const isKnownFreeSwitchEventType = (eventName: string): eventName is IFreeSwitchCallEventType =>
	knownEventTypes.includes(eventName as any);

export type IFreeSwitchCallEvent = {
	eventName: string;
	type: IFreeSwitchCallEventType;
	sequence?: string;
	channelUniqueId?: string;
	timestamp?: string;
	firedAt?: Date;
	caller?: IFreeSwitchEventCaller;
	call?: IFreeSwitchEventCall;

	otherType?: string;
	otherChannelId?: string;
};
