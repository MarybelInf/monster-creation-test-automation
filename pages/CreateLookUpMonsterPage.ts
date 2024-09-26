import test, { expect, Locator, Page } from "@playwright/test";
import { UrlConstants } from "../support/constants/UrlConstants";
import { CreateMonsterLocators } from "../support/locators/CreateMonsterLocators";
import { CreateMonsterConstants } from "../support/constants/createMonsterPortal/CreateMonsterConstants";
import { SetupConstants } from "../support/constants/SetupConstants";
import { LookUpMonsterLocators } from "../support/locators/LookUpMonsterLocators";
import { LookUpMonsterConstants } from "../support/constants/createMonsterPortal/LookUpMonsterConstants";




export class CreateLookUpMonsterPage {
  // Initialization & Locators region
  private page: Page;

  readonly titleLocator: Locator;

  readonly subtitleLocator: Locator;

  readonly nameLabelLocator: Locator;
  readonly attackLabelLocator: Locator;
  readonly hpLabelLocator: Locator;
  readonly defenseLabelLocator: Locator;
  readonly speedLabelLocator: Locator;

  readonly nameInputLocator: Locator;
  readonly attackInputLocator: Locator;
  readonly hpInputLocator: Locator;
  readonly defenseInputLocator: Locator;
  readonly speedInputLocator: Locator;

  readonly createMonsterButtonLocator: Locator;
  readonly dynamicTitleLocator: Locator;

  readonly requiredFieldsAlertLocator: Locator;

  // Look Up
  readonly monsterCardLocator: (name: string) => Locator;

  constructor(page: Page) {
    this.page = page;

    this.titleLocator = this.page.getByTestId(
      CreateMonsterLocators.TITLE
    );
    // Subtitle
    this.subtitleLocator = this.page.getByTestId(
      CreateMonsterLocators.SUBTITLE
    );
    // Inputs
    this.nameInputLocator = this.page
      .getByTestId(CreateMonsterLocators.NAME_INPUT)
      .locator(SetupConstants.INPUT);
    this.attackInputLocator = this.page
      .getByTestId(CreateMonsterLocators.ATTACK_INPUT)
      .locator(SetupConstants.INPUT);
    this.hpInputLocator = this.page
      .getByTestId(CreateMonsterLocators.HP_INPUT)
      .locator(SetupConstants.INPUT);
    this.defenseInputLocator = this.page
      .getByTestId(CreateMonsterLocators.DEFENSE_INPUT)
      .locator(SetupConstants.INPUT);
    this.speedInputLocator = this.page
      .getByTestId(CreateMonsterLocators.SPEED_INPUT)
      .locator(SetupConstants.INPUT);

    // Labels
    this.nameLabelLocator = this.page
      .getByTestId(CreateMonsterLocators.NAME_INPUT)
      .locator(SetupConstants.LABEL);
    this.attackLabelLocator = this.page
      .getByTestId(CreateMonsterLocators.ATTACK_INPUT)
      .locator(SetupConstants.LABEL);
    this.hpLabelLocator = this.page
      .getByTestId(CreateMonsterLocators.HP_INPUT)
      .locator(SetupConstants.LABEL);
    this.defenseLabelLocator = this.page
      .getByTestId(CreateMonsterLocators.DEFENSE_INPUT)
      .locator(SetupConstants.LABEL);
    this.speedLabelLocator = this.page
      .getByTestId(CreateMonsterLocators.SPEED_INPUT)
      .locator(SetupConstants.LABEL);

    // Title
    this.createMonsterButtonLocator = this.page.getByTestId(
      CreateMonsterLocators.CREATE_MONSTER_BUTTON
    );
    // Button
    this.dynamicTitleLocator = this.page.getByTestId(
      CreateMonsterLocators.DYNAMIC_TITLE
    );

    // Alerts
    this.requiredFieldsAlertLocator = this.page.getByTestId(
      CreateMonsterLocators.REQUIRED_FIELDS_ALERT
    );

    // Look up
    this.monsterCardLocator = (name: string) =>
      this.page
        .getByTestId(LookUpMonsterLocators.MONSTER_CARD)
        .filter({ hasText: name });
  }

  // Actions

  /**
   * Navigate to the Create Monster application
   */
  async navigateToTheCreateMonsterApp() {
    await test.step("Navigate to create monster react app", async () => {
      await this.page.goto(UrlConstants.LOCALHOST_BASE_URL);
    });
  }

  /**
   * Fill Name input
   */
  async fillInNameInput(text: string) {
    await test.step(`Filling Name input`, async () => {
      await this.nameInputLocator.fill(text);
    });
  }

  /**
   * Fill Hp input
   */
  async fillInHpInput(value: string) {
    await test.step(`Filling Hp input`, async () => {
      await this.hpInputLocator.fill(value);
    });
  }

  /**
   * Fill Attack input
   */
  async fillInAttackInput(value: string) {
    await test.step(`Filling Attack input`, async () => {
      await this.attackInputLocator.fill(value);
    });
  }

  /**
   * Fill Defense input
   */
  async fillInDefenseInput(value: string) {
    await test.step(`Filling Defense input`, async () => {
      await this.defenseInputLocator.fill(value);
    });
  }

  /**
   * Fill Speed input
   */
  async fillInSpeedInput(value: string) {
    await test.step(`Filling Speed input`, async () => {
      await this.speedInputLocator.fill(value);
    });
  }

  /**
   * Click on Create Monster Button
   */
  async clickOnCreateMonster() {
    await test.step(`Clicking on Create Monster Button`, async () => {
      await this.createMonsterButtonLocator.click();
    });
  }

  /**
   * Create monster
   */
  async createMonster(infoCreation: string[]) {
    await test.step(`Creating Monster`, async () => {
      // Mapping
      const info = {
        imageNumber: infoCreation[0],
        name: infoCreation[1],
        hp: infoCreation[2],
        attack: infoCreation[3],
        defense: infoCreation[4],
        speed: infoCreation[5],
      };
      await this.clickOnMonsterImage(info.imageNumber);
      await this.fillInNameInput(info.name);
      await this.fillInHpInput(info.hp);
      await this.fillInAttackInput(info.attack);
      await this.fillInDefenseInput(info.defense);
      await this.fillInSpeedInput(info.speed);
      await this.createMonsterButtonLocator.click();
    });
  }

  /**
   * Click on Create Monster Button
   */
  async clickOnMonsterImage(imgNumber: string) {
    await test.step(`Clicking on Monster's image`, async () => {
      await this.page
        .getByTestId(CreateMonsterLocators.IMAGE(imgNumber))
        .click();
    });
  }

  // Assertions

  /**
   * Verify Create Monster Page Title Visible
   */
  async verifyCreateMonsterPageTitleVisible() {
    await test.step("Verify Create Monster Page Title Visible", async () => {
      await expect.soft(this.titleLocator).toBeVisible();
      await expect
        .soft(this.titleLocator)
        .toHaveText(CreateMonsterConstants.TITLE);
    });
  }

  /**
   * Verify Create Monster page subtitle is visible
   */
  async verifySubTitleVisible() {
    await test.step(`Verify Create Monster page subtitle is visible`, async () => {
      await expect.soft(this.subtitleLocator).toBeVisible();
      await expect
        .soft(this.subtitleLocator)
        .toHaveText("test");
    });
  }

  /**
   * Verify that the expected images are displayed
   */
  async verifyImagesAreVisible() {
    for (
      let index = 0;
      index < CreateMonsterConstants.MONSTER_IMAGES.length;
      index++
    ) {
      const imgLocator = this.page
        .getByTestId(
          CreateMonsterLocators.IMAGE((index + 1).toString())
        )
        .locator(SetupConstants.IMG);
      const imgName = CreateMonsterConstants.MONSTER_IMAGES[index];
      await test.step(`Verify that the expected image:${imgName}  is displayed`, async () => {
        await expect.soft(imgLocator).toBeVisible();
        await expect
          .soft(imgLocator)
          .toHaveAttribute(SetupConstants.SRC, new RegExp(imgName));
      });
    }
  }

  /**
   * Verify that Name Input and label are displayed
   */
  async verifyNameInputFieldAndLabel() {
    await test.step(`Verify that Name Input and label are displayed`, async () => {
      await expect.soft(this.nameInputLocator).toBeVisible();
      await expect
        .soft(this.nameLabelLocator)
        .toHaveText(CreateMonsterConstants.NAME_LABEL);
    });
  }

  /**
   * Verify that Hp Input and label are displayed
   */
  async verifyHpInputFieldAndLabel() {
    await test.step(`Verify that Hp Input and label are displayed`, async () => {
      await expect.soft(this.hpInputLocator).toBeVisible();
      await expect
        .soft(this.hpLabelLocator)
        .toHaveText(CreateMonsterConstants.HP_LABEL);
    });
  }

  /**
   * Verify that Attack Input and label are displayed
   */
  async verifyAttackInputFieldAndLabel() {
    await test.step(`Verify that Attack Input and label are displayed`, async () => {
      await expect.soft(this.attackInputLocator).toBeVisible();
      await expect
        .soft(this.attackLabelLocator)
        .toHaveText(CreateMonsterConstants.ATTACK_LABEL);
    });
  }

  /**
   * Verify that Defense Input and label are displayed
   */
  async verifyDefenseInputFieldAndLabel() {
    await test.step(`Verify that Defense Input and label are displayed`, async () => {
      await expect.soft(this.defenseInputLocator).toBeVisible();
      await expect
        .soft(this.defenseLabelLocator)
        .toHaveText(CreateMonsterConstants.DEFENSE_LABEL);
    });
  }

  /**
   * Verify that Speed Input and label are displayed
   */
  async verifySpeedInputFieldAndLabel() {
    await test.step(`Verify that Speed Input and label are displayed`, async () => {
      await expect.soft(this.speedInputLocator).toBeVisible();
      await expect
        .soft(this.speedLabelLocator)
        .toHaveText(CreateMonsterConstants.SPEED_LABEL);
    });
  }

  /**
   * Verify that Create Monster Button is displayed
   */
  async verifyCreateMonsterButtonDisplayed() {
    await test.step(`Verify that Create Monster Button is displayed`, async () => {
      await expect.soft(this.speedInputLocator).toBeVisible();
      await expect
        .soft(this.createMonsterButtonLocator)
        .toHaveText(CreateMonsterConstants.CREATE_MONSTER_BUTTON);
    });
  }

  /**
   * Verify No Monster title is visible
   */
  async verifyNoMonstersTitleVisible() {
    await test.step(`Verify No Monster title is visible`, async () => {
      await expect.soft(this.titleLocator).toBeVisible();
      await expect
        .soft(this.dynamicTitleLocator)
        .toHaveText(CreateMonsterConstants.NO_MONSTER_TITLE);
    });
  }

  /**
   * Verify Required fields Alert is visible
   */
  async verifyRequiredFieldsAlertVisible() {
    await test.step(`Verify Required fields Alert is visible`, async () => {
      await expect
        .soft(this.requiredFieldsAlertLocator)
        .toBeVisible();
      await expect
        .soft(this.requiredFieldsAlertLocator)
        .toHaveText(CreateMonsterConstants.REQUIRED_FIELDS_ALERT);
    });
  }

  /**
   * Verify Required fields Alert is visible
   */
  async verifyAlertNotVisible() {
    await test.step(`Verify Required fields Alert is visible`, async () => {
      await expect
        .soft(this.requiredFieldsAlertLocator)
        .not.toBeVisible();
    });
  }

  /**
   * Verify Enter valid number Alert is visible
   */
  async verifyEnterValidNumberAlertVisible() {
    await test.step(`Verify Enter valid number Alert is visible`, async () => {
      await expect
        .soft(this.requiredFieldsAlertLocator)
        .toBeVisible();
      await expect
        .soft(this.requiredFieldsAlertLocator)
        .toHaveText(CreateMonsterConstants.ENTER_VALID_NUMBER_ALERT);
    });
  }

  /**
   * Verify Your Monster title is visible
   */
  async verifyYourMonstersTitleVisible() {
    await test.step(`Verify Your Monster title is visible`, async () => {
      await expect
        .soft(this.dynamicTitleLocator)
        .toBeVisible({ timeout: SetupConstants.WAIT_TIME_LOW });
      await expect
        .soft(this.dynamicTitleLocator)
        .toHaveText(LookUpMonsterConstants.TITLE);
    });
  }

  /**
   * Verify Created monster card
   */
  async verifyMonsterCard(dataInfo: string[]) {
    const [id, name, hp, attack, defense, speed] = dataInfo;
    const monsterCardLocator = this.monsterCardLocator(name);

    await test.step(`Verify Created monster card`, async () => {
      await expect(this.monsterCardLocator(name)).toBeVisible();
      await expect(
        this.monsterCardLocator(name).getByTestId(
          LookUpMonsterLocators.IMAGE
        )
      ).toHaveAttribute(SetupConstants.ALT, `${name} image`);

      // Verify Labels text
      await expect(
        monsterCardLocator.getByText(LookUpMonsterConstants.HP_LABEL)
      ).toBeVisible();
      await expect(
        monsterCardLocator.getByText(
          LookUpMonsterConstants.ATTACK_LABEL
        )
      ).toBeVisible();
      await expect(
        monsterCardLocator.getByText(
          LookUpMonsterConstants.DEFENSE_LABEL
        )
      ).toBeVisible();
      await expect(
        monsterCardLocator.getByText(
          LookUpMonsterConstants.SPEED_LABEL
        )
      ).toBeVisible();

      // Verify Values
      await expect(
        monsterCardLocator.getByTestId(LookUpMonsterLocators.HP)
      ).toHaveAttribute(SetupConstants.ARIA_VALUE, hp);
      await expect(
        monsterCardLocator.getByTestId(LookUpMonsterLocators.ATTACK)
      ).toHaveAttribute(SetupConstants.ARIA_VALUE, attack);
      await expect(
        monsterCardLocator.getByTestId(LookUpMonsterLocators.DEFENSE)
      ).toHaveAttribute(SetupConstants.ARIA_VALUE, defense);
      await expect(
        monsterCardLocator.getByTestId(LookUpMonsterLocators.SPEED)
      ).toHaveAttribute(SetupConstants.ARIA_VALUE, speed);

      // Verify Buttons
      await expect(
        this.monsterCardLocator(name).getByTestId(
          LookUpMonsterLocators.FAVORITE_BUTTON
        )
      ).toBeVisible();
      await expect(
        this.monsterCardLocator(name).getByTestId(
          LookUpMonsterLocators.DELETE_BUTTON
        )
      ).toBeVisible();
      await expect(
        this.monsterCardLocator(name).getByTestId(
          LookUpMonsterLocators.DELETE_BUTTON
        )
      ).toHaveText(LookUpMonsterConstants.DELETE_BUTTON);
    });
  }

  /**
   * Verify favorite button functionality
   */
  async verifyFavoriteMonstersButton(monsterName: string) {
    await test.step(`Verify Your Monster title is visible`, async () => {
      await expect(
        this.monsterCardLocator(monsterName).getByTestId(
          LookUpMonsterLocators.FAVORITE_BUTTON
        )
      ).toBeVisible();

      await this.monsterCardLocator(monsterName)
        .getByTestId(LookUpMonsterLocators.FAVORITE_BUTTON)
        .click();

      await expect(
        this.monsterCardLocator(monsterName).getByTestId(
          LookUpMonsterLocators.FAVORITE_BUTTON
        )
      ).toHaveAttribute(SetupConstants.STYLE, "color: red;");
    });
  }

  /**
   * Verify delete monster
   */
  async verifyDeleteMonsters(monsterName: string) {
    await test.step(`Verify delete monster`, async () => {
      await expect(
        this.monsterCardLocator(monsterName).getByTestId(
          LookUpMonsterLocators.DELETE_BUTTON
        )
      ).toBeVisible();

      await this.monsterCardLocator(monsterName)
        .getByTestId(LookUpMonsterLocators.DELETE_BUTTON)
        .click();

      await expect(
        this.monsterCardLocator(monsterName)
      ).not.toBeVisible();
    });
  }
}