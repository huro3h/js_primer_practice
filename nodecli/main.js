// commanderモジュールをオブジェクトとしてインポート
const program = require('commander');

// process.argv コンソールにコマンドライン引数を出力
// console.log(process.argv);

// コマンドライン引数をパース
program.parse(process.argv);

const filePath = program.args[0];

console.log(filePath);
