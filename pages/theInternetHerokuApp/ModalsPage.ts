import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class ModalsPage extends BasePage{
    // Locators
    readonly modal: Locator;
    readonly closeModalButton: Locator;

    constructor(page: Page) {
        super(page);
        this.modal = page.locator('#modal');
        this.closeModalButton = this.modal.locator('.modal-footer');
    }

    // Methods

    async goto() {
        await this.page.goto('/entry_ad');
    }

    async assertModalVisible() {
        await expect(this.modal).toBeVisible();
    }

    async clickCloseModalButton() {
        await this.closeModalButton.click();
    }

    async assertModalHidden() {
        await expect(this.modal).toBeHidden();
    }
}
