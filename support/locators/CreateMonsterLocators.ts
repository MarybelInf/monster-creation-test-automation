export class CreateMonsterLocators {
  static readonly TITLE = "app-name";
  static readonly IMAGE = (index: string) => `monster-${index}`;
  static readonly SUBTITLE = "monster-list-title";
  static readonly NAME_INPUT = "monster-name";
  static readonly HP_INPUT = "hp-value";
  static readonly ATTACK_INPUT = "attack-value";
  static readonly DEFENSE_INPUT = "defense-value";
  static readonly SPEED_INPUT = "speed-value";
  static readonly CREATE_MONSTER_BUTTON = "btn-create-monster";
  static readonly DYNAMIC_TITLE = "dynamic-title";
  static readonly REQUIRED_FIELDS_ALERT = "alert-required-fields";
}