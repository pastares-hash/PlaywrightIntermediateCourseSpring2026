import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegisterPage extends BasePage {
    // Locators
    readonly usernameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly signupButton: Locator;
    readonly heading: Locator;

    constructor(page: Page) {
        super(page);
        
        this.usernameInput = page.getByPlaceholder('Username');
        this.emailInput = page.getByPlaceholder('Email');
        this.passwordInput = page.getByPlaceholder('Password');
        this.signupButton = page.getByRole('button', { name: 'Sign up'});
        this.heading = page.getByRole('heading', { name: 'Sign up' });
    }

    // Methods

    async goto() {
        await this.page.goto('/register');
    }

    async assertNavigatedOnPage() {
        await this.page.waitForURL(/register/);
    }

    async assetOnPage() {
        await expect(this.heading).toBeVisible();
    }

    async register(username: string, email: string, password: string) {
        await this.usernameInput.fill(username);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.signupButton.click();
    }
}
