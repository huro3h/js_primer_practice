import { EventEmitter } from "../EventEmitter.js";

export class TodoListModel extends EventEmitter{
  constructor(items = []) {
    super();
    this.items = items;
  }

  // TodoTtemの合計個数を返す
  getTotalCount() {
    return this.items.length;
  }

  getTodoItems() {
    return this.items;
  }

  // TodoListの状態が更新された時に呼び出されるリスナー関数を登録する
  // @param {Function} listener
  onChange(listener) {
    this.addEventListener("change", listener);
  }

  // 状態が変更された時に呼ぶ、登録済みのリスナー関数を呼び出す
  emitChange() {
    this.emit("change");
  }

  // TodoItemを追加
  // @param { TodoItemModel } todoItem
  addTodo(todoItem) {
    this.items.push(todoItem);
    this.emitChange();
  }

  // 指定したidのTodoItemのcompletedを更新する
  // @param {{ id: number, completed: boolean }}
  updateTodo({id, completed}){
    // idが一致するTodoItemをを見つけ、あるなら完了状態の値を更新する
    // modelのidと関数の引数で取ったidが一緒のものを取得
    const todoItem = this.items.find(todo => todo.id === id);
    if (!todoItem) {
      return;
    }
    todoItem.completed = completed;
    this.emitChange();
  }
}
