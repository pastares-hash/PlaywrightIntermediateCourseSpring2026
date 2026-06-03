import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class AlertsPage extends BasePage{
    // Locators
    readonly alertButton: Locator;
    readonly result: Locator;

    constructor(page: Page) {
        super(page);
        this.alertButton = page.getByRole('button', { name: 'Click for JS Alert' });
        this.result = page.locator('#result');
    }

    // Methods

    async goto() {
        await this.page.goto('/javascript_alerts');
    }

    async clickAlertButton() {
        await this.alertButton.click();
    }

    async assertDialogType(dialog: { type(): string}, expected: string) {
        expect(dialog.type()).toBe(expected)
    }

    async assertDialogMessage(dialog: { message(): string}, expected: string) {
        expect(dialog.message()).toBe(expected)
    }

    async assertResult(result: string) {
        await expect(this.result).toHaveText(result)
    }
}
