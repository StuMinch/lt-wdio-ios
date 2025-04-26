describe('Test API Calls', () => {
  
    it('should tap on api calls option', async () => {
        const alerts = await $('//*[@value="API Calls"]');
        await alerts.waitForDisplayed({ timeout: 5000 });
        alerts.click();
      });
    
    it('should tap send 25 get requests button', async () => {
      const generateAlert = await $('//*[@name="Send 25 GET Requests"]');
      await generateAlert.waitForDisplayed({ timeout: 5000 });
      generateAlert.click();
      await driver.pause(10000);
    });
  });