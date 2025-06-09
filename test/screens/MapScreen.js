// test/screens/MapScreen.js
class MapScreen {

      get searchBar() {
        return $('//*[@value="Enter Location"]');
      }

      get searchButton() {
        return $('~magnifyingglass.circle.fill');
      }
  }
  
  export default new MapScreen();  