describe('Test API Calls', () => {
  
    it('should tap on api calls option', async () => {
        const apiCalls = await $('//*[@value="API Calls"]');
        await apiCalls.waitForDisplayed({ timeout: 5000 });
        apiCalls.click();
      });
    
    it('should tap send 25 get requests button', async () => {
      const sendRequest = await $('//*[@name="Send 25 GET Requests"]');
      await sendRequest.waitForDisplayed({ timeout: 5000 });
      sendRequest.click();
      await driver.pause(10000);
    });
  });