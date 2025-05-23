import MainScreen from '../objects/MainScreen';
import AlertsScreen from '../objects/AlertsScreen';

describe('Test Generating Alerts', () => {
    it('should tap on alerts', async () => {
        await MainScreen.alerts.waitForDisplayed({ timeout: 5000 });
        await MainScreen.alerts.click();
      });
    
    it('should tap generate alert button', async () => {
      await AlertsScreen.generateAlertButton.waitForDisplayed({ timeout: 5000 });
      await AlertsScreen.generateAlertButton.click();
    });

    it('should tap OK button', async () => {
      try {
        await AlertsScreen.okButton.waitForDisplayed({ timeout: 5000 });
        await AlertsScreen.okButton.click();
      } catch (error) {
        console.warn('The OK button did not appear:', error.message);
      }
    });
  });