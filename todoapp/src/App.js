// console.log('loaded App.js');

export class App {
  mount() {
    const formElement = document.querySelector('#js-form');
    const inputElement = document.querySelector('#js-form-input');

    formElement.addEventListener('submit', (event) => {
      // submitイベントの本来の動きを止める
      event.preventDefault();
      console.log(`入力値: ${inputElement.value}`);
    });
  }
}
