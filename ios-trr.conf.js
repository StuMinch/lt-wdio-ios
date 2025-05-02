export const config = {
    user: process.env.LT_USERNAME || "YOUR_USERNAME",
    key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",
  
    updateJob: true,
    reporters: ["spec"],
    specs: ["./test/specs/test-trr-create-account.js"],
    exclude: [],
    services: ["lambdatest"],
  
    maxInstances: 1,
  
    capabilities: [
      {
        "lt:options": {
          "w3c": true,
          "app": process.env.LT_APP_ID||"lt://APP10160312371746130535360779",
          "build": "TRR Staging",
          "name": "Troubleshooting Timeout Issue",
          "platformName": "ios",
          "appium:deviceName": "iPhone 16",
          "appium:platformVersion": "18.1",
          "appium:automationName": "XCUITest",
          "appiumVersion": "2.16.2",
          "appium:autoAcceptAlerts": true,
          "video": true,
          "network": true,
          "devicelog": true
        },
      },
    ],
  
    logLevel: "debug",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    path: "/wd/hub",
    product: "appAutomation",
    hostname: process.env.LT_GRID_URL||"mobile-hub.lambdatest.com",
    protocol: 'https',
    port: 443,
  
    framework: "mocha",
    mochaOpts: {
      ui: "bdd",
      timeout: 20000,
    },
};