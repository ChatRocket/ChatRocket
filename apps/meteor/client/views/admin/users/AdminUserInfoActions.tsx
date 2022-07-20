import { IUser } from '@rocket.chat/core-typings';
import { ButtonGroup, Menu, Option } from '@rocket.chat/fuselage';
import { useRoute, usePermission, useTranslation } from '@rocket.chat/ui-contexts';
import React, { useCallback, useMemo, ReactElement } from 'react';

import UserInfo from '../../../components/UserInfo';
import { useActionSpread } from '../../hooks/useActionSpread';
import { useChangeAdminStatusAction } from './hooks/useChangeAdminStatusAction';
import { useChangeUserStatusAction } from './hooks/useChangeUserStatusAction';
import { useDeleteUserAction } from './hooks/useDeleteUserAction';
import { useResetE2EKeyAction } from './hooks/useResetE2EKeyAction';
import { useResetTOTPAction } from './hooks/useResetTOTPAction';

type AdminUserInfoActionsProps = {
	username: IUser['username'];
	userId: IUser['_id'];
	isActive: boolean;
	isAdmin: boolean;
	onChange: () => void;
	onReload: () => void;
};

const AdminUserInfoActions = ({ username, userId, isActive, isAdmin, onChange, onReload }: AdminUserInfoActionsProps): ReactElement => {
	const t = useTranslation();
	const directRoute = useRoute('direct');
	const userRoute = useRoute('admin-users');
	const canDirectMessage = usePermission('create-d');
	const canEditOtherUserInfo = usePermission('edit-other-user-info');

	const changeAdminStatusAction = useChangeAdminStatusAction(userId, isAdmin, username, onChange);
	const changeUserStatusAction = useChangeUserStatusAction(userId, isActive, onChange);
	const deleteUserAction = useDeleteUserAction(userId, onChange, onReload);
	const resetTOTPAction = useResetTOTPAction(userId);
	const resetE2EKeyAction = useResetE2EKeyAction(userId);

	const directMessageClick = useCallback(
		() =>
			directRoute.push({
				rid: username,
			}),
		[directRoute, username],
	);

	const editUserClick = useCallback(
		() =>
			userRoute.push({
				context: 'edit',
				id: userId,
			}),
		[userId, userRoute],
	);

	const options = useMemo(
		() => ({
			...(canDirectMessage && {
				directMessage: {
					icon: 'balloon',
					label: t('Direct_Message'),
					action: directMessageClick,
				},
			}),
			...(canEditOtherUserInfo && {
				editUser: {
					icon: 'edit',
					label: t('Edit'),
					action: editUserClick,
				},
			}),
			makeAdmin: changeAdminStatusAction,
			resetE2EKey: resetE2EKeyAction,
			resetTOTP: resetTOTPAction,
			delete: deleteUserAction,
			changeActiveStatus: changeUserStatusAction,
		}),
		[
			t,
			canDirectMessage,
			directMessageClick,
			canEditOtherUserInfo,
			editUserClick,
			changeAdminStatusAction,
			changeUserStatusAction,
			deleteUserAction,
			resetE2EKeyAction,
			resetTOTPAction,
		],
	);

	const { actions: actionsDefinition, menu: menuOptions } = useActionSpread(options);

	const menu = useMemo(() => {
		if (!menuOptions) {
			return null;
		}

		return (
			<Menu
				mi='x4'
				placement='bottom-start'
				small={false}
				secondary
				flexShrink={0}
				key='menu'
				renderItem={({ label: { label, icon }, ...props }): ReactElement => <Option label={label} title={label} icon={icon} {...props} />}
				options={menuOptions}
			/>
		);
	}, [menuOptions]);

	const actions = useMemo(() => {
		const mapAction = ([key, { label, icon, action }]) => (
			<UserInfo.Action key={key} title={label} label={label} onClick={action} icon={icon} />
		);
		return [...actionsDefinition.map(mapAction), menu].filter(Boolean);
	}, [actionsDefinition, menu]);

	return (
		<ButtonGroup flexGrow={0} justifyContent='center' data-qa-id='UserInfoActions'>
			{actions}
		</ButtonGroup>
	);
};

export default AdminUserInfoActions;
