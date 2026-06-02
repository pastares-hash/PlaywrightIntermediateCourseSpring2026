import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{
    // Locators
    readonly signInButton: Locator;
    readonly signUpButton: Locator;
    readonly newArticleNavLink: Locator;
    readonly settingsNavLink: Locator;
    readonly articlePreviews: Locator;
    readonly articlePreviewLink: Locator;

    constructor(page: Page) {
        super(page);

        this.signInButton = page.getByRole('link', { name: 'Sign in'});
        this.signUpButton = page.getByRole('link', { name: 'Sign up'});
        this.newArticleNavLink = page.getByRole('link', { name: 'New Article'});
        this.settingsNavLink = page.getByRole('link', { name: 'Settings'});
        this.articlePreviews = page.locator('.article-preview');
        this.articlePreviewLink = page.locator('.preview-link');
    }

    // Methods
    async goto(options?: { timeout?: number }) {
        await this.page.goto('/', options)
    }

    async assertOnHomePage() {
        await expect(this.page).toHaveURL('/');
    }

    async assertSignedUp() {
        await expect(this.signInButton).not.toBeVisible();
        await expect(this.signUpButton).not.toBeVisible();
    }

    async assertLoggedIn() {
        await expect(this.newArticleNavLink).toBeVisible();
        await expect(this.settingsNavLink).toBeVisible();
    }

    async clickNewAricleNavLink() {
        await this.newArticleNavLink.click();
    }

    async clickFirstArticle() {
        await this.articlePreviews.first().locator('.preview-link').click();
        // await this.articlePreviewLink.first().click();
    }

    async clickNthArticle(index: number) {
        await this.articlePreviews.nth(index).locator('.preview-link').click();
        // await this.articlePreviewLink.nth(index).click();
    }
}
