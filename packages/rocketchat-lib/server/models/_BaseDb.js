/* globals MongoInternals */

const baseName = 'rocketchat_';
import {EventEmitter} from 'events';

const trash = new Mongo.Collection(baseName + '_trash');
try {
	trash._ensureIndex({ collection: 1 });
	trash._ensureIndex({ _deletedAt: 1 }, { expireAfterSeconds: 60 * 60 * 24 * 30 });
} catch (e) {
	console.log(e);
}

class ModelsBaseDb extends EventEmitter {
	constructor(model, baseModel) {
		super();

		if (Match.test(model, String)) {
			this.name = model;
			this.collectionName = this.baseName + this.name;
			this.model = new Mongo.Collection(this.collectionName);
		} else {
			this.name = model._name;
			this.collectionName = this.name;
			this.model = model;
		}

		this.baseModel = baseModel;

		this.wrapModel();

		this.isOplogAvailable = MongoInternals.defaultRemoteCollectionDriver().mongo._oplogHandle && !!MongoInternals.defaultRemoteCollectionDriver().mongo._oplogHandle.onOplogEntry;

		// When someone start listening for changes we start oplog if available
		this.once('newListener', (event/*, listener*/) => {
			if (event === 'change') {
				if (this.isOplogAvailable) {
					const query = {
						collection: this.collectionName
					};

					MongoInternals.defaultRemoteCollectionDriver().mongo._oplogHandle.onOplogEntry(query, this.processOplogRecord.bind(this));
				}
			}
		});

		this.tryEnsureIndex({ '_updatedAt': 1 });
	}

	get baseName() {
		return baseName;
	}

	setUpdatedAt(record = {}, checkQuery = false, query) {
		if (checkQuery === true) {
			if (!query || Object.keys(query).length === 0) {
				throw new Meteor.Error('Models._Base: Empty query');
			}
		}

		if (/(^|,)\$/.test(Object.keys(record).join(','))) {
			record.$set = record.$set || {};
			record.$set._updatedAt = new Date;
		} else {
			record._updatedAt = new Date;
		}

		return record;
	}

	wrapModel() {
		this.originals = {
			insert: this.model.insert.bind(this.model),
			update: this.model.update.bind(this.model),
			remove: this.model.remove.bind(this.model)
		};
		const self = this;

		this.model.insert = function() {
			return self.insert(...arguments);
		};

		this.model.update = function() {
			return self.update(...arguments);
		};

		this.model.remove = function() {
			return self.remove(...arguments);
		};
	}

	find() {
		return this.model.find(...arguments);
	}

	findOne() {
		return this.model.findOne(...arguments);
	}

	defineSyncStrategy(query, modifier, options) {
		if (this.baseModel.useCache === false) {
			return 'db';
		}

		if (options.upsert === true) {
			return 'db';
		}

		const dbModifiers = [
			'$currentDate',
			'$bit',
			'$pull',
			'$pushAll',
			'$push',
			'$setOnInsert'
		];

		const modifierKeys = Object.keys(modifier);

		if (_.intersection(modifierKeys, dbModifiers).length > 0) {
			return 'db';
		}

		const placeholderFields = Object.keys(query).filter(item => item.indexOf('$') > -1);
		if (placeholderFields.length > 0) {
			return 'db';
		}

		return 'cache';
	}

	processOplogRecord(action) {
		if (action.op.op === 'i') {
			this.emit('change', {
				action: 'insert',
				id: action.op.o._id,
				data: action.op.o,
				oplog: true
			});
			return;
		}

		if (action.op.op === 'u') {
			if (!action.op.o.$set && !action.op.o.$unset) {
				this.emit('change', {
					action: 'update:record',
					id: action.id,
					data: action.op.o,
					oplog: true
				});
				return;
			}

			let diff = {};
			if (action.op.o.$set) {
				for (let key in action.op.o.$set) {
					if (action.op.o.$set.hasOwnProperty(key)) {
						diff[key] = action.op.o.$set[key];
					}
				}
			}

			if (action.op.o.$unset) {
				for (let key in action.op.o.$unset) {
					if (action.op.o.$unset.hasOwnProperty(key)) {
						diff[key] = undefined;
					}
				}
			}

			this.emit('change', {
				action: 'update:diff',
				id: action.id,
				data: diff,
				oplog: true
			});
			return;
		}

		if (action.op.op === 'd') {
			this.emit('change', {
				action: 'remove',
				id: action.id,
				oplog: true
			});
			return;
		}
	}

	insert(record) {
		this.setUpdatedAt(record);

		const result = this.originals.insert(...arguments);
		if (!this.isOplogAvailable && this.listenerCount('change') > 0) {
			this.emit('change', {
				action: 'insert',
				id: result,
				data: _.extend({}, record),
				oplog: false
			});
		}

		record._id = result;

		return result;
	}

	update(query, update, options = {}) {
		this.setUpdatedAt(update, true, query);

		let strategy = this.defineSyncStrategy(query, update, options);
		let ids = [];
		if (!this.isOplogAvailable && this.listenerCount('change') > 0 && strategy === 'db') {
			const findOptions = {fields: {_id: 1}};
			let records = options.multi ? this.find(query, findOptions).fetch() : this.findOne(query, findOptions) || [];
			if (!Array.isArray(records)) {
				records = [records];
			}

			ids = records.map(item => item._id);
			if (options.upsert !== true) {
				query = {
					_id: {
						$in: ids
					}
				};
			}
		}

		const result = this.originals.update(query, update, options);

		if (!this.isOplogAvailable && this.listenerCount('change') > 0) {
			if (strategy === 'db') {
				if (options.upsert === true) {
					if (result.insertedId) {
						this.emit('change', {
							action: 'insert',
							id: result.insertedId,
							data: this.findOne({_id: result.insertedId}),
							oplog: false
						});
						return;
					}

					query = {
						_id: {
							$in: ids
						}
					};
				}

				let records = options.multi ? this.find(query).fetch() : this.findOne(query) || [];
				if (!Array.isArray(records)) {
					records = [records];
				}
				for (const record of records) {
					this.emit('change', {
						action: 'update:record',
						id: record._id,
						data: _.extend({}, record),
						oplog: false
					});
				}
			} else {
				this.emit('change', {
					action: 'update:query',
					id: undefined,
					data: {
						query: query,
						update: update,
						options: options
					},
					oplog: false
				});
			}
		}
		return result;
	}

	upsert(query, update, options = {}) {
		options.upsert = true;
		options._returnObject = true;
		return this.update(query, update, options);
	}

	remove(query) {
		const records = this.model.find(query).fetch();

		const ids = [];
		for (const record of records) {
			ids.push(record._id);

			record._deletedAt = new Date;
			record.__collection__ = this.name;

			trash.upsert({_id: record._id}, _.omit(record, '_id'));
		}

		query = { _id: { $in: ids } };

		const result = this.originals.remove(query);

		if (!this.isOplogAvailable && this.listenerCount('change') > 0) {
			for (const record of records) {
				this.emit('change', {
					action: 'remove',
					id: record._id,
					data: _.extend({}, record),
					oplog: false
				});
			}
		}

		return result;
	}

	insertOrUpsert(...args) {
		if (args[0] && args[0]._id) {
			const _id = args[0]._id;
			delete args[0]._id;
			args.unshift({
				_id: _id
			});

			this.upsert(...args);
			return _id;
		} else {
			return this.insert(...args);
		}
	}

	allow() {
		return this.model.allow(...arguments);
	}

	deny() {
		return this.model.deny(...arguments);
	}

	ensureIndex() {
		return this.model._ensureIndex(...arguments);
	}

	dropIndex() {
		return this.model._dropIndex(...arguments);
	}

	tryEnsureIndex() {
		try {
			return this.ensureIndex(...arguments);
		} catch (e) {
			console.error('Error creating index:', this.name, '->', ...arguments, e);
		}
	}

	tryDropIndex() {
		try {
			return this.dropIndex(...arguments);
		} catch (e) {
			console.error('Error dropping index:', this.name, '->', ...arguments, e);
		}
	}

	trashFind(query, options) {
		query.__collection__ = this.name;

		return trash.find(query, options);
	}

	trashFindDeletedAfter(deletedAt, query = {}, options) {
		query.__collection__ = this.name;
		query._deletedAt = {
			$gt: deletedAt
		};

		return trash.find(query, options);
	}
}

export default ModelsBaseDb;
