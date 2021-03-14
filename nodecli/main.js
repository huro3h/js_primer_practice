const program = require('commander');
const fs = require('fs');
const marked = require('marked');

// gfmオプションの定義
program.option("--gfm", "gfmを有効にする");
program.parse(process.argv);
const filePath = program.args[0];

const cliOptions = {
  gfm: false,
  ...program.opts(),
}

// ファイルの非同期読み込み
fs.readFile(filePath, { encoding: 'utf-8' }, (err, file) => {
  if  (err) {
    // エラーハンドリング
    console.error(err.message);
    process.exit(1);
    return;
  }

  const html = marked(file, {
    // オプションの値を使用
    gfm: cliOptions.gfm,
  });

  console.log(html);
});

// $ node main.js ./example000.md
// ENOENT: no such file or directory, open './example000.md'
