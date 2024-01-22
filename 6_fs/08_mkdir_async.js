// 异步创建目录
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

// 递归方法
// function makeDir(dirPath, cb) {
//   let parts = dirPath.split(path.sep);
//   let index = 1;
//   function next() {
//     if (index > parts.length) return cb && cb();
//     let curPart = parts.slice(0, index++).join(path.sep);
//     fs.access(curPart, (err) => {
//       if (err) {
//         fs.mkdir(curPart, next);
//       } else {
//         next();
//       }
//     });
//   }
//   next();
// }

const access = promisify(fs.access),
  mkdir = promisify(fs.mkdir);

async function makeDir(dirPath, cb) {
  let parts = dirPath.split(path.sep);
  for (let index = 1; index <= parts.length; index++) {
    let curPart = parts.slice(0, index).join(path.sep);
    try {
      await access(curPart);
    } catch (error) {
      await mkdir(curPart);
    }
  }
  cb && cb();
}

makeDir("a/b/c", () => {  
  console.log("创建成功");
});
