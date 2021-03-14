const program = require('commander');
const fs = require('fs');

// md2htmlモジュールをインポート
const md2html = require('./md2html')

// gfmオプションの定義
program.option("--gfm", "gfmを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
  gfm: false,
  ...program.opts(),
};

// ファイルの非同期読み込み
fs.readFile(filePath, { encoding: 'utf-8' }, (err, file) => {
  if  (err) {
    // エラーハンドリング
    console.error(err.message);
    process.exit(1);
    return;
  }

  // md2htmlモジュールを使ったHTMLへの変換
  const html = md2html(file, cliOptions);
  console.log(html);
});

// $ node main.js ./example000.md
// ENOENT: no such file or directory, open './example000.md'
