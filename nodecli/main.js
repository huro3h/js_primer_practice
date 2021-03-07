// commanderモジュールをオブジェクトとしてインポート
const program = require('commander');
const fs = require('fs');

// コマンドライン引数をパース
program.parse(process.argv);
const filePath = program.args[0];

// ファイルを UTF-8 として非同期で読み込む
fs.readFile(filePath, { encoding: 'utf-8' }, (err, file) => {
  console.log(file);
});


// node main.js ./example.md
// => exmaple.com
// sample2.example.com
// 🙌
