import { parse } from '../src';
import { paragraph, plain, bold, italic, strike } from '../src/utils';

test.each([
  [
    `This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&*()_+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok~, from now on we repeat some. , REPEATx2 This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&*()_+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok~, from now on we repeat some. REPEAT x3 This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&*()_+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok~, from now on we repeat some. REPEAT x4 This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&*()_+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok~, from now on we repeat some. REPEATx 5 This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&*()_+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok~, from now on we repeat some. , REPEAT x6 This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&*()_+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok~, from now on we repeat some. this can go long for some time, repeat x7 This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&*()_+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok~, from now on we repeat some. ,repeat x8 This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&*()_+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok~, from now on we repeat some.`,
    [
      paragraph([
        plain(
          'This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&'
        ),
        bold([
          plain('()'),
          italic([
            plain(
              `+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok`
            ),
            strike([
              plain(
                `, from now on we repeat some. , REPEATx2 This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&*()_+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok`
              ),
            ]),
            plain(
              ', from now on we repeat some. REPEAT x3 This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&*()'
            ),
          ]),
          plain(
            `+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok`
          ),
          strike([
            plain(
              ', from now on we repeat some. REPEAT x4 This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&*()'
            ),
            italic([
              plain(
                `+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok~, from now on we repeat some. REPEATx 5 This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&*()`
              ),
            ]),
            plain(
              `+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok`
            ),
          ]),
          plain(
            `, from now on we repeat some. , REPEAT x6 This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&`
          ),
        ]),
        plain(
          `()_+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok`
        ),
        strike([
          plain(
            `, from now on we repeat some. this can go long for some time, repeat x7 This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&*()`
          ),
          italic([
            plain(
              `+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok~, from now on we repeat some. ,repeat x8 This a message designed to stress test the message parser, trying to force several rules to stack at the same time !!@#$%^&*()`
            ),
          ]),
          plain(
            `+, overloading the symbols {}:"|<>?, some more text ,./;'\\[], numbers too 1234567890-= let it call s o s ok`
          ),
        ]),
        plain(', from now on we repeat some.'),
      ]),
    ],
  ],
])('parses %p', (input, output) => {
  expect(parse(input)).toMatchObject(output);
});
