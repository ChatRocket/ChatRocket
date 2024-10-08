import type { ILivechatContact } from '../../../src/definition/livechat';
import { ContactBridge } from '../../../src/server/bridges';

export class TestContactBridge extends ContactBridge {
    protected getById(id: ILivechatContact['_id']): Promise<ILivechatContact> {
        throw new Error('Method not implemented.');
    }

    protected verifyContact(verifyContactChannelParams: {
        contactId: string;
        field: string;
        value: string;
        channelName: string;
        visitorId: string;
        roomId: string;
    }): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
