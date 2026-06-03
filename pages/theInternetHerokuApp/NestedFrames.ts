import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class NestedFrames extends BasePage{
    // Locators

    constructor(page: Page) {
        super(page);
    }

    // Methods

    async goto() {
        await this.page.goto('/nested_frames');
    }

    async assertFrameContains(frameName: string, expectedText: string) {
        const frame = this.page.frame({ name: frameName });
        expect(frame, `frame ${frameName} not found`).not.toBeNull();
        await expect(frame!.locator('body')).toContainText(expectedText);
    }
}
