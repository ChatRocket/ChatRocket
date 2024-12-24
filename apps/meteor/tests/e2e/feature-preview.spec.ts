import { faker } from '@faker-js/faker';

import { Users } from './fixtures/userStates';
import { AccountProfile, HomeChannel } from './page-objects';
import { createTargetChannel, createTargetTeam, deleteChannel, deleteTeam, setSettingValueById } from './utils';
import { setUserPreferences } from './utils/setUserPreferences';
import { test, expect } from './utils/test';

test.use({ storageState: Users.admin.state });

test.describe.serial('feature preview', () => {
	let poHomeChannel: HomeChannel;
	let poAccountProfile: AccountProfile;
	let targetChannel: string;
	let sidepanelTeam: string;
	const targetChannelNameInTeam = `channel-from-team-${faker.number.int()}`;

	test.beforeAll(async ({ api }) => {
		await setSettingValueById(api, 'Accounts_AllowFeaturePreview', true);
		targetChannel = await createTargetChannel(api, { members: ['user1'] });
	});

	test.afterAll(async ({ api }) => {
		await setSettingValueById(api, 'Accounts_AllowFeaturePreview', false);
		await deleteChannel(api, targetChannel);
	});

	test.beforeEach(async ({ page }) => {
		poHomeChannel = new HomeChannel(page);
		poAccountProfile = new AccountProfile(page);
	});

	test('should show "Message" and "Navigation" feature sections', async ({ page }) => {
		await page.goto('/account/feature-preview');

		await expect(page.getByRole('button', { name: 'Message', exact: true })).toBeVisible();
		await expect(page.getByRole('button', { name: 'Navigation', exact: true })).toBeVisible();
	});

	test.describe('Sidepanel', () => {
		test.beforeEach(async ({ api }) => {
			sidepanelTeam = await createTargetTeam(api, { sidepanel: { items: ['channels', 'discussions'] } });

			await setUserPreferences(api, {
				sidebarViewMode: 'Medium',
				featuresPreview: [
					{
						name: 'sidepanelNavigation',
						value: true,
					},
				],
			});
		});

		test.afterEach(async ({ api }) => {
			await deleteTeam(api, sidepanelTeam);

			await setUserPreferences(api, {
				sidebarViewMode: 'Medium',
				featuresPreview: [
					{
						name: 'sidepanelNavigation',
						value: false,
					},
				],
			});
		});
		test('should be able to toggle "Sidepanel" feature', async ({ page }) => {
			await page.goto('/account/feature-preview');

			await poAccountProfile.getAccordionItemByName('Navigation').click();
			const sidepanelCheckbox = poAccountProfile.getCheckboxByLabelText('Secondary navigation for teams');
			await expect(sidepanelCheckbox).toBeChecked();
			await sidepanelCheckbox.click();
			await expect(sidepanelCheckbox).not.toBeChecked();

			await poAccountProfile.btnSaveChanges.click();

			await expect(poAccountProfile.btnSaveChanges).not.toBeVisible();
			await expect(sidepanelCheckbox).not.toBeChecked();
		});

		test('should display sidepanel on a team and hide it on edit', async ({ page }) => {
			await page.goto(`/group/${sidepanelTeam}`);
			await poHomeChannel.content.waitForChannel();
			await expect(poHomeChannel.sidepanel.sidepanelList).toBeVisible();

			await poHomeChannel.tabs.btnRoomInfo.click();
			await poHomeChannel.tabs.room.btnEdit.click();
			await poHomeChannel.tabs.room.advancedSettingsAccordion.click();
			await poHomeChannel.tabs.room.toggleSidepanelItems();
			await poHomeChannel.tabs.room.btnSave.click();

			await expect(poHomeChannel.sidepanel.sidepanelList).not.toBeVisible();
		});

		test('should display new channel from team on the sidepanel', async ({ page, api }) => {
			await page.goto(`/group/${sidepanelTeam}`);
			await poHomeChannel.content.waitForChannel();

			await poHomeChannel.tabs.btnChannels.click();
			await poHomeChannel.tabs.channels.btnCreateNew.click();
			await poHomeChannel.sidenav.inputChannelName.fill(targetChannelNameInTeam);
			await poHomeChannel.sidenav.checkboxPrivateChannel.click();
			await poHomeChannel.sidenav.btnCreate.click();

			await expect(poHomeChannel.sidepanel.sidepanelList).toBeVisible();
			await expect(poHomeChannel.sidepanel.getItemByName(targetChannelNameInTeam)).toBeVisible();

			await deleteChannel(api, targetChannelNameInTeam);
		});

		test('should display sidepanel item with the same display preference as the sidebar', async ({ page }) => {
			await page.goto('/home');
			const message = 'hello world';

			await poHomeChannel.content.waitForPageLoad();
			await poHomeChannel.sidebar.setDisplayMode('Extended');
			await poHomeChannel.sidebar.openChat(sidepanelTeam);
			await poHomeChannel.content.sendMessage(message);
			await expect(poHomeChannel.sidepanel.getExtendedItem(sidepanelTeam, message)).toBeVisible();
		});

		test('should escape special characters on item subtitle', async ({ page }) => {
			await page.goto('/home');
			const message = 'hello > world';
			const parsedWrong = 'hello &gt; world';

			await poHomeChannel.content.waitForPageLoad();
			await poHomeChannel.sidebar.setDisplayMode('Extended');
			await poHomeChannel.sidebar.openChat(sidepanelTeam);
			await poHomeChannel.content.sendMessage(message);

			await expect(poHomeChannel.sidepanel.getExtendedItem(sidepanelTeam, message)).toBeVisible();
			await expect(poHomeChannel.sidepanel.getExtendedItem(sidepanelTeam, message)).not.toHaveText(parsedWrong);
		});

		test('should show channel in sidepanel after adding existing one', async ({ page }) => {
			await page.goto(`/group/${sidepanelTeam}`);

			await poHomeChannel.tabs.btnChannels.click();
			await poHomeChannel.tabs.channels.btnAddExisting.click();
			await poHomeChannel.tabs.channels.inputChannels.fill(targetChannel);
			await page.getByRole('listbox').getByRole('option', { name: targetChannel }).click();
			await poHomeChannel.tabs.channels.btnAdd.click();
			await poHomeChannel.content.waitForChannel();

			await expect(poHomeChannel.sidepanel.getItemByName(targetChannel)).toBeVisible();
		});

		test('should sort by last message even if unread message is inside thread', async ({ page, browser }) => {
			const user1Page = await browser.newPage({ storageState: Users.user1.state });
			const user1Channel = new HomeChannel(user1Page);

			await page.goto(`/group/${sidepanelTeam}`);

			await poHomeChannel.tabs.btnChannels.click();
			await poHomeChannel.tabs.channels.btnAddExisting.click();
			await poHomeChannel.tabs.channels.inputChannels.fill(targetChannel);
			await page.getByRole('listbox').getByRole('option', { name: targetChannel }).click();
			await poHomeChannel.tabs.channels.btnAdd.click();

			const sidepanelTeamItem = poHomeChannel.sidepanel.getItemByName(sidepanelTeam);
			const targetChannelItem = poHomeChannel.sidepanel.getItemByName(targetChannel);

			await targetChannelItem.click();
			expect(page.url()).toContain(`/channel/${targetChannel}`);
			await poHomeChannel.content.sendMessage('hello channel');
			await sidepanelTeamItem.focus();
			await sidepanelTeamItem.click();
			expect(page.url()).toContain(`/group/${sidepanelTeam}`);
			await poHomeChannel.content.sendMessage('hello team');

			await user1Page.goto(`/channel/${targetChannel}`);
			await user1Channel.content.waitForChannel();
			await user1Channel.content.openReplyInThread();
			await user1Channel.content.toggleAlsoSendThreadToChannel(false);
			await user1Channel.content.sendMessageInThread('hello thread');

			const item = poHomeChannel.sidepanel.getItemByName(targetChannel);
			await expect(item.locator('..')).toHaveAttribute('data-item-index', '0');

			await user1Page.close();
		});
	});
});
