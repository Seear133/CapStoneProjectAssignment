$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/CapStoneProjectretailLoginPage.feature");
formatter.feature({
  "line": 2,
  "name": "- for this feature you have to have an existing account",
  "description": "",
  "id": "--for-this-feature-you-have-to-have-an-existing-account",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TestEditingAccountCapStone"
    }
  ]
});
formatter.before({
  "duration": 2192429400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter username \u0027sear@gmail.com\u0027 and password \u00271234\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Login button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be logged in to MyAccounts dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2693070200,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3078600700,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_clicks_on_Login()"
});
formatter.result({
  "duration": 2101077500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sear@gmail.com",
      "offset": 21
    },
    {
      "val": "1234",
      "offset": 51
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 510487900,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_click_on_Login_button()"
});
formatter.result({
  "duration": 379858800,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_should_be_logged_in_to_MyAccounts_dashboard()"
});
formatter.result({
  "duration": 3038901700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Register as an Affiliate user with Cheque Payment Method",
  "description": "",
  "id": "--for-this-feature-you-have-to-have-an-existing-account;register-as-an-affiliate-user-with-cheque-payment-method",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Test100"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User click on ‘Register for an Affiliate Account’ link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User fill affiliate form with below information",
  "rows": [
    {
      "cells": [
        "company",
        "website",
        "taxID",
        "paymentMethod"
      ],
      "line": 17
    },
    {
      "cells": [
        "Metropolitan",
        "www.metro-protect.com",
        "888",
        "Savings"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User check on About us check box",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should see a success message",
  "keyword": "Then "
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_click_on_Register_for_an_Affiliate_Account_link()"
});
formatter.result({
  "duration": 45076916800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Register for an affiliate account\u0027)]\"}\n  (Session info: chrome\u003d89.0.4389.90)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027LAPTOP-3MVTQCKB\u0027, ip: \u002710.0.0.127\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.90, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\ahmad\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60407}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 25a31c988a17252337bd63e47bf35111\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Register for an affiliate account\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat utilities.WebDriverUtility.clickOnElement(WebDriverUtility.java:23)\r\n\tat pageObjects.ObjectsCapStonProject.clickOnAffiAccount(ObjectsCapStonProject.java:355)\r\n\tat stepDefinitions.CapStonProjectStepDefiniations1.user_click_on_Register_for_an_Affiliate_Account_link(CapStonProjectStepDefiniations1.java:292)\r\n\tat ✽.When User click on ‘Register for an Affiliate Account’ link(Features/CapStoneProjectretailLoginPage.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_fill_affiliate_form_with_below_information(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_check_on_About_us_check_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_click_Continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_should_see_a_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 686510100,
  "status": "passed"
});
formatter.before({
  "duration": 1368673200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter username \u0027sear@gmail.com\u0027 and password \u00271234\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Login button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be logged in to MyAccounts dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2529754100,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3072307500,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_clicks_on_Login()"
});
formatter.result({
  "duration": 2343956500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sear@gmail.com",
      "offset": 21
    },
    {
      "val": "1234",
      "offset": 51
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 475544400,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_click_on_Login_button()"
});
formatter.result({
  "duration": 363710900,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_should_be_logged_in_to_MyAccounts_dashboard()"
});
formatter.result({
  "duration": 3040128100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Edit your affiliate information from Cheque payment method to Bank Transfer",
  "description": "",
  "id": "--for-this-feature-you-have-to-have-an-existing-account;edit-your-affiliate-information-from-cheque-payment-method-to-bank-transfer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@Test200"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User click on ‘Edit your affiliate informationlink",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user click on Bank Transfer radio button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User fill Bank information with below information",
  "rows": [
    {
      "cells": [
        "bankName",
        "abaNumber",
        "swiftCode",
        "accountName",
        "accountNumber"
      ],
      "line": 28
    },
    {
      "cells": [
        "Capital One",
        "5555",
        "8888",
        "12345678910",
        "Savings"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User clicks on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should see a success\u0027s message",
  "keyword": "Then "
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_click_on_Edit_your_affiliate_informationlink()"
});
formatter.result({
  "duration": 2264430700,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_click_on_Bank_Transfer_radio_button()"
});
formatter.result({
  "duration": 2071971400,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_fill_Bank_information_with_below_information(DataTable)"
});
formatter.result({
  "duration": 8365190700,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_clicks_on_Continue_button()"
});
formatter.result({
  "duration": 2405845200,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_should_see_a_success_s_message()"
});
formatter.result({
  "duration": 2039064100,
  "status": "passed"
});
formatter.after({
  "duration": 654945100,
  "status": "passed"
});
formatter.before({
  "duration": 1370613900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "User is on Retail website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click on MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on Login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enter username \u0027sear@gmail.com\u0027 and password \u00271234\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click on Login button\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User should be logged in to MyAccounts dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestStepDefinition.user_is_on_Retail_website()"
});
formatter.result({
  "duration": 2522795200,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_click_on_MyAccount()"
});
formatter.result({
  "duration": 3069750500,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_clicks_on_Login()"
});
formatter.result({
  "duration": 2370467900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sear@gmail.com",
      "offset": 21
    },
    {
      "val": "1234",
      "offset": 51
    }
  ],
  "location": "LoginTestStepDefinition.user_enter_username_sdet_tekschool_us_and_password_sdet(String,String)"
});
formatter.result({
  "duration": 565203200,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_click_on_Login_button()"
});
formatter.result({
  "duration": 402952200,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_should_be_logged_in_to_MyAccounts_dashboard()"
});
formatter.result({
  "duration": 3032500000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Edit your account Information",
  "description": "",
  "id": "--for-this-feature-you-have-to-have-an-existing-account;edit-your-account-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@Test300"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "User click on ‘Edit your account information’ link",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "User modify below information",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastName",
        "email",
        "telephone"
      ],
      "line": 37
    },
    {
      "cells": [
        "nabi",
        "karim",
        "nami@gmail.com",
        "345678"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User should see a message ‘Success: \u0027Your account has been successfully updated\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_click_on_Edit_your_account_information_link()"
});
formatter.result({
  "duration": 1069433100,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_modify_below_information(DataTable)"
});
formatter.result({
  "duration": 2447184800,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_click_on_continue_button()"
});
formatter.result({
  "duration": 2334336600,
  "status": "passed"
});
formatter.match({
  "location": "CapStonProjectStepDefiniations1.user_should_see_a_message_Success_Your_account_has_been_successfully_updated()"
});
formatter.result({
  "duration": 344859000,
  "status": "passed"
});
formatter.after({
  "duration": 655454500,
  "status": "passed"
});
});