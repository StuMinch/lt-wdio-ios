// test/screens/MapScreen.js
class MapScreen {
    get allowOnceButton() {
        return $('~Allow Once');
      }
  
      get allowWhileUsingAppButton() {
        return $('~Allow While Using App');
      }
  
      get dontAllowButton() {
        return $(`~Don’t Allow`);
      }

      get searchBar() {
        return $('//*[@value="Enter Location"]');
      }

      get searchButton() {
        return $('~magnifyingglass.circle.fill');
      }
  }
  
  export default new MapScreen();  