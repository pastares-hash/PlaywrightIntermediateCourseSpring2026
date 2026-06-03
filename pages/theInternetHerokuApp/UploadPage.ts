import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";

export class UploadPage extends BasePage{
    // Locators
    readonly chooseFileButton: Locator;
    readonly uploadButton: Locator;
    readonly heading: Locator;
    readonly uploadedFiles: Locator;

    constructor(page: Page) {
        super(page);

        this.chooseFileButton = page.locator('#file-upload');
        this.uploadButton = page.locator('#file-submit');
        this.heading = page.getByRole('heading', { name: 'File Uploaded!'});
        this.uploadedFiles = page.locator('#uploaded-files');
    }

    // Methods

    async goto() {
        await this.page.goto('/upload');
    }

    async uploadFile(file: string) {
        await this.chooseFileButton.setInputFiles(file);
    }

    async clickUploadButton() {
        await this.uploadButton.click();
    }

    async assertUploadSuccess() {
        await expect(this.heading).toBeVisible();
    }

    async assertUploadedFileName(filename: string) {
        await expect(this.uploadedFiles).toHaveText(filename);
    }
}
