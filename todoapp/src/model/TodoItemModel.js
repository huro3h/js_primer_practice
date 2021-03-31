// ユニークなIDを管理する変数
let todoIdx = 0;

export class TodoItemModel {

  // @param {string} title Todo アイテムのタイトル
  // @param {boolean} completed Todo アイテムが完了済ならばtrue, そうでないならfalse
  constructor({ title, completed }) {
    // idは自動的に連番となり、それぞれのインスタンスごとに異なるものとする
    this.id = todoIdx++;
    this.title = title;
    this.completed = completed
  }
}
