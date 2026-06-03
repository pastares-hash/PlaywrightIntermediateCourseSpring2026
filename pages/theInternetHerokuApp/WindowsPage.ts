import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class WindowsPage extends BasePage{
    // Locators
    readonly newWindowLink: Locator;
    readonly heading: Locator;

    constructor(page: Page) {
        super(page);

        this.newWindowLink = page.getByRole('link', { name: 'Click Here' });
        this.heading = page.getByRole('heading', { level: 3 });

    }

    // Methods

    async goto() {
        await this.page.goto('/windows');
    }

    async clickNewWindowLink() {
        await this.newWindowLink.click();
    }

    async assertPageHeading(title: string) {
        await expect(this.heading).toHaveText(title);
    }
}
