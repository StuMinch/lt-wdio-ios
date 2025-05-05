describe('Test Generating Alerts', () => {
    it('should tap on alerts', async () => {
        //const alerts = await $('//*[@value="Alerts"]');
        // iOS Class Chain
        const selector = '**/XCUIElementTypeButton[`name == "Alerts"`]'
        const alerts = await $(`-ios class chain:${selector}`)
        await alerts.waitForDisplayed({ timeout: 5000 });
        alerts.click();
      });
    
    it('should tap generate alert button', async () => {
      //const generateAlert = await $('//*[@name="Generate Alert"]');
      // iOS Class Chain
      const selector = '**/XCUIElementTypeButton[`name == "Generate Alert"`]'
      const generateAlert = await $(`-ios class chain:${selector}`)
      await generateAlert.waitForDisplayed({ timeout: 5000 });
      generateAlert.click();
      await driver.pause(10000);
    });
  });