import { test, expect } from '@playwright/test';
import faker from '@faker-js/faker';

import { PreferencesMainContent, MainContent, SideNav, LoginPage, FlexTab } from './pageobjects';
import { adminLogin } from './utils/mocks/userAndPasswordMock';
import { clearMessages } from './utils/helpers/clearMessages';
import { IS_LOCALHOST } from './utils/constants';

test.describe('[User Preferences]', () => {
	test.beforeAll(async () => {
		if (IS_LOCALHOST) {
			await clearMessages(['GENERAL']);
		}
	});

	test.describe('default', () => {
		let flexTab: FlexTab;
		let loginPage: LoginPage;
		let mainContent: MainContent;
		let sideNav: SideNav;
		let preferencesMainContent: PreferencesMainContent;

		test.beforeAll(async ({ browser, baseURL }) => {
			const context = await browser.newContext();
			const page = await context.newPage();
			const URL = baseURL as string;
			loginPage = new LoginPage(page);
			await loginPage.goto(URL);

			await loginPage.doLogin(adminLogin);
			sideNav = new SideNav(page);
			mainContent = new MainContent(page);
			preferencesMainContent = new PreferencesMainContent(page);
			flexTab = new FlexTab(page);

			await sideNav.sidebarUserMenu.click();
			await sideNav.account.click();
		});

		test.describe('render:', () => {
			test('expect show the preferences link', async () => {
				await expect(sideNav.preferences).toBeVisible();
			});

			test('expect show the profile link', async () => {
				await expect(sideNav.profile).toBeVisible();
			});

			test('expect click on the profile link', async () => {
				await sideNav.profile.click();
			});

			test('expect show the username input', async () => {
				await expect(preferencesMainContent.inputUsername).toBeVisible();
			});

			test('expect show the name input', async () => {
				await expect(preferencesMainContent.inputName).toBeVisible();
			});

			test('expect show the email input', async () => {
				await expect(preferencesMainContent.emailTextInput).toBeVisible(); // .scrollIntoView()
			});

			test('expect show the password input', async () => {
				await expect(preferencesMainContent.passwordTextInput).toBeVisible(); // .scrollIntoView()
			});

			test('expect show the submit button', async () => {
				await expect(preferencesMainContent.submitBtn).toBeVisible();
				await expect(preferencesMainContent.submitBtn).toBeDisabled();
			});
		});

		test.describe('[User Info Change]', () => {
			const newName = faker.name.findName();
			const newUserName = `${faker.internet.userName(newName)}`;

			test('expect click on the profile link', async () => {
				await sideNav.profile.click();
			});

			test('expect change the name field', async () => {
				await preferencesMainContent.inputName.fill(newName);
			});

			test('expect change the Username field', async () => {
				await preferencesMainContent.inputUsername.fill(newUserName);
			});

			test('expect save the settings', async () => {
				await preferencesMainContent.submitBtn.click();
			});

			test('expect close the preferences menu', async () => {
				await sideNav.preferencesClose.click();
				await sideNav.doOpenChat('general');
			});

			test('send message with different user name', async () => {
				await mainContent.sendMessage('HI');
			});

			test('expect be that the name on the last message is the edited one', async () => {
				await expect(mainContent.lastMessageUser).toContainText(newUserName);
			});

			test('expect be that the user name on the members flex tab is the edited one', async () => {
				await mainContent.lastMessageUser.click();
				await expect(mainContent.userCard).toBeVisible();
			});

			test('expect that the real name on the members flex tab is the edited one', async () => {
				await mainContent.viewUserProfile.click();
				await expect(flexTab.memberRealName).toHaveText(newUserName);
			});
		});
	});
});
