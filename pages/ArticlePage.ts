import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ArticlePage extends BasePage{
    // Locators
    readonly titleInput: Locator;
    readonly heading: Locator;
    readonly favoriteButton: Locator;
    readonly banner: Locator;

    constructor(page: Page) {
        super(page);

        this.heading = page.getByRole('heading', { level: 1 });
        this.banner = page.locator('.banner');
        this.favoriteButton = this.banner.getByRole('button', { name: /Favorite Article/i })
        .or(page.getByRole('button', { name: /Unfavorite Article/i}));
    }

    // Methods
    async assertOnPage() {
        await expect(this.heading).toBeVisible();
    }

    async assertArticleTitle(articleTitle: string) {
        await expect(this.heading).toHaveText(articleTitle);
    }

    async assertFavoriteButtonVisible() {
        await expect(this.favoriteButton).toBeVisible()
    }

    async clickFavoriteButton() {
        await this.favoriteButton.click();
    }
}
