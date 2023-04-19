import { Agenda } from '@rocket.chat/agenda';
import { CronHistory } from '@rocket.chat/models';
import { Random } from '@rocket.chat/random';
import type { ICronJobs } from '@rocket.chat/core-typings';

export const runCronJobFunctionAndPersistResult = async (
	fn: () => Promise<any>,
	jobName: string,
): Promise<void> => {
	const { insertedId } = await CronHistory.insertOne({
		_id: Random.id(),
		intendedAt: new Date(),
		name: jobName,
		startedAt: new Date(),
	});
	try {
		const result = await fn();
		await CronHistory.updateOne(
			{ _id: insertedId },
			{
				$set: {
					finishedAt: new Date(),
					result,
				},
			},
		);
		return result;
	} catch (error: any) {
		await CronHistory.updateOne(
			{ _id: insertedId },
			{
				$set: {
					finishedAt: new Date(),
					error: error?.stack ? error.stack : error,
				},
			},
		);
		throw error;
	}
};

export class AgendaCronJobs implements ICronJobs {
	private reservedJobs: { name: string; schedule: string; callback: () => any | Promise<any> }[] = [];

	private scheduler: Agenda | undefined;

	public get started(): boolean {
		return Boolean(this.scheduler);
	}

	public async start(scheduler: Agenda): Promise<void> {
		this.scheduler = scheduler;
		scheduler.start();

		for await (const { name, schedule, callback } of this.reservedJobs) {
			await this.add(name, schedule, callback);
		}

		this.reservedJobs = [];
	}

	public async add(
		name: string,
		schedule: string,
		callback: () => any | Promise<any>,
	): Promise<void> {
		if (!this.scheduler) {
			return this.reserve(name, schedule, callback);
		}

		this.scheduler.define(name, async () => {
			await runCronJobFunctionAndPersistResult(async () => callback(), name);
		});
		await this.scheduler.every(schedule, name, {}, {});
	}

	public async remove(name: string): Promise<void> {
		if (!this.scheduler) {
			return this.unreserve(name);
		}

		await this.scheduler.cancel({ name });
	}

	public async has(jobName: string): Promise<boolean> {
		if (!this.scheduler) {
			return Boolean(this.reservedJobs.find(({ name }) => name === jobName));
		}

		return this.scheduler.has({ jobName });
	}

	private async reserve(name: string, schedule: string, callback: () => any | Promise<any>): Promise<void> {
		this.reservedJobs = [...this.reservedJobs, { name, schedule, callback }];
	}

	private async unreserve(jobName: string): Promise<void> {
		this.reservedJobs = this.reservedJobs.filter(({ name }) => name !== jobName);
	}
}

export const cronJobs: ICronJobs = new AgendaCronJobs();
