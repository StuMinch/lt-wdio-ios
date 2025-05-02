describe('Log Out of My TRR', () => {  
    it('should tap My TRR button', async () => {
      const button = await $('~My TRR');
      await button.waitForDisplayed();
      button.click();
    });

    it('should tap sign in', async () => {
      const button = await $('~SIGN IN');
      await button.waitForDisplayed();
      button.click();
    });

    it('should enter email address', async () => {
      const textField = await $('~email_field');
      textField.setValue('auto+1@therealreal.com');
    });

    it('should enter password', async () => {
      const textField = await $('~password_field');
      textField.setValue('therealdeal1');
    });

    it('should tap sign in', async () => {
      const button = await $('~SIGN IN');
      await button.waitForDisplayed();
      button.click();
    });

    it('should tap next', async () => {
      const button = await $('~referrals.tutorial.cta.next');
      await button.waitForDisplayed();
      button.click();
    });

    it('should tap got it', async () => {
      const button = await $('~referrals.tutorial.cta.got it');
      await button.waitForDisplayed();
      button.click();
    });

    it('should tap My TRR button', async () => {
      const button = await $('~My TRR');
      await button.waitForDisplayed();
      button.click();
    });

    it('should tap got it', async () => {
      const button = await $('~GOT IT');
      await button.waitForDisplayed();
      button.click();
    });

    it('should tap Settings', async () => {
      const settings = await $('~Settings');
      await settings.click();
    });

    it('should scroll down to log out', async () => {
      await driver.execute('mobile: scroll', { 
        direction: 'down', 
        predicateString: 'name == "Log Out"' 
      });
    
      // iOS class chain
      //const selector = '**/XCUIElementTypeStaticText[`name == "Log Out"`][2]'
      //const selector = '**/XCUIElementTypeButton[`label == \"Log Out\"`][2]'
      //const logout = await $(`-ios class chain:${selector}`)
      //await logout.click()
      
      // XPATH
      const button = await $('(//XCUIElementTypeButton[@name="Log Out"])[2]');
      await button.waitForDisplayed();
      await button.click();
    });    
  });