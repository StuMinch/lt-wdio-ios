// test/objects/TextScreen.js
class TextScreen {
    get textField() {
      return $('//*[@value="Enter your text here"]');
    }

    get submitButton() {
      return $('~Submit');
    }
  }
  
  export default new TextScreen();  