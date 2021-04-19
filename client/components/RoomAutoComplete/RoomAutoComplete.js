import { AutoComplete, Option } from '@rocket.chat/fuselage';
import React, { memo, useMemo, useState } from 'react';

import { useEndpointData } from '../../hooks/useEndpointData';
import RoomAvatar from '../avatar/RoomAvatar';
import Avatar from './Avatar';

const query = (term = '') => ({ selector: JSON.stringify({ name: term }) });

const RoomAutoComplete = (props) => {
	const [filter, setFilter] = useState('');
	const { value: data } = useEndpointData(
		'rooms.autocomplete.channelAndPrivate',
		useMemo(() => query(filter), [filter]),
	);

	const options = useMemo(
		() =>
			(data &&
				data.items.map(({ fname, name, _id, avatarETag, t }) => ({
					value: _id,
					label: { fname: fname ? fname : name, avatarETag, type: t },
				}))) ||
			[],
		[data],
	);

	return (
		<AutoComplete
			{...props}
			filter={filter}
			setFilter={setFilter}
			renderSelected={({ value, label }) => (
				<>
					<RoomAvatar size='x20' room={{ type: label?.type || 'c', _id: value, ...label }} />{' '}
					{label?.fname}
				</>
			)}
			renderItem={({ value, label, ...props }) => (
				<Option
					key={value}
					{...props}
					label={label.fname}
					avatar={<Avatar value={value} {...label} />}
				/>
			)}
			options={options}
		/>
	);
};

export default memo(RoomAutoComplete);
