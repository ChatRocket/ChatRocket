module.export({default:()=>addMinutes});let toInteger;module.link("../_lib/toInteger/index.js",{default(v){toInteger=v}},0);let addMilliseconds;module.link("../addMilliseconds/index.js",{default(v){addMilliseconds=v}},1);let requiredArgs;module.link("../_lib/requiredArgs/index.js",{default(v){requiredArgs=v}},2);


var MILLISECONDS_IN_MINUTE = 60000;

/**
 * @name addMinutes
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the minutes added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * const result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE);
}