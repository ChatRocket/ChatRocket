import { useToggle } from '@rocket.chat/fuselage-hooks';
import type { TranslationKey } from '@rocket.chat/ui-contexts';
import type { Dispatch, FormEvent, SetStateAction } from 'react';
import React, { useCallback, useRef } from 'react';

import { isValidReference } from '../../../marketplace/helpers/isValidReference';
import { onMouseEventPreventSideEffects } from '../../../marketplace/helpers/onMouseEventPreventSideEffects';
import { CustomDropDownAnchor } from './CustomDropDownAnchor';
import { CustomDropDownList } from './CustomDropDownList';
import { CustomDropDownListWrapper } from './CustomDropDownListWrapper';

/**
 * @param dropdownOptions options available for the multiselect dropdown list
 * @param defaultTitle dropdown text before selecting any options (or all of them). For example: 'All rooms'
	@param selectedOptionsTitle dropdown text after clicking one or more options. For example: 'Rooms (3)'
 * @param selectedOptions array with clicked options. This is used in the useFilteredRooms hook, to filter the Rooms' table. This array joins all of the individual clicked options from all available CustomDropDown components in the page. It helps to create a union filter for all the selections.
 * @param setSelectedOptions part of an useState hook to set the previous selectedOptions
 * @param customSetSelected part of an useState hook to set the individual selected checkboxes from this instance.
 * @returns a React Component that should be used with a custom hook for filters, such as useFilteredRooms.tsx.
 * Check out the following files, for examples: 
 * 	useFilteredRooms.tsx,
 * 	RoomsTable.tsx
 */

type TitleOptionProp = {
	id: string;
	text: string;
	isGroupTitle: boolean;
	checked: never;
};

type CheckboxOptionProp = {
	id: string;
	text: string;
	isGroupTitle: never;
	checked: boolean;
};

export type OptionProp = TitleOptionProp | CheckboxOptionProp;

export type DropDownProps = {
	dropdownOptions: OptionProp[];
	defaultTitle: TranslationKey; // For example: 'All rooms'
	selectedOptionsTitle: TranslationKey; // For example: 'Rooms (3)'
	selectedOptions: OptionProp[];
	setSelectedOptions: Dispatch<SetStateAction<OptionProp[]>>;
	customSetSelected: Dispatch<SetStateAction<OptionProp[]>>;
};

export const CustomDropDown = ({
	dropdownOptions,
	defaultTitle,
	selectedOptionsTitle,
	selectedOptions,
	setSelectedOptions,
	customSetSelected,
}: DropDownProps) => {
	const reference = useRef<HTMLInputElement>(null);
	const [collapsed, toggleCollapsed] = useToggle(false);

	const onClose = useCallback(
		(e) => {
			if (isValidReference(reference, e)) {
				toggleCollapsed(false);
				return;
			}

			onMouseEventPreventSideEffects(e);
		},
		[toggleCollapsed],
	);

	const onSelect = (item: OptionProp, e?: FormEvent<HTMLElement>): void => {
		e?.stopPropagation();

		item.checked = !item.checked;

		if (item.checked === true) {
			// the user has enabled this option -> add it to the selected options
			setSelectedOptions([...new Set([...selectedOptions, item])]);
			customSetSelected((prevItems) => {
				const newItems = prevItems;
				const toggledItem = newItems.find(({ id }) => id === item.id);

				if (toggledItem) {
					toggledItem.checked = !toggledItem.checked;
				}

				return [...prevItems];
			});
		} else {
			// the user has disabled this option -> remove this from the selected options list
			setSelectedOptions(selectedOptions.filter((option: OptionProp) => option.id !== item.id));
		}
	};

	const count = dropdownOptions.filter((option) => option.checked).length;

	return (
		<>
			<CustomDropDownAnchor
				ref={reference}
				onClick={toggleCollapsed as any}
				defaultTitle={defaultTitle}
				selectedOptionsTitle={selectedOptionsTitle}
				selectedOptionsCount={count}
				maxCount={dropdownOptions.length}
			/>
			{collapsed && (
				<CustomDropDownListWrapper ref={reference} onClose={onClose}>
					<CustomDropDownList options={dropdownOptions} onSelected={onSelect} />
				</CustomDropDownListWrapper>
			)}
		</>
	);
};
