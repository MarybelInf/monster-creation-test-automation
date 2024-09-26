import { test } from "@playwright/test";
import { CreateLookUpMonsterPage } from "../../pages/CreateLookUpMonsterPage";

test.describe("Verify the Monster's Favorite button flow", () => {
  let createLookUpMonsterPage: CreateLookUpMonsterPage;

  test.beforeEach(async ({ page }) => {
    createLookUpMonsterPage = new CreateLookUpMonsterPage(page);
    createLookUpMonsterPage.navigateToTheCreateMonsterApp();
  });

  test("@T-4 @LookUpMonster Verify Monster's created favorite button", async () => {
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
    await createLookUpMonsterPage.verifyFavoriteMonstersButton(
      dataCreationImgOne[1]
    );
  });
});
