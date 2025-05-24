import MainScreen from '../objects/MainScreen';
import MapScreen from '../objects/MapScreen';

describe('Test Map', () => {
    it('should tap on map', async () => {
        await MainScreen.map.waitForDisplayed({ timeout: 5000 });
        await MainScreen.map.click();
      });
    
    it('should tap allow once button', async () => {
      await MapScreen.allowOnceButton.waitForDisplayed({ timeout: 5000 });
      await MapScreen.allowOnceButton.click();
    });

    it('should enter and search for a location', async () => {
        await MapScreen.searchBar.waitForDisplayed({ timeout: 5000 });
        await MapScreen.searchButton.waitForDisplayed({ timeout: 5000 });
        await MapScreen.searchBar.setValue('Walnut Creek, CA');
        await MapScreen.searchButton.click();
      });
  });