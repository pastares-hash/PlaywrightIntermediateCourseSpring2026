import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class DownloadPage extends BasePage{
    // Locators
    readonly firstFileLink: Locator;

    constructor(page: Page) {
        super(page);

        this.firstFileLink = this.page.locator('.example a').first();
    }

    // Methods

    async goto() {
        await this.page.goto('/download');
    }

    getFirstFileLink(): Locator {
        return this.firstFileLink
    }

    async clickFirstFileLink() {
        await this.getFirstFileLink().click()
    }

    async asertFileSaved(download: { path(): Promise<string | null>}) {
        const savedPath = await download.path();
        expect(savedPath).not.toBeNull()

    }
}
