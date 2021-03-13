const program = require('commander');
const fs = require('fs');

const marked = require('marked');

program.parse(process.argv);
const filePath = program.args[0];

// ファイルの非同期読み込み
fs.readFile(filePath, { encoding: 'utf-8' }, (err, file) => {
  if  (err) {
    // エラーハンドリング
    console.error(err.message);
    process.exit(1);
    return;
  }

  const html = marked(file, {
    gfm: false
  });
  
  console.log(html);
});


// $ node main.js ./example000.md
// ENOENT: no such file or directory, open './example000.md'
