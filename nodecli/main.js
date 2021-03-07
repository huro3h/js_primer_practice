// commanderモジュールをオブジェクトとしてインポート
const program = require('commander');

// fsモジュールのインポート
const fs = require('fs');

// process.argv コンソールにコマンドライン引数を出力
// console.log(process.argv);

// コマンドライン引数をパース
program.parse(process.argv);
const filePath = program.args[0];

// console.log(filePath);

// ファイルを非同期で読み込む
fs.readFile(filePath, (err, file) => {
  console.log(file);
});

// $ node main.js example.md
// <Buffer 65 78 6d 61 70 6c... となるのは
// コールバック関数の第二引数がファイルの中身を表すBufferインスタンスだから
// ファイルの読み込み方をこのあと指定する
