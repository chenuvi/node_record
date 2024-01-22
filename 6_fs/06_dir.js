const fs = require("fs");
const tool = require("../utils/tool.js");
// 1. access
// fs.access("a.txt", (err) => {
//   if (err) {
//     return console.log("🚀 ~ file: 06_dir.js:6 ~ fs.access ~ err:", err);
//   }
//   console.log("有操作权限");
// });

// 2. start
// fs.stat("a.txt", (err, stateObj) => {
//   console.log("🚀 ~ file: 06_dir.js:13 ~ fs.stat ~ stateObj:", stateObj);
//   // stateObj.isFile()
//   console.log(
//     "🚀 ~ file: 06_dir.js:15 ~ fs.stat ~ stateObj.isFile():",
//     stateObj.isFile()
//   );
//   // stateObj.isDirectory()
//   console.log(
//     "🚀 ~ file: 06_dir.js:17 ~ fs.stat ~ stateObj.isDirectory():",
//     stateObj.isDirectory()
//   );
// });

// 3. mkdir
// fs.mkdir(
//   "a/b/c",
//   {
//     recursive: true,
//   },
//   (err) => {
//     if (err) {
//       return console.log("🚀 ~ file: 06_dir.js:29 ~ fs.mkdir ~ err:", err);
//     }
//     console.log("创建成功");
//   }
// );

// 4. rmdir
fs.rmdir(
  "a",
  {
    recursive: true,
  },
  (err) => {
    if (err) {
      return console.log("🚀 ~ file: 06_dir.js:43 ~ fs.rmdir ~ err:", err);
    }
    console.log("删除成功");
  }
);

// 5. readdir
fs.readdir("a", (err, files) => {
  if (err) {
    return tool.returnErr(err);
  }
  console.log("🚀 ~ file: 06_dir.js:56 ~ fs.readdir ~ files:", files);
});

// 6. unlink
fs.unlink("a/a.txt", (err) => {
  if (!err) {
    console.log("删除成功");
  }
});
