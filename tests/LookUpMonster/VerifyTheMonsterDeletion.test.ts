import { test } from "@playwright/test";
import { CreateLookUpMonsterPage } from "../../pages/CreateLookUpMonsterPage";

test.describe("Verify the Monster's deletion flow", () => {
  let createLookUpMonsterPage: CreateLookUpMonsterPage;

  test.beforeEach(async ({ page }) => {
    createLookUpMonsterPage = new CreateLookUpMonsterPage(page);
    createLookUpMonsterPage.navigateToTheCreateMonsterApp();
  });

  test("@T-5 @LookUpMonster Verify Monster's created is able to be deleted", async () => {
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
    await createLookUpMonsterPage.verifyDeleteMonsters(
      dataCreationImgOne[1]
    );
  });
});
