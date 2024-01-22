// $ node ./fs/02_md_to_html.js  index.md
const fs = require("fs");
const path = require("path");
const marked = require("marked");
const browserSync = require("browser-sync");

/**
 *01 读取 md 和 css 内容
 *02 将上述读取出来的内容替换占位符，生成一个最终需要展的 Htm 字符串
 *03 将上述的 Htm 字符写入到指定的 Html 文件中
 *04 监听 md 文档内容的变经，然后更新 htm 内容
 *05 使用 browser-sync 来实时显示Htm 内容
 */
let mdPath = path.join(__dirname, process.argv[2]);
let cssPath = path.resolve("github.css");
let htmlPath = mdPath.replace(path.extname(mdPath), ".html");

fs.watchFile(mdPath, (cur, pre) => {
  if (cur.mtime !== pre.mtime) {
    fs.readFile(mdPath, "utf-8", (err, data) => {
      let htmlStr = marked(data);
      fs.readFile(cssPath, (err, data) => {
        let retHtml = temp
          .replace("{{content}}", htmlStr)
          .replace("{{style}}", data);
        fs.writeFile(htmlPath, retHtml, (err) => {
          console.log("html 生成成功");
        });
      });
    });
  }
});

browserSync.init({
  browser: "",
  server: __dirname,
  watch: true,
  index: path.basename(htmlPath),
});

const temp = ``;
