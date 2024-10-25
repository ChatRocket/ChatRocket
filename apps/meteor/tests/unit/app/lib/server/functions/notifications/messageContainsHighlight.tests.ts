import { expect } from 'chai';
import { describe, it } from 'mocha';

import { messageContainsHighlight } from '../../../../../../../app/lib/server/functions/notifications/messageContainsHighlight';

describe('messageContainsHighlight', () => {
	it('should return false for no highlights', async () => {
		const message = {
			msg: 'regular message',
		};
		expect(messageContainsHighlight(message, [])).to.be.false;
	});

	it('should return true when find a highlight in the beggining of the message', async () => {
		const message = {
			msg: 'highlighted regular message',
		};
		expect(messageContainsHighlight(message, ['highlighted'])).to.be.true;
	});

	it('should return true when find a highlight in the end of the message', async () => {
		const message = {
			msg: 'highlighted regular message',
		};
		expect(messageContainsHighlight(message, ['message'])).to.be.true;
	});

	it('should return false if the highlight is just part of the word', async () => {
		const message = {
			msg: 'highlighted regular message',
		};
		expect(messageContainsHighlight(message, ['light'])).to.be.false;
	});

	it('should return true if find one of the multiple highlights', async () => {
		const message = {
			msg: 'highlighted regular message',
		};
		expect(messageContainsHighlight(message, ['high', 'ssage', 'regular', 'light'])).to.be.true;
	});
});
