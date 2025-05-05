export const config = {
    user: process.env.LT_USERNAME || "YOUR_USERNAME",
    key: process.env.LT_ACCESS_KEY || "YOUR_ACCESS_KEY",
  
    updateJob: true,
    reporters: ["spec"],
    specs: ["./test/specs/ios-api-test.js"],
    exclude: [],
    services: ["lambdatest"],
  
    maxInstances: 10,
  
    capabilities: [
      {
        "lt:options": {
          "w3c": true,
          "app": process.env.LT_APP_ID||"lt://APP1016024941742838599724116",
          "build": "WebdriverIO-iOS-Real-Device",
          "name": "Sample iOS Real Device Test - WebDriverIO",
          "platformName": "ios",
          "deviceName": "iPhone 16",
          "network": true,
          "devicelog": true,
          "isRealMobile": true
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