module.export({useTabListState:()=>$76f919a04c5a7d14$export$4ba071daf4e486});let $ijHKZ$useSingleSelectListState;module.link("@react-stately/list",{useSingleSelectListState(v){$ijHKZ$useSingleSelectListState=v}},0);let $ijHKZ$useRef;module.link("react",{useRef(v){$ijHKZ$useRef=v}},1);


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

function $76f919a04c5a7d14$export$4ba071daf4e486(props) {
    let state = (0, $ijHKZ$useSingleSelectListState)({
        ...props,
        suppressTextValueWarning: true
    });
    let { selectionManager: selectionManager , collection: collection , selectedKey: currentSelectedKey  } = state;
    let lastSelectedKey = (0, $ijHKZ$useRef)(currentSelectedKey);
    // Ensure a tab is always selected (in case no selected key was specified or if selected item was deleted from collection)
    let selectedKey = currentSelectedKey;
    if (selectionManager.isEmpty || !collection.getItem(selectedKey)) {
        selectedKey = collection.getFirstKey();
        // loop over tabs until we find one that isn't disabled and select that
        while(state.disabledKeys.has(selectedKey) && selectedKey !== collection.getLastKey())selectedKey = collection.getKeyAfter(selectedKey);
        // if this check is true, then every item is disabled, it makes more sense to default to the first key than the last
        if (state.disabledKeys.has(selectedKey) && selectedKey === collection.getLastKey()) selectedKey = collection.getFirstKey();
        if (selectedKey != null) // directly set selection because replace/toggle selection won't consider disabled keys
        selectionManager.setSelectedKeys([
            selectedKey
        ]);
    }
    // If the tablist doesn't have focus and the selected key changes or if there isn't a focused key yet, change focused key to the selected key if it exists.
    if (selectedKey != null && selectionManager.focusedKey == null || !selectionManager.isFocused && selectedKey !== lastSelectedKey.current) selectionManager.setFocusedKey(selectedKey);
    lastSelectedKey.current = selectedKey;
    return {
        ...state,
        isDisabled: props.isDisabled || false
    };
}





//# sourceMappingURL=module.js.map
