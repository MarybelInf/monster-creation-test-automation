import { test } from "@playwright/test";
import { CreateLookUpMonsterPage } from "../../pages/CreateLookUpMonsterPage";

test.describe("Verify Error messages on the Create monster page", () => {
  let createLookUpMonsterPage: CreateLookUpMonsterPage;

  test.beforeEach(async ({ page }) => {
    createLookUpMonsterPage = new CreateLookUpMonsterPage(page);
    createLookUpMonsterPage.navigateToTheCreateMonsterApp();
  });

  test("@T-2 @FeatureUiElements Verify All fields are required", async () => {
    await createLookUpMonsterPage.verifyCreateMonsterPageTitleVisible();

    await createLookUpMonsterPage.clickOnCreateMonster();
    await createLookUpMonsterPage.verifyRequiredFieldsAlertVisible();
    // Review Name Input
    await createLookUpMonsterPage.fillInNameInput("Test One");
    await createLookUpMonsterPage.verifyAlertNotVisible();
    await createLookUpMonsterPage.clickOnCreateMonster();
    await createLookUpMonsterPage.verifyRequiredFieldsAlertVisible();
    // Review HP Input
    await createLookUpMonsterPage.fillInHpInput("10");
    await createLookUpMonsterPage.verifyAlertNotVisible();
    await createLookUpMonsterPage.clickOnCreateMonster();
    await createLookUpMonsterPage.verifyRequiredFieldsAlertVisible();
    // Review Attack Input
    await createLookUpMonsterPage.fillInAttackInput("20");
    await createLookUpMonsterPage.verifyAlertNotVisible();
    await createLookUpMonsterPage.clickOnCreateMonster();
    await createLookUpMonsterPage.verifyRequiredFieldsAlertVisible();
    // Review Defense Input
    await createLookUpMonsterPage.fillInDefenseInput("30");
    await createLookUpMonsterPage.verifyAlertNotVisible();
    await createLookUpMonsterPage.clickOnCreateMonster();
    await createLookUpMonsterPage.verifyRequiredFieldsAlertVisible();
    // Review Speed Input
    await createLookUpMonsterPage.fillInSpeedInput("40");
    await createLookUpMonsterPage.verifyAlertNotVisible();
  });

  test("@T-3 @FeatureUiElements Verify enter a valid number error", async () => {
    await createLookUpMonsterPage.verifyCreateMonsterPageTitleVisible();

    // Review HP Input
    await createLookUpMonsterPage.fillInHpInput("101");
    await createLookUpMonsterPage.verifyEnterValidNumberAlertVisible();
    await createLookUpMonsterPage.fillInHpInput("100");
    await createLookUpMonsterPage.verifyAlertNotVisible();

    // Review Attack Input
    await createLookUpMonsterPage.fillInAttackInput("201");
    await createLookUpMonsterPage.verifyEnterValidNumberAlertVisible();
    await createLookUpMonsterPage.fillInAttackInput("99");
    await createLookUpMonsterPage.verifyAlertNotVisible();

    // Review Defense Input
    await createLookUpMonsterPage.fillInDefenseInput("301");
    await createLookUpMonsterPage.verifyEnterValidNumberAlertVisible();
    await createLookUpMonsterPage.fillInDefenseInput("78");
    await createLookUpMonsterPage.verifyAlertNotVisible();

    // Review Speed Input
    await createLookUpMonsterPage.fillInSpeedInput("401");
    await createLookUpMonsterPage.verifyEnterValidNumberAlertVisible();
    await createLookUpMonsterPage.fillInSpeedInput("40");
    await createLookUpMonsterPage.verifyAlertNotVisible();
  });
});
