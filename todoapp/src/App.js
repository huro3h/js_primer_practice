// console.log('loaded App.js');
import { element } from "./view/html-util.js";

export class App {
  mount() {
    const formElement = document.querySelector('#js-form');
    const inputElement = document.querySelector('#js-form-input');
    const containerElement = document.querySelector('#js-todo-list');
    const todoItemCountElement = document.querySelector('#js-todo-count');

    let todoItemCount = 0;

    formElement.addEventListener('submit', (event) => {
      // submitイベントの本来の動きを止める
      event.preventDefault();
      // console.log(`入力値: ${inputElement.value}`);

      // 追加するTodoアイテムの要素(li要素)を作成する
      const todoItemElement = element`<li>${inputElement.value}</li>`;

      // Todoアイテムをcontainerに追加する
      containerElement.appendChild(todoItemElement);

      // Todoアイテム数を+1して表示されているテキストを更新する
      todoItemCount += 1;
      todoItemCountElement.textContent = `todoアイテム数: ${todoItemCount}`;

      // 入力欄を空文字列にしてリセット
      inputElement.value = '';
    });
  }
}
