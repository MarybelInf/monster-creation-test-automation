import { test } from "@playwright/test";
import { CreateLookUpMonsterPage } from "../../pages/CreateLookUpMonsterPage";

test.describe("Verify the Monster's Creation flow", () => {
  let createLookUpMonsterPage: CreateLookUpMonsterPage;

  test.beforeEach(async ({ page }) => {
    createLookUpMonsterPage = new CreateLookUpMonsterPage(page);
    createLookUpMonsterPage.navigateToTheCreateMonsterApp();
  });

  test("@T-3 @FeatureCreation Verify Monster's creation by image", async () => {
    await createLookUpMonsterPage.verifyCreateMonsterPageTitleVisible();

    const dataCreationImgOne = [
      "1",
      "Test One",
      "10",
      "20",
      "30",
      "40",
    ];
    await createLookUpMonsterPage.createMonster(dataCreationImgOne);
    await createLookUpMonsterPage.verifyYourMonstersTitleVisible();
    await createLookUpMonsterPage.verifyMonsterCard(
      dataCreationImgOne
    );

    const dataCreationImgTwo = [
      "2",
      "Test Two",
      "30",
      "40",
      "30",
      "50",
    ];
    await createLookUpMonsterPage.createMonster(dataCreationImgTwo);
    await createLookUpMonsterPage.verifyMonsterCard(
      dataCreationImgTwo
    );

    const dataCreationImgThree = [
      "3",
      "Test Three",
      "10",
      "20",
      "30",
      "40",
    ];
    await createLookUpMonsterPage.createMonster(dataCreationImgThree);
    await createLookUpMonsterPage.verifyMonsterCard(
      dataCreationImgThree
    );

    const dataCreationImgFour = [
      "4",
      "Test Four",
      "10",
      "20",
      "30",
      "40",
    ];
    await createLookUpMonsterPage.createMonster(dataCreationImgFour);
    await createLookUpMonsterPage.verifyMonsterCard(
      dataCreationImgFour
    );

    const dataCreationImgFive = [
      "5",
      "Test Five",
      "10",
      "20",
      "30",
      "40",
    ];
    await createLookUpMonsterPage.createMonster(dataCreationImgFive);
    await createLookUpMonsterPage.verifyMonsterCard(
      dataCreationImgFive
    );
  });
});
