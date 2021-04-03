import { App } from "./src/App.js"
const app = new App();
app.mount();

// console.log('loaded index.js');
// console.log('start cmd yarn js-primer-local-server --port 8000');


// EventEmitter sample code

// import { EventEmitter } from "./src/EventEmitter.js";
// const event = new EventEmitter();
//
// event.addEventListener('test-event', () => console.log('1'));
// event.addEventListener('test-event', () => console.log('100'));
//
// event.emit('test-event');


// TodoItemModel sample code

// import { TodoItemModel } from "./src/model/TodoItemModel.js";
//
// const item = new TodoItemModel({
//   title: '未完了のtodo',
//   completed: true
// });
//
// const completedItem = new TodoItemModel({
//   title: '完了済todo',
//   completed: true
// });
//
// console.log(item.id !== completedItem.id);


// TodoListModel.js sample code

import { TodoItemModel } from "./src/model/TodoItemModel.js";
import { TodoListModel } from "./src/model/TodoListModel.js";


// 新しいTodoリストの作成
const todoListModel = new TodoListModel();

// 現在のTodoアイテム数0
console.log(todoListModel.getTotalCount());

// Todoリストが変更されたら呼ばれるイベントリスナーを登録
todoListModel.onChange(() => {
  console.log("todoリストの状態が変化");
});

// 新しいTodoアイテムを追加
// onChangeで登録したイベントリスナーが呼び出される
todoListModel.addTodo(new TodoItemModel({
  title: 'new todo item...',
  completed: false
}));

// Todoリストにアイテムが増える
console.log(todoListModel.getTotalCount());
