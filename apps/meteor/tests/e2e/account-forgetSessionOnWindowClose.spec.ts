import type { Page } from '@playwright/test';

import { DEFAULT_USER_CREDENTIALS } from './config/constants';
import { Registration } from './page-objects';
import { test, expect } from './utils/test';

test.describe.serial('Forget session on window close setting', () => {
	let poRegistration: Registration;
	let secondPage: Page;
	test.beforeEach(async ({ page }) => {
		poRegistration = new Registration(page);

		await page.goto('/home');
	});

	test.afterEach(async () => {
		await secondPage.close();
	});

	test.describe('Setting off', async () => {
		test.beforeAll(async ({ api }) => {
			await api.post('/settings/Accounts_ForgetUserSessionOnWindowClose', { value: false });
		});

		test('Login using credentials and reload to stay logged in', async ({ page, context }) => {
			await poRegistration.username.type('user1');
			await poRegistration.inputPassword.type(DEFAULT_USER_CREDENTIALS.password);
			await poRegistration.btnLogin.click();

			await expect(page.locator('role=heading[name="Welcome to Rocket.Chat"]')).toBeVisible();

			secondPage = await context.newPage();
			await secondPage.goto('/home');

			await expect(secondPage.locator('role=heading[name="Welcome to Rocket.Chat"]')).toBeVisible();
		});
	});

	test.describe('Setting on', async () => {
		test.beforeAll(async ({ api }) => {
			await api.post('/settings/Accounts_ForgetUserSessionOnWindowClose', { value: true });
		});

		test.afterAll(async ({ api }) => {
			await api.post('/settings/Accounts_ForgetUserSessionOnWindowClose', { value: false });
		});

		test('Login using credentials and reload to get logged out', async ({ page, context }) => {
			await poRegistration.username.type('user1');
			await poRegistration.inputPassword.type(DEFAULT_USER_CREDENTIALS.password);
			await poRegistration.btnLogin.click();

			await expect(page.locator('role=heading[name="Welcome to Rocket.Chat"]')).toBeVisible();

			secondPage = await context.newPage();
			await secondPage.goto('/home');

			await expect(secondPage.locator('role=button[name="Login"]')).toBeVisible();
		});
	});
});
