import type { ILivechatInquiryModel } from '@rocket.chat/model-typings';
import type { Collection, Db, Document, FindOptions, DistinctOptions, UpdateResult } from 'mongodb';
import type { ILivechatInquiryRecord, IMessage, RocketChatRecordDeleted } from '@rocket.chat/core-typings';
import { LivechatInquiryStatus } from '@rocket.chat/core-typings';
import { Settings } from '@rocket.chat/models';

import { BaseRaw } from './BaseRaw';

// @ts-ignore Circular reference on field 'attachments'
export class LivechatInquiryRaw extends BaseRaw<ILivechatInquiryRecord> implements ILivechatInquiryModel {
	constructor(db: Db, trash?: Collection<RocketChatRecordDeleted<ILivechatInquiryRecord>>) {
		super(db, 'livechat_inquiry', trash);
	}

	findOneQueuedByRoomId(rid: string): Promise<(ILivechatInquiryRecord & { status: LivechatInquiryStatus.QUEUED }) | null> {
		const query = {
			rid,
			status: LivechatInquiryStatus.QUEUED,
		};
		return this.findOne(query) as unknown as Promise<(ILivechatInquiryRecord & { status: LivechatInquiryStatus.QUEUED }) | null>;
	}

	findOneByRoomId<T = ILivechatInquiryRecord>(
		rid: string,
		options: FindOptions<T extends ILivechatInquiryRecord ? ILivechatInquiryRecord : T>,
	): Promise<T | null> {
		const query = {
			rid,
		};
		return this.findOne(query, options);
	}

	getDistinctQueuedDepartments(options: DistinctOptions): Promise<string[]> {
		return this.col.distinct('department', { status: LivechatInquiryStatus.QUEUED }, options);
	}

	async setDepartmentByInquiryId(inquiryId: string, department: string): Promise<ILivechatInquiryRecord | null> {
		const updated = await this.findOneAndUpdate({ _id: inquiryId }, { $set: { department } }, { returnDocument: 'after' });
		return updated?.value;
	}

	async setLastMessageByRoomId(rid: string, message: IMessage): Promise<UpdateResult> {
		return this.updateOne({ rid }, { $set: { lastMessage: message } });
	}

	async findNextAndLock(department?: string): Promise<ILivechatInquiryRecord | null> {
		const date = new Date();
		const result = await this.col.findOneAndUpdate(
			{
				status: LivechatInquiryStatus.QUEUED,
				...(department && { department }),
				$or: [
					{
						locked: true,
						lockedAt: {
							$lte: new Date(date.getTime() - 5000),
						},
					},
					{
						locked: false,
					},
					{
						locked: { $exists: false },
					},
				],
			},
			{
				$set: {
					locked: true,
					// apply 5 secs lock lifetime
					lockedAt: new Date(),
				},
			},
			{
				sort: {
					estimatedWaitingTimeQueue: 1,
					estimatedServiceTimeAt: 1,
				},
			},
		);

		return result.value;
	}

	async unlock(inquiryId: string): Promise<UpdateResult> {
		return this.updateOne({ _id: inquiryId }, { $unset: { locked: 1, lockedAt: 1 } });
	}

	async unlockAll(): Promise<UpdateResult | Document> {
		return this.updateMany(
			{ $or: [{ lockedAt: { $exists: true } }, { locked: { $exists: true } }] },
			{ $unset: { locked: 1, lockedAt: 1 } },
		);
	}

	async getSortingQuery(): Promise<Document[]> {
		const sortMechanism = await Settings.findOneById('Omnichannel_sorting_mechanism');
		const $sort: { 'R.priorityWeight'?: number; 'estimatedServiceTimeAt'?: number; 'ts'?: number } = {};
		const filter = [];
		switch (sortMechanism?.value) {
			case 'Priority':
				$sort['R.priorityWeight'] = -1;
				filter.push(
					...[
						{
							$lookup: {
								from: 'rocketchat_room',
								localField: 'rid',
								foreignField: '_id',
								as: 'R',
								pipeline: [
									{
										$project: {
											priorityId: 1,
											priorityWeight: 1,
											_id: 0,
										},
									},
								],
							},
						},
						{ $unwind: '$R' },
					],
				);
				break;
			case 'SLAs':
				$sort.estimatedServiceTimeAt = 1;
				break;
			case 'Timestamp':
				$sort.ts = -1;
				break;
			default:
				break;
		}
		filter.push(...[{ $sort: { ...$sort } }]);
		return filter;
	}
}
