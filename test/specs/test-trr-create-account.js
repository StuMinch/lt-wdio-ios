describe('Go to My TRR', () => {  
    it('should tap My TRR button', async () => {
      //const button = await $('//*[@name="My TRR"]');
      const button = await $('~My TRR');
      await button.waitForDisplayed({ timeout: 5000 });
      button.click();
    });

    it('should tap register', async () => {
      //const button = await $('//*[@name="REGISTER_BUTTON"]');
      const button = await $('~REGISTER_BUTTON');
      await button.waitForDisplayed({ timeout: 5000 });
      button.click();
    });

    it('should enter email address', async () => {
      //const textField = await $('//*[@name="Email"]');
      const textField = await $('~Email');
      await textField.waitForDisplayed({ timeout: 5000 });
      textField.setValue('stuart@lambdatest.com');
    });

    it('should enter password', async () => {
      //const textField = await $('//*[@name="Password"]');
      const textField = await $('~Password');
      await textField.waitForDisplayed({ timeout: 5000 });
      textField.setValue('Avistar1');
    });

    it('should confirm password', async () => {
      //const textField = await $('//*[@name="Confirm Password"]');
      const textField = await $('~Confirm Password');
      await textField.waitForDisplayed({ timeout: 5000 });
      textField.setValue('Avistar1');
    });

    it('should expect privacy policy to be present', async () => {
      //const policy = await $('//*[@name="By joining The RealReal, you agree to our Terms of Service and Privacy Policy."]');
      const policy = await $('~By joining The RealReal, you agree to our Terms of Service and Privacy Policy.');
      await policy.waitForDisplayed({ timeout: 5000 });
      await expect(policy).toBeDisplayed()
      await driver.pause(10000);
    });
  });