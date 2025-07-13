🧪 Playwright Demo Project
---------------------------------------------------------
This project contains automated UI tests developed using JavaScript, Playwright, Cucumber, MochaFramework and Page Object Model (POM) and allure-playwright for reporting in Vs code. It verifies the functionality of an e-commerce tool shop across various user journeys.
Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox. Test on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari.


🛠️ Tech Stack

| Feature         | Description                               |
|-----------------|-------------------------------------------|
| Framework       | Mocha                                     |
| Test Tool       | Playwright - 1.53.1 Version               |                          
| Application     | E-commerce (End-to-End Test Coverage)     |
| Language        | JavaScript                                |
| Reporting       | Allure-playwright - 3.3.0 Version
| Code -editor    | VS Code - 1.100.2 Version
-------------------------------------------------------------

🚀 Getting Started
-----------------------------------------------------------
📦 Prerequisites

- Vs code 
  
- Node.js

  🔧 Install Playwright and Browsers

        npx playwright install  

  ▶️ Running the Tests
  
        npx playwright test

  📊 Reports
  
  After the test execution you can open the reports in HTML or in allure-playwright

        - HTML Test Reports
        npx playwright show-report

        - Allure report
          - Installation
            npm install -D allure-playwright

          - Usage:
            Add allure-playwright as the reporter in the Playwright configuration file:

            import { defineConfig } from '@playwright/test';

            export default defineConfig({
            reporter: "allure-playwright",
            });

          - Run test script with below command:
            npx playwright test --reporter=line,allure-playwright

          - Generate Allure Report after the tests are executed:
            allure generate ./allure-results -o ./allure-report

          - Open the generated report:
            allure open ./allure-report
  
