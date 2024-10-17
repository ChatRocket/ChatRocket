import { expect } from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

const modelsMock = {
	LivechatContacts: {
		findOneById: sinon.stub(),
		findSimilarVerifiedContacts: sinon.stub(),
		deleteMany: sinon.stub(),
	},
};

const contactMergerStub = {
	getAllFieldsFromContact: sinon.stub(),
	mergeFieldsIntoContact: sinon.stub(),
};

const { runMergeContacts } = proxyquire.noCallThru().load('../../../../../../server/patches/mergeContacts', {
	'../../../app/livechat/server/lib/Contacts': { mergeContacts: sinon.stub() },
	'../../../app/livechat/server/lib/ContactMerger': { ContactMerger: contactMergerStub },
	'../../../app/license/client': {
		hasLicense: sinon.stub().resolves(true),
	},
	'@rocket.chat/models': modelsMock,
});

describe('mergeContacts', () => {
	const targetChannel = {
		name: 'channelName',
		visitorId: 'visitorId',
		verified: true,
		verifiedAt: new Date(),
		field: 'field',
		value: 'value',
	};

	beforeEach(() => {
		modelsMock.LivechatContacts.findOneById.reset();
		modelsMock.LivechatContacts.findSimilarVerifiedContacts.reset();
		modelsMock.LivechatContacts.deleteMany.reset();
		contactMergerStub.getAllFieldsFromContact.reset();
		contactMergerStub.mergeFieldsIntoContact.reset();
	});

	afterEach(() => {
		sinon.restore();
	});

	it('should do nothing if there are no similar verified contacts', async () => {
		modelsMock.LivechatContacts.findOneById.resolves({ _id: 'contactId', channels: [targetChannel] });
		modelsMock.LivechatContacts.findSimilarVerifiedContacts.resolves([]);

		await runMergeContacts(() => undefined, 'contactId', targetChannel);

		expect(modelsMock.LivechatContacts.findOneById.calledOnceWith('contactId')).to.be.true;
		expect(modelsMock.LivechatContacts.findSimilarVerifiedContacts.calledOnceWith(targetChannel, 'contactId')).to.be.true;
		expect(modelsMock.LivechatContacts.deleteMany.notCalled).to.be.true;
		expect(contactMergerStub.getAllFieldsFromContact.notCalled).to.be.true;
		expect(contactMergerStub.mergeFieldsIntoContact.notCalled).to.be.true;
	});

	it('should be able to merge similar contacts', async () => {
		const similarContact = {
			_id: 'differentId',
			emails: ['email2'],
			phones: ['phone2'],
			channels: [{ name: 'channelName2', visitorId: 'visitorId2', field: 'field', value: 'value' }],
		};
		const originalContact = {
			_id: 'contactId',
			emails: ['email1'],
			phones: ['phone1'],
			channels: [targetChannel],
		};

		modelsMock.LivechatContacts.findOneById.resolves(originalContact);
		modelsMock.LivechatContacts.findSimilarVerifiedContacts.resolves([similarContact]);

		await runMergeContacts(() => undefined, 'contactId', targetChannel);

		expect(modelsMock.LivechatContacts.findOneById.calledOnceWith('contactId')).to.be.true;
		expect(modelsMock.LivechatContacts.findSimilarVerifiedContacts.calledOnceWith(targetChannel, 'contactId')).to.be.true;
		expect(contactMergerStub.getAllFieldsFromContact.calledOnceWith(similarContact)).to.be.true;
		expect(contactMergerStub.mergeFieldsIntoContact.calledOnceWith(originalContact)).to.be.true;
		expect(modelsMock.LivechatContacts.deleteMany.calledOnceWith({ _id: { $in: ['differentId'] } })).to.be.true;
	});
});
