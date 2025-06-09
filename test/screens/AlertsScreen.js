// test/screens/AlertsScreen.js
class AlertsScreen {
    get generateAlertButton() {
      return $('~Generate Alert');
    }

    get okButton() {
      return $('~OK');
    }

    get cancelButton() {
      return $('~Cancel');
    }
  
  }
  
  export default new AlertsScreen();  