module.export({useListBox:()=>$c132121280ec012d$export$50eacbbf140a3141,useOption:()=>$293f70390ea03370$export$497855f14858aa34,useListBoxSection:()=>$af383d3bef1cfdc9$export$c3f9f39876e4bc7,listData:()=>$b1f0cad8af73213b$export$3585ede4d035bf14,getItemId:()=>$b1f0cad8af73213b$export$9145995848b05025});let $frWMC$filterDOMProps,$frWMC$useId,$frWMC$mergeProps,$frWMC$useSlotId,$frWMC$isMac,$frWMC$isWebKit;module.link("@react-aria/utils",{filterDOMProps(v){$frWMC$filterDOMProps=v},useId(v){$frWMC$useId=v},mergeProps(v){$frWMC$mergeProps=v},useSlotId(v){$frWMC$useSlotId=v},isMac(v){$frWMC$isMac=v},isWebKit(v){$frWMC$isWebKit=v}},0);let $frWMC$useFocusWithin,$frWMC$useHover,$frWMC$isFocusVisible;module.link("@react-aria/interactions",{useFocusWithin(v){$frWMC$useFocusWithin=v},useHover(v){$frWMC$useHover=v},isFocusVisible(v){$frWMC$isFocusVisible=v}},1);let $frWMC$useLabel;module.link("@react-aria/label",{useLabel(v){$frWMC$useLabel=v}},2);let $frWMC$useSelectableList,$frWMC$useSelectableItem;module.link("@react-aria/selection",{useSelectableList(v){$frWMC$useSelectableList=v},useSelectableItem(v){$frWMC$useSelectableItem=v}},3);let $frWMC$getItemCount;module.link("@react-stately/collections",{getItemCount(v){$frWMC$getItemCount=v}},4);





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
 */ const $b1f0cad8af73213b$export$3585ede4d035bf14 = new WeakMap();
function $b1f0cad8af73213b$var$normalizeKey(key) {
    if (typeof key === "string") return key.replace(/\s*/g, "");
    return "" + key;
}
function $b1f0cad8af73213b$export$9145995848b05025(state, itemKey) {
    let data = $b1f0cad8af73213b$export$3585ede4d035bf14.get(state);
    if (!data) throw new Error("Unknown list");
    return `${data.id}-option-${$b1f0cad8af73213b$var$normalizeKey(itemKey)}`;
}






function $c132121280ec012d$export$50eacbbf140a3141(props, state, ref) {
    let domProps = (0, $frWMC$filterDOMProps)(props, {
        labelable: true
    });
    let { listProps: listProps  } = (0, $frWMC$useSelectableList)({
        ...props,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys
    });
    let { focusWithinProps: focusWithinProps  } = (0, $frWMC$useFocusWithin)({
        onFocusWithin: props.onFocus,
        onBlurWithin: props.onBlur,
        onFocusWithinChange: props.onFocusChange
    });
    // Share list id and some props with child options.
    let id = (0, $frWMC$useId)(props.id);
    (0, $b1f0cad8af73213b$export$3585ede4d035bf14).set(state, {
        id: id,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp,
        shouldFocusOnHover: props.shouldFocusOnHover,
        isVirtualized: props.isVirtualized,
        onAction: props.onAction
    });
    let { labelProps: labelProps , fieldProps: fieldProps  } = (0, $frWMC$useLabel)({
        ...props,
        id: id,
        // listbox is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: "span"
    });
    return {
        labelProps: labelProps,
        listBoxProps: (0, $frWMC$mergeProps)(domProps, focusWithinProps, state.selectionManager.selectionMode === "multiple" ? {
            "aria-multiselectable": "true"
        } : {}, {
            role: "listbox",
            ...(0, $frWMC$mergeProps)(fieldProps, listProps)
        })
    };
}


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
 */ 




function $293f70390ea03370$export$497855f14858aa34(props, state, ref) {
    let { key: key  } = props;
    let data = (0, $b1f0cad8af73213b$export$3585ede4d035bf14).get(state);
    var _props_isDisabled;
    let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : state.disabledKeys.has(key);
    var _props_isSelected;
    let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : state.selectionManager.isSelected(key);
    var _props_shouldSelectOnPressUp;
    let shouldSelectOnPressUp = (_props_shouldSelectOnPressUp = props.shouldSelectOnPressUp) !== null && _props_shouldSelectOnPressUp !== void 0 ? _props_shouldSelectOnPressUp : data === null || data === void 0 ? void 0 : data.shouldSelectOnPressUp;
    var _props_shouldFocusOnHover;
    let shouldFocusOnHover = (_props_shouldFocusOnHover = props.shouldFocusOnHover) !== null && _props_shouldFocusOnHover !== void 0 ? _props_shouldFocusOnHover : data === null || data === void 0 ? void 0 : data.shouldFocusOnHover;
    var _props_shouldUseVirtualFocus;
    let shouldUseVirtualFocus = (_props_shouldUseVirtualFocus = props.shouldUseVirtualFocus) !== null && _props_shouldUseVirtualFocus !== void 0 ? _props_shouldUseVirtualFocus : data === null || data === void 0 ? void 0 : data.shouldUseVirtualFocus;
    var _props_isVirtualized;
    let isVirtualized = (_props_isVirtualized = props.isVirtualized) !== null && _props_isVirtualized !== void 0 ? _props_isVirtualized : data === null || data === void 0 ? void 0 : data.isVirtualized;
    let labelId = (0, $frWMC$useSlotId)();
    let descriptionId = (0, $frWMC$useSlotId)();
    let optionProps = {
        role: "option",
        "aria-disabled": isDisabled || undefined,
        "aria-selected": state.selectionManager.selectionMode !== "none" ? isSelected : undefined
    };
    // Safari with VoiceOver on macOS misreads options with aria-labelledby or aria-label as simply "text".
    // We should not map slots to the label and description on Safari and instead just have VoiceOver read the textContent.
    // https://bugs.webkit.org/show_bug.cgi?id=209279
    if (!((0, $frWMC$isMac)() && (0, $frWMC$isWebKit)())) {
        optionProps["aria-label"] = props["aria-label"];
        optionProps["aria-labelledby"] = labelId;
        optionProps["aria-describedby"] = descriptionId;
    }
    if (isVirtualized) {
        var _state_collection_getItem;
        let index = Number((_state_collection_getItem = state.collection.getItem(key)) === null || _state_collection_getItem === void 0 ? void 0 : _state_collection_getItem.index);
        optionProps["aria-posinset"] = Number.isNaN(index) ? undefined : index + 1;
        optionProps["aria-setsize"] = (0, $frWMC$getItemCount)(state.collection);
    }
    let { itemProps: itemProps , isPressed: isPressed , isFocused: isFocused , hasAction: hasAction , allowsSelection: allowsSelection  } = (0, $frWMC$useSelectableItem)({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        allowsDifferentPressOrigin: shouldSelectOnPressUp && shouldFocusOnHover,
        isVirtualized: isVirtualized,
        shouldUseVirtualFocus: shouldUseVirtualFocus,
        isDisabled: isDisabled,
        onAction: (data === null || data === void 0 ? void 0 : data.onAction) ? ()=>{
            var _data_onAction;
            return data === null || data === void 0 ? void 0 : (_data_onAction = data.onAction) === null || _data_onAction === void 0 ? void 0 : _data_onAction.call(data, key);
        } : undefined
    });
    let { hoverProps: hoverProps  } = (0, $frWMC$useHover)({
        isDisabled: isDisabled || !shouldFocusOnHover,
        onHoverStart () {
            if (!(0, $frWMC$isFocusVisible)()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
        }
    });
    return {
        optionProps: {
            ...optionProps,
            ...(0, $frWMC$mergeProps)(itemProps, hoverProps),
            id: (0, $b1f0cad8af73213b$export$9145995848b05025)(state, key)
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        isFocused: isFocused,
        isFocusVisible: isFocused && (0, $frWMC$isFocusVisible)(),
        isSelected: isSelected,
        isDisabled: isDisabled,
        isPressed: isPressed,
        allowsSelection: allowsSelection,
        hasAction: hasAction
    };
}


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
 */ 
function $af383d3bef1cfdc9$export$c3f9f39876e4bc7(props) {
    let { heading: heading , "aria-label": ariaLabel  } = props;
    let headingId = (0, $frWMC$useId)();
    return {
        itemProps: {
            role: "presentation"
        },
        headingProps: heading ? {
            // Techincally, listbox cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, and only use it
            // as a label for the nested group.
            id: headingId,
            "aria-hidden": true
        } : {},
        groupProps: {
            role: "group",
            "aria-label": ariaLabel,
            "aria-labelledby": heading ? headingId : undefined
        }
    };
}






//# sourceMappingURL=module.js.map
