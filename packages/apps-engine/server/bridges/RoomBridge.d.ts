import { BaseBridge } from './BaseBridge';
import type { IMessage, IMessageRaw } from '../../definition/messages';
import type { IRoom } from '../../definition/rooms';
import type { IUser } from '../../definition/users';
export declare const GetMessagesSortableFields: readonly ["createdAt"];
export type GetMessagesOptions = {
    limit: number;
    skip: number;
    sort: Record<(typeof GetMessagesSortableFields)[number], 'asc' | 'desc'>;
};
export declare abstract class RoomBridge extends BaseBridge {
    doCreate(room: IRoom, members: Array<string>, appId: string): Promise<string>;
    doGetById(roomId: string, appId: string): Promise<IRoom>;
    doGetByName(roomName: string, appId: string): Promise<IRoom>;
    doGetCreatorById(roomId: string, appId: string): Promise<IUser | undefined>;
    doGetCreatorByName(roomName: string, appId: string): Promise<IUser | undefined>;
    doGetDirectByUsernames(usernames: Array<string>, appId: string): Promise<IRoom | undefined>;
    doGetMembers(roomId: string, appId: string): Promise<Array<IUser>>;
    doUpdate(room: IRoom, members: Array<string>, appId: string): Promise<void>;
    doCreateDiscussion(room: IRoom, parentMessage: IMessage | undefined, reply: string | undefined, members: Array<string>, appId: string): Promise<string>;
    doDelete(room: string, appId: string): Promise<void>;
    doGetModerators(roomId: string, appId: string): Promise<Array<IUser>>;
    doGetOwners(roomId: string, appId: string): Promise<Array<IUser>>;
    doGetLeaders(roomId: string, appId: string): Promise<Array<IUser>>;
    doGetMessages(roomId: string, options: GetMessagesOptions, appId: string): Promise<IMessageRaw[]>;
    doRemoveUsers(roomId: string, usernames: Array<string>, appId: string): Promise<void>;
    doGetUnreadByUser(roomId: string, uid: string, options: GetMessagesOptions, appId: string): Promise<IMessageRaw[]>;
    doGetUserUnreadMessageCount(roomId: string, uid: string, appId: string): Promise<number>;
    protected abstract create(room: IRoom, members: Array<string>, appId: string): Promise<string>;
    protected abstract getById(roomId: string, appId: string): Promise<IRoom>;
    protected abstract getByName(roomName: string, appId: string): Promise<IRoom>;
    protected abstract getCreatorById(roomId: string, appId: string): Promise<IUser | undefined>;
    protected abstract getCreatorByName(roomName: string, appId: string): Promise<IUser | undefined>;
    protected abstract getDirectByUsernames(usernames: Array<string>, appId: string): Promise<IRoom | undefined>;
    protected abstract getMembers(roomId: string, appId: string): Promise<Array<IUser>>;
    protected abstract update(room: IRoom, members: Array<string>, appId: string): Promise<void>;
    protected abstract createDiscussion(room: IRoom, parentMessage: IMessage | undefined, reply: string | undefined, members: Array<string>, appId: string): Promise<string>;
    protected abstract delete(room: string, appId: string): Promise<void>;
    protected abstract getModerators(roomId: string, appId: string): Promise<Array<IUser>>;
    protected abstract getOwners(roomId: string, appId: string): Promise<Array<IUser>>;
    protected abstract getLeaders(roomId: string, appId: string): Promise<Array<IUser>>;
    protected abstract getMessages(roomId: string, options: GetMessagesOptions, appId: string): Promise<IMessageRaw[]>;
    protected abstract removeUsers(roomId: string, usernames: Array<string>, appId: string): Promise<void>;
    protected abstract getUnreadByUser(roomId: string, uid: string, options: GetMessagesOptions, appId: string): Promise<IMessageRaw[]>;
    protected abstract getUserUnreadMessageCount(roomId: string, uid: string, appId: string): Promise<number>;
    private hasWritePermission;
    private hasReadPermission;
}
