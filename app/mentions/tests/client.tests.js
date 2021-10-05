/* eslint-env mocha */
import 'babel-polyfill';
import assert from 'assert';

import { MentionsParser } from '../lib/MentionsParser';

let mentionsParser;
beforeEach(function functionName() {
	mentionsParser = new MentionsParser({
		pattern: '[0-9a-zA-Z-_.]+',
		me: () => 'me',
	});
});

describe('Mention', function() {
	describe('get pattern', () => {
		const regexp = '[0-9a-zA-Z-_.]+';
		beforeEach(() => { mentionsParser.pattern = () => regexp; });

		describe('by function', function functionName() {
			it(`should be equal to ${ regexp }`, () => {
				assert.equal(regexp, mentionsParser.pattern);
			});
		});

		describe('by const', function functionName() {
			it(`should be equal to ${ regexp }`, () => {
				assert.equal(regexp, mentionsParser.pattern);
			});
		});
	});

	describe('get useRealName', () => {
		beforeEach(() => { mentionsParser.useRealName = () => true; });

		describe('by function', function functionName() {
			it('should be true', () => {
				assert.equal(true, mentionsParser.useRealName);
			});
		});

		describe('by const', function functionName() {
			it('should be true', () => {
				assert.equal(true, mentionsParser.useRealName);
			});
		});
	});

	describe('get me', () => {
		const me = 'me';

		describe('by function', function functionName() {
			beforeEach(() => { mentionsParser.me = () => me; });

			it(`should be equal to ${ me }`, () => {
				assert.equal(me, mentionsParser.me);
			});
		});

		describe('by const', function functionName() {
			beforeEach(() => { mentionsParser.me = me; });

			it(`should be equal to ${ me }`, () => {
				assert.equal(me, mentionsParser.me);
			});
		});
	});

	describe('getUserMentions', function functionName() {
		describe('for simple text, no mentions', () => {
			const result = [];
			[
				'#genius',
				'hello genius how are you?',
			]
				.forEach((text) => {
					it(`should return "${ JSON.stringify(result) }" from "${ text }"`, () => {
						assert.deepEqual(result, mentionsParser.getUserMentions(text));
					});
				});
		});

		describe('for one user', () => {
			const result = ['@genius'];
			[
				'@genius',
				' @genius ',
				'hello @genius',
				// 'hello,@genius', // this test case is ignored since is not compatible with the message box behavior
				'@genius, hello',
				'@genius,hello',
				'hello @genius how are you?',
			]
				.forEach((text) => {
					it(`should return "${ JSON.stringify(result) }" from "${ text }"`, () => {
						assert.deepEqual(result, mentionsParser.getUserMentions(text));
					});
				});

			it.skip('should return without the "." from "@genius."', () => {
				assert.deepEqual(result, mentionsParser.getUserMentions('@genius.'));
			});

			it.skip('should return without the "_" from "@genius_"', () => {
				assert.deepEqual(result, mentionsParser.getUserMentions('@genius_'));
			});

			it.skip('should return without the "-" from "@genius-"', () => {
				assert.deepEqual(result, mentionsParser.getUserMentions('@genius-'));
			});
		});

		describe('for two users', () => {
			const result = ['@genius', '@all'];
			[
				'@genius @all',
				' @genius @all ',
				'hello @genius and @all',
				'@genius, hello @all',
				'hello @genius and @all how are you?',
			]
				.forEach((text) => {
					it(`should return "${ JSON.stringify(result) }" from "${ text }"`, () => {
						assert.deepEqual(result, mentionsParser.getUserMentions(text));
					});
				});
		});
	});

	describe('getChannelMentions', function functionName() {
		describe('for simple text, no mentions', () => {
			const result = [];
			[
				'@genius',
				'hello genius how are you?',
			]
				.forEach((text) => {
					it(`should return "${ JSON.stringify(result) }" from "${ text }"`, () => {
						assert.deepEqual(result, mentionsParser.getChannelMentions(text));
					});
				});
		});

		describe('for one channel', () => {
			const result = ['#general'];
			[
				'#general',
				' #general ',
				'hello #general',
				'#general, hello',
				'hello #general, how are you?',
			].forEach((text) => {
				it(`should return "${ JSON.stringify(result) }" from "${ text }"`, () => {
					assert.deepEqual(result, mentionsParser.getChannelMentions(text));
				});
			});

			it.skip('should return without the "." from "#general."', () => {
				assert.deepEqual(result, mentionsParser.getUserMentions('#general.'));
			});

			it.skip('should return without the "_" from "#general_"', () => {
				assert.deepEqual(result, mentionsParser.getUserMentions('#general_'));
			});

			it.skip('should return without the "-" from "#general."', () => {
				assert.deepEqual(result, mentionsParser.getUserMentions('#general-'));
			});
		});

		describe('for two channels', () => {
			const result = ['#general', '#other'];
			[
				'#general #other',
				' #general #other',
				'hello #general and #other',
				'#general, hello #other',
				'hello #general #other, how are you?',
			].forEach((text) => {
				it(`should return "${ JSON.stringify(result) }" from "${ text }"`, () => {
					assert.deepEqual(result, mentionsParser.getChannelMentions(text));
				});
			});
		});

		describe('for url with fragments', () => {
			const result = [];
			[
				'http://localhost/#general',
			].forEach((text) => {
				it(`should return nothing from "${ text }"`, () => {
					assert.deepEqual(result, mentionsParser.getChannelMentions(text));
				});
			});
		});

		describe('for messages with url and channels', () => {
			const result = ['#general'];
			[
				'http://localhost/#general #general',
			].forEach((text) => {
				it(`should return "${ JSON.stringify(result) }" from "${ text }"`, () => {
					assert.deepEqual(result, mentionsParser.getChannelMentions(text));
				});
			});
		});
	});
});

const message = {
	mentions: [{ username: 'genius', name: 'Genius' }, { username: 'admin', name: 'Admin' }, { username: 'me', name: 'Me' }, { username: 'specialchars', name: '<img onerror=alert(hello)>' }],
	channels: [{ name: 'general', _id: '42' }, { name: 'genius', _id: '169' }],
};

describe('replace methods', function() {
	describe('replaceUsers', () => {
		it('should render for @all', () => {
			const result = mentionsParser.replaceUsers('@all', message, 'me');
			assert.equal(result, '<a class="mention-link mention-link--all mention-link--group" data-group="all">all</a>');
		});

		const str2 = 'genius';

		it(`should render for "@${ str2 }"`, () => {
			const result = mentionsParser.replaceUsers(`@${ str2 }`, message, 'me');
			assert.equal(result, `<a class="mention-link mention-link--user" data-username="${ str2 }" title="${ str2 }">${ str2 }</a>`);
		});

		it(`should render for "hello ${ str2 }"`, () => {
			const result = mentionsParser.replaceUsers(`hello @${ str2 }`, message, 'me');
			assert.equal(result, `hello <a class="mention-link mention-link--user" data-username="${ str2 }" title="${ str2 }">${ str2 }</a>`);
		});

		it('should render for unknow/private user "hello @unknow"', () => {
			const result = mentionsParser.replaceUsers('hello @unknow', message, 'me');
			assert.equal(result, 'hello @unknow');
		});

		it('should render for me', () => {
			const result = mentionsParser.replaceUsers('hello @me', message, 'me');
			assert.equal(result, 'hello <a class="mention-link mention-link--me mention-link--user" data-username="me" title="me">me</a>');
		});
	});

	describe('replaceUsers (RealNames)', () => {
		beforeEach(() => {
			mentionsParser.useRealName = () => true;
		});

		it('should render for @all', () => {
			const result = mentionsParser.replaceUsers('@all', message, 'me');
			assert.equal(result, '<a class="mention-link mention-link--all mention-link--group" data-group="all">all</a>');
		});

		const str2 = 'genius';
		const str2Name = 'Genius';

		it(`should render for "@${ str2 }"`, () => {
			const result = mentionsParser.replaceUsers(`@${ str2 }`, message, 'me');
			assert.equal(result, `<a class="mention-link mention-link--user" data-username="${ str2 }" title="${ str2 }">${ str2Name }</a>`);
		});

		it(`should render for "hello @${ str2 }"`, () => {
			const result = mentionsParser.replaceUsers(`hello @${ str2 }`, message, 'me');
			assert.equal(result, `hello <a class="mention-link mention-link--user" data-username="${ str2 }" title="${ str2 }">${ str2Name }</a>`);
		});

		const specialchars = 'specialchars';
		const specialcharsName = '&lt;img onerror=alert(hello)&gt;';

		it(`should escape special characters in "hello @${ specialchars }"`, () => {
			const result = mentionsParser.replaceUsers(`hello @${ specialchars }`, message, 'me');
			assert.equal(result, `hello <a class="mention-link mention-link--user" data-username="${ specialchars }" title="${ specialchars }">${ specialcharsName }</a>`);
		});

		it(`should render for "hello<br>@${ str2 } <br>"`, () => {
			const result = mentionsParser.replaceUsers(`hello<br>@${ str2 } <br>`, message, 'me');
			assert.equal(result, `hello<br><a class="mention-link mention-link--user" data-username="${ str2 }" title="${ str2 }">${ str2Name }</a> <br>`);
		});

		it('should render for unknow/private user "hello @unknow"', () => {
			const result = mentionsParser.replaceUsers('hello @unknow', message, 'me');
			assert.equal(result, 'hello @unknow');
		});

		it('should render for me', () => {
			const result = mentionsParser.replaceUsers('hello @me', message, 'me');
			assert.equal(result, 'hello <a class="mention-link mention-link--me mention-link--user" data-username="me" title="me">Me</a>');
		});
	});

	describe('replaceChannels', () => {
		it('should render for #general', () => {
			const result = mentionsParser.replaceChannels('#general', message);
			assert.equal('<a class="mention-link mention-link--room" data-channel="42">#general</a>', result);
		});

		const str2 = '#genius';

		it(`should render for ${ str2 }`, () => {
			const result = mentionsParser.replaceChannels(str2, message);
			assert.equal(result, `<a class="mention-link mention-link--room" data-channel="169">${ str2 }</a>`);
		});

		it(`should render for "hello ${ str2 }"`, () => {
			const result = mentionsParser.replaceChannels(`hello ${ str2 }`, message);
			assert.equal(result, `hello <a class="mention-link mention-link--room" data-channel="169">${ str2 }</a>`);
		});

		it('should render for unknow/private channel "hello #unknow"', () => {
			const result = mentionsParser.replaceChannels('hello #unknow', message);
			assert.equal(result, 'hello #unknow');
		});
	});

	describe('parse all', () => {
		it('should render for #general', () => {
			message.html = '#general';
			const result = mentionsParser.parse(message, 'me');
			assert.equal(result.html, '<a class="mention-link mention-link--room" data-channel="42">#general</a>');
		});

		it('should render for "#general and @genius', () => {
			message.html = '#general and @genius';
			const result = mentionsParser.parse(message, 'me');
			assert.equal(result.html, '<a class="mention-link mention-link--room" data-channel="42">#general</a> and <a class="mention-link mention-link--user" data-username="genius" title="genius">genius</a>');
		});

		it('should render for "', () => {
			message.html = '';
			const result = mentionsParser.parse(message, 'me');
			assert.equal(result.html, '');
		});

		it('should render for "simple text', () => {
			message.html = 'simple text';
			const result = mentionsParser.parse(message, 'me');
			assert.equal(result.html, 'simple text');
		});
	});

	describe('parse all (RealNames)', () => {
		beforeEach(() => {
			mentionsParser.useRealName = () => true;
		});

		it('should render for #general', () => {
			message.html = '#general';
			const result = mentionsParser.parse(message, 'me');
			assert.equal(result.html, '<a class="mention-link mention-link--room" data-channel="42">#general</a>');
		});

		it('should render for "#general and @genius', () => {
			message.html = '#general and @genius';
			const result = mentionsParser.parse(message, 'me');
			assert.equal(result.html, '<a class="mention-link mention-link--room" data-channel="42">#general</a> and <a class="mention-link mention-link--user" data-username="genius" title="genius">Genius</a>');
		});

		it('should render for "', () => {
			message.html = '';
			const result = mentionsParser.parse(message, 'me');
			assert.equal(result.html, '');
		});

		it('should render for "simple text', () => {
			message.html = 'simple text';
			const result = mentionsParser.parse(message, 'me');
			assert.equal(result.html, 'simple text');
		});
	});
});
