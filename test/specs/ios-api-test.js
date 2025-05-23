import MainScreen from '../objects/MainScreen';
import ApiCallsScreen from '../objects/ApiCallsScreen';

describe('Test API Calls', () => {  
    it('should tap api calls menu', async () => {
      await MainScreen.apiCalls.waitForDisplayed({ timeout: 5000 });
      await MainScreen.apiCalls.click();
    });
    
    it('should tap send 25 get requests button', async () => {
      await ApiCallsScreen.send25GetRequestsButton.waitForDisplayed({ timeout: 5000 });
      await ApiCallsScreen.send25GetRequestsButton.click();
      await driver.pause(5000);
      driver.execute("smartui.takeScreenshot=Tap 25 GET Requests");
    });
  });