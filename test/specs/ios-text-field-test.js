import MainScreen from '../objects/MainScreen';

describe('Test inputting text', () => {
    it('should tap on text', async () => {
        await MainScreen.text.waitForDisplayed({ timeout: 5000 });
        await MainScreen.text.click();
      });
    
    it('should enter text', async () => {
      const textField = await $('//XCUIElementTypeTextField[@value="Enter your text here"]')
      const submitButton = await $('~Submit')
      await textField.waitForDisplayed({ timeout: 5000 });
      textField.setValue('Hello World');
      submitButton.click();
      await driver.pause(5000);
    });
  });