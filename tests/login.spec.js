// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({page})=>{
  await page.goto('http://localhost:3000/login');
})

test('has title', async ({ page }) => {
    await expect(page.getByTestId('login-title')).toContainText("Login");
  })
  
test('validate input fields', async ({ page }) => {
    await expect(page.getByTestId('login-email-input')).toHaveAttribute('placeholder');
    await expect(page.getByTestId('login-pass-input')).toHaveAttribute('placeholder');
  });

test('validate login', async ({ page }) => {
    await page.getByTestId('login-email-input').fill("email@email.com");
    await page.getByTestId('login-pass-input').fill("password");
    await page.getByTestId('login-button').click();

    //Wait for modal.
    await expect(page.getByTestId('login-modal')).toBeVisible();
    await expect(page.getByTestId('login-modal-title')).toContainText('Bienvenido');
    await expect(page.getByTestId('login-modal-description')).toContainText('Usuario inició sesión correctamente.');

  });