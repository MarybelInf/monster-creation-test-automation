import { test } from "@playwright/test";
import { CreateLookUpMonsterPage } from "../../pages/CreateLookUpMonsterPage";

test.describe('Verify All elements are displayed on the Create monster page', () => {
    let createLookUpMonsterPage: CreateLookUpMonsterPage;

    test.beforeEach(async ({ page }) => {
        createLookUpMonsterPage = new CreateLookUpMonsterPage(page);
        createLookUpMonsterPage.navigateToTheCreateMonsterApp();
    });

    test("@T-01 @FeatureUiElements Verify all elements are displayed", async () => {
        createLookUpMonsterPage.verifyCreateMonsterPageTitleVisible();
        await createLookUpMonsterPage.verifySubTitleVisible();

        await createLookUpMonsterPage.verifyImagesAreVisible();

        await createLookUpMonsterPage.verifyNameInputFieldAndLabel();
        await createLookUpMonsterPage.verifyHpInputFieldAndLabel();
        await createLookUpMonsterPage.verifyAttackInputFieldAndLabel();
        await createLookUpMonsterPage.verifyDefenseInputFieldAndLabel();
        await createLookUpMonsterPage.verifySpeedInputFieldAndLabel();

        await createLookUpMonsterPage.verifyCreateMonsterButtonDisplayed();
        await createLookUpMonsterPage.verifyNoMonstersTitleVisible();
    });
    
});
