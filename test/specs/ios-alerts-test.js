describe('Test Generating Alerts', () => {
  
    it('should tap on alerts', async () => {
        const alerts = await $('//*[@value="Alerts"]');
        await alerts.waitForDisplayed({ timeout: 5000 });
        alerts.click();
      });
    
    it('should tap generate alert button', async () => {
      const generateAlert = await $('//*[@name="Generate Alert"]');
      await generateAlert.waitForDisplayed({ timeout: 5000 });
      generateAlert.click();
      await driver.pause(10000);
    });
  });