describe('Log Out of My TRR', () => {  
    it('should tap My TRR button', async () => {
      const button = await $('~My TRR');
      button.click();
    });

    it('should tap sign in', async () => {
      const button = await $('~SIGN IN');
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
      button.click();
    });

    it('should proceed with walkthrough', async () => {
      const nextbutton = await $('~referrals.tutorial.cta.next');
      await nextbutton.waitForDisplayed({ timeout: 40000 });
      nextbutton.click();

      const gotitbutton = await $('~referrals.tutorial.cta.got it');
      await gotitbutton.waitForDisplayed({ timeout: 40000 });
      gotitbutton.click();

      const mytrrbutton = await $('~My TRR');
      await mytrrbutton.waitForDisplayed({ timeout: 40000 });
      mytrrbutton.click();

      const gotitbutton2 = await $('~GOT IT');
      await gotitbutton2.waitForDisplayed({ timeout: 40000 });
      gotitbutton2.click();
    });

    it('should tap Settings and logout', async () => {
      const settings = await $('~Settings');
      settings.click();

      await driver.execute('mobile: scroll', { 
        direction: 'down', 
        predicateString: 'name == "Log Out"' 
      });
      
      const logout = await $('(//XCUIElementTypeButton[@name="Log Out"])[2]');
      await logout.click();
    });
  });