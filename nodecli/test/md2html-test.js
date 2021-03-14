const assert = require("assert");
const fs = require("fs");
const path = require("path");
const md2html = require("../md2html");

it("マークダウンからHTMLに変換できること(gfm: false)", () => {
  // fs.readFileSyncは同期的にファイルを読み込むメソッド
  const sample = fs.readFileSync(path.resolve(__dirname,
    "./fixtures/sample.md"), { encoding: "utf-8" });

  const expected = fs.readFileSync(path.resolve(__dirname,
    "./fixtures/expected.html"), { encoding: "utf-8" });

  assert.strictEqual(md2html(sample, { gfm: false }), expected);
});
