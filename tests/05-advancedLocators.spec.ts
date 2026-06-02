import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ArticlePage } from '../pages/ArticlePage';
import { RegisterPage } from '../pages/RegisterPage';

test.describe('', () => {
    test('Unauthenticated user cliks the Favorite button and redirects to the registration page', async({ page }) => {
        const homePage = new HomePage(page);
        const articlePage = new ArticlePage(page);
        const registerPage = new RegisterPage(page);

        await homePage.goto({ timeout: 5_000 });
        await homePage.clickFirstArticle();
        // await homePage.clickNthArticle(0);

        await articlePage.assertFavoriteButtonVisible();
        await articlePage.clickFavoriteButton();

        await registerPage.assertNavigatedOnPage();
        await registerPage.assetOnPage();
    });
});