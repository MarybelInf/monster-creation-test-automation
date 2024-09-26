# monster-creation-test-automation

### Repo organization ###
This repository contains the following directories:
```
|____test
|____support
| |____constants
| |____locators
| |____enum
|
|____pages
| |____CreateLookUpMonsterPage.ts
|
|____data_source (TBD)
|
|____buildspec (TBD)



```

1. **test_scripts** - Contains ts test automation scripts to implement test steps for various test scenarios under React application.
   Examples:
   ```
   |____test
   | |____CreateMonster
   | | |____test_01.py
   | | |____test_02.py
   | |____LookUpMonster
   | | |____test_03.py
   | | |____test_04.py
   

2. **page_repository** Tests are designed based on the Page Object Model (POM) design pattern. Under this model, each web page has a corresponding `page class` containing `WebElements` of that web page and also `page methods` which perform operations on those `WebElements`. Each web page under React application has a dedicated page object `.ts` file available under this directory.
   Examples:
   ```
   |____pages
   | |____CreateLookUpMonsterPage.ts
   ```
### Environment setup ###
1. Clone the code from `monster-creation-test-automation` repo
   - `SSH: git clone git@github.com:MarybelInf/monster-creation-test-automation.git` (Preferred)
   - `HTTPS: git clone https://github.com/MarybelInf/monster-creation-test-automation.git` (alternative)
  
## Commands ##
- npx playwright test
- npx playwright show-report
- allure generate ./allure-results -o ./allure-report --clean
- allure open ./allure-report

## Related documentation ##
- Naming convention.
- Branch strategy.
- Good practices and workflow.