module.export({useNumberFieldState:()=>$de67e98908f0c6ee$export$7f629e9dc1ecf37c});let $vhjCi$useControlledState,$vhjCi$clamp,$vhjCi$snapValueToStep;module.link("@react-stately/utils",{useControlledState(v){$vhjCi$useControlledState=v},clamp(v){$vhjCi$clamp=v},snapValueToStep(v){$vhjCi$snapValueToStep=v}},0);let $vhjCi$NumberFormatter,$vhjCi$NumberParser;module.link("@internationalized/number",{NumberFormatter(v){$vhjCi$NumberFormatter=v},NumberParser(v){$vhjCi$NumberParser=v}},1);let $vhjCi$useState,$vhjCi$useMemo,$vhjCi$useCallback,$vhjCi$useRef;module.link("react",{useState(v){$vhjCi$useState=v},useMemo(v){$vhjCi$useMemo=v},useCallback(v){$vhjCi$useCallback=v},useRef(v){$vhjCi$useRef=v}},2);



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $de67e98908f0c6ee$export$7f629e9dc1ecf37c(props) {
    let { minValue: minValue , maxValue: maxValue , step: step , formatOptions: formatOptions , value: value , defaultValue: defaultValue , onChange: onChange , locale: locale , isDisabled: isDisabled , isReadOnly: isReadOnly  } = props;
    let [numberValue, setNumberValue] = (0, $vhjCi$useControlledState)(value, isNaN(defaultValue) ? NaN : defaultValue, onChange);
    let [inputValue, setInputValue] = (0, $vhjCi$useState)(()=>isNaN(numberValue) ? "" : new (0, $vhjCi$NumberFormatter)(locale, formatOptions).format(numberValue));
    let numberParser = (0, $vhjCi$useMemo)(()=>new (0, $vhjCi$NumberParser)(locale, formatOptions), [
        locale,
        formatOptions
    ]);
    let numberingSystem = (0, $vhjCi$useMemo)(()=>numberParser.getNumberingSystem(inputValue), [
        numberParser,
        inputValue
    ]);
    let formatter = (0, $vhjCi$useMemo)(()=>new (0, $vhjCi$NumberFormatter)(locale, {
            ...formatOptions,
            numberingSystem: numberingSystem
        }), [
        locale,
        formatOptions,
        numberingSystem
    ]);
    let intlOptions = (0, $vhjCi$useMemo)(()=>formatter.resolvedOptions(), [
        formatter
    ]);
    let format = (0, $vhjCi$useCallback)((value)=>isNaN(value) || value === null ? "" : formatter.format(value), [
        formatter
    ]);
    let clampStep = !isNaN(step) ? step : 1;
    if (intlOptions.style === "percent" && isNaN(step)) clampStep = 0.01;
    // Update the input value when the number value or format options change. This is done
    // in a useEffect so that the controlled behavior is correct and we only update the
    // textfield after prop changes.
    let prevValue = (0, $vhjCi$useRef)(numberValue);
    let prevLocale = (0, $vhjCi$useRef)(locale);
    let prevFormatOptions = (0, $vhjCi$useRef)(formatOptions);
    if (!Object.is(numberValue, prevValue.current) || locale !== prevLocale.current || formatOptions !== prevFormatOptions.current) {
        setInputValue(format(numberValue));
        prevValue.current = numberValue;
        prevLocale.current = locale;
        prevFormatOptions.current = formatOptions;
    }
    // Store last parsed value in a ref so it can be used by increment/decrement below
    let parsedValue = (0, $vhjCi$useMemo)(()=>numberParser.parse(inputValue), [
        numberParser,
        inputValue
    ]);
    let parsed = (0, $vhjCi$useRef)(0);
    parsed.current = parsedValue;
    let commit = ()=>{
        // Set to empty state if input value is empty
        if (!inputValue.length) {
            setNumberValue(NaN);
            setInputValue(value === undefined ? "" : format(numberValue));
            return;
        }
        // if it failed to parse, then reset input to formatted version of current number
        if (isNaN(parsed.current)) {
            setInputValue(format(numberValue));
            return;
        }
        // Clamp to min and max, round to the nearest step, and round to specified number of digits
        let clampedValue;
        if (isNaN(step)) clampedValue = (0, $vhjCi$clamp)(parsed.current, minValue, maxValue);
        else clampedValue = (0, $vhjCi$snapValueToStep)(parsed.current, minValue, maxValue, step);
        clampedValue = numberParser.parse(format(clampedValue));
        setNumberValue(clampedValue);
        // in a controlled state, the numberValue won't change, so we won't go back to our old input without help
        setInputValue(format(value === undefined ? clampedValue : numberValue));
    };
    let safeNextStep = (operation, minMax)=>{
        let prev = parsed.current;
        if (isNaN(prev)) {
            // if the input is empty, start from the min/max value when incrementing/decrementing,
            // or zero if there is no min/max value defined.
            let newValue = isNaN(minMax) ? 0 : minMax;
            return (0, $vhjCi$snapValueToStep)(newValue, minValue, maxValue, clampStep);
        } else {
            // otherwise, first snap the current value to the nearest step. if it moves in the direction
            // we're going, use that value, otherwise add the step and snap that value.
            let newValue1 = (0, $vhjCi$snapValueToStep)(prev, minValue, maxValue, clampStep);
            if (operation === "+" && newValue1 > prev || operation === "-" && newValue1 < prev) return newValue1;
            return (0, $vhjCi$snapValueToStep)($de67e98908f0c6ee$var$handleDecimalOperation(operation, prev, clampStep), minValue, maxValue, clampStep);
        }
    };
    let increment = ()=>{
        let newValue = safeNextStep("+", minValue);
        // if we've arrived at the same value that was previously in the state, the
        // input value should be updated to match
        // ex type 4, press increment, highlight the number in the input, type 4 again, press increment
        // you'd be at 5, then incrementing to 5 again, so no re-render would happen and 4 would be left in the input
        if (newValue === numberValue) setInputValue(format(newValue));
        setNumberValue(newValue);
    };
    let decrement = ()=>{
        let newValue = safeNextStep("-", maxValue);
        if (newValue === numberValue) setInputValue(format(newValue));
        setNumberValue(newValue);
    };
    let incrementToMax = ()=>{
        if (maxValue != null) setNumberValue((0, $vhjCi$snapValueToStep)(maxValue, minValue, maxValue, clampStep));
    };
    let decrementToMin = ()=>{
        if (minValue != null) setNumberValue(minValue);
    };
    let canIncrement = (0, $vhjCi$useMemo)(()=>!isDisabled && !isReadOnly && (isNaN(parsedValue) || isNaN(maxValue) || (0, $vhjCi$snapValueToStep)(parsedValue, minValue, maxValue, clampStep) > parsedValue || $de67e98908f0c6ee$var$handleDecimalOperation("+", parsedValue, clampStep) <= maxValue), [
        isDisabled,
        isReadOnly,
        minValue,
        maxValue,
        clampStep,
        parsedValue
    ]);
    let canDecrement = (0, $vhjCi$useMemo)(()=>!isDisabled && !isReadOnly && (isNaN(parsedValue) || isNaN(minValue) || (0, $vhjCi$snapValueToStep)(parsedValue, minValue, maxValue, clampStep) < parsedValue || $de67e98908f0c6ee$var$handleDecimalOperation("-", parsedValue, clampStep) >= minValue), [
        isDisabled,
        isReadOnly,
        minValue,
        maxValue,
        clampStep,
        parsedValue
    ]);
    let validate = (value)=>numberParser.isValidPartialNumber(value, minValue, maxValue);
    return {
        validate: validate,
        increment: increment,
        incrementToMax: incrementToMax,
        decrement: decrement,
        decrementToMin: decrementToMin,
        canIncrement: canIncrement,
        canDecrement: canDecrement,
        minValue: minValue,
        maxValue: maxValue,
        numberValue: parsedValue,
        setInputValue: setInputValue,
        inputValue: inputValue,
        commit: commit
    };
}
function $de67e98908f0c6ee$var$handleDecimalOperation(operator, value1, value2) {
    let result = operator === "+" ? value1 + value2 : value1 - value2;
    // Check if we have decimals
    if (value1 % 1 !== 0 || value2 % 1 !== 0) {
        const value1Decimal = value1.toString().split(".");
        const value2Decimal = value2.toString().split(".");
        const value1DecimalLength = value1Decimal[1] && value1Decimal[1].length || 0;
        const value2DecimalLength = value2Decimal[1] && value2Decimal[1].length || 0;
        const multiplier = Math.pow(10, Math.max(value1DecimalLength, value2DecimalLength));
        // Transform the decimals to integers based on the precision
        value1 = Math.round(value1 * multiplier);
        value2 = Math.round(value2 * multiplier);
        // Perform the operation on integers values to make sure we don't get a fancy decimal value
        result = operator === "+" ? value1 + value2 : value1 - value2;
        // Transform the integer result back to decimal
        result /= multiplier;
    }
    return result;
}





//# sourceMappingURL=module.js.map
