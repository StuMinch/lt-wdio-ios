import MainScreen from '../screens/MainScreen';
import TextScreen from '../screens/TextScreen';

describe('Test inputting text', () => {
    it('should tap on text', async () => {
        await MainScreen.text.waitForDisplayed({ timeout: 5000 });
        await MainScreen.text.click();
      });
    
    it('should enter text', async () => {
      await TextScreen.textField.waitForDisplayed({ timeout: 5000 });
      await TextScreen.textField.setValue('Hello World');
    });

    it('should tap submit button', async () => {
      await TextScreen.submitButton.waitForDisplayed({ timeout: 5000 });
      await TextScreen.submitButton.click();
    });
  });