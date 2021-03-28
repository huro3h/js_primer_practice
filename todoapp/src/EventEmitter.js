export class EventEmitter {
  constructor() {
    // 登録する [イベント名, Set(リスナー関数)] を管理する Map
    this._listeners = new Map();
  }

  // 指定したイベントが実行された時に呼び出されるリスナー関数を登録
  // @param {string} type イベント名
  // @param {Function} listener イベントリスナー
  addEventListener(type, listener) {
    // 指定したイベントに対応するSetを作成、リスナー関数を登録
    if (!this._listeners.has(type)) {
      this._listeners.set(type, new Set());
    }

    const listenerSet = this._listeners.get(type);
    listenerSet.add(listener);
  }

  // 指定したイベントをディスパッチ(送り出す?)する
  // @param {string} type イベント名
  emit(type) {
    // 指定したイベントに対応するSetを取り出し、全てのリスナー関数を呼び出す
    const listenerSet = this._listeners.get(type);
    if (!listenerSet) {
      return;
    }

    listenerSet.forEach(listener => {
      listener.call(this);
    });
  }

  // 指定したイベントのイベントリスナーを解除する
  // @param {string} type イベント名
  // @param {Function} listener イベントリスナー
  removeEventListener(type, listener) {
    // 指定したイベントに対応するSetを取り出し、該当するリスナー関数を削除する
    const listenerSet = this._listeners.get(type);
    if (!listenerSet) {
      return;
    }
    listenerSet.forEach(ownListener => {
      if (ownListener === listener) {
        listenerSet.delete(listener);
      }
    });
  }
}
