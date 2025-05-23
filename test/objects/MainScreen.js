// test/objects/MainScreen.js
class MainScreen {
    get alerts() {
      return $('//*[@name="Alerts"]');
    }

    get apiCalls() {
      return $('//*[@name="API Calls"]');
    }

    get applePay() {
      return $('//*[@name="Apple Pay"]');
    }

    get map() {
      return $('//*[@name="Map"]');
    }
    
    get text() {
      return $('//*[@name="Text"]');
    }

    get web() {
      return $('//*[@name="Web"]');
    }
  
  }
  
  export default new MainScreen();  