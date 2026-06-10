import { expect, FrameLocator, Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class iFramePage extends BasePage {
    // Locators
    readonly iFrame: FrameLocator;
    readonly inputField: Locator;

    constructor(page: Page) {
        super(page);
        this.iFrame = page.frameLocator("#mce_0_ifr");
        this.inputField = this.iFrame.locator('#tinymce');
    }

    // Methods
    async goto() {
        await this.page.goto('/iframe');
    }

    async enterText(text: string) {
        await this.inputField.clear();
        await this.inputField.fill(text);
    }

    async assertFrameHasText(expectedText: string) {
        await expect(this.inputField!).toHaveText(expectedText);
    }
}
