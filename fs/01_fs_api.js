const fs = require("fs");
const path = require("path");

// fs.readFile(path.resolve("fs/data.json"), "utf-8", (err, data) => {
//   console.log("🚀 ~ file: 01_fs_api.js:5 ~ fs.readFile ~ err:", err);
//   if (!err) {
//     console.log("🚀 ~ file: 01_fs_api.js:5 ~ fs.readFile ~ data:", data);
//   }
// });

// fs.writeFile(
//   "./fs/data.txt",
//   "hello nodeJS",
//   {
//     mode: 438,
//     flag: "r+",
//     encoding: "utf-8",
//   },
//   (err) => {
//     if (!err) {
//       fs.readFile("./fs/data.txt", "utf-8", (err, res) => {
//         console.log("🚀 ~ file: 01_fs_api.js:15 ~ fs.readFile ~ res:", res);
//       });
//     }
//   }
// );

// fs.appendFile("./fs/data.txt", "\n热爱学习666", (err, res) => {
//   if (err) {
//     console.log("🚀 ~ file: 01_fs_api.js:38 ~ err:", err);
//   }
//   console.log("🚀 ~ file: 01_fs_api.js:37 ~ res:", res);
// });

// fs.copyFile(
//   path.resolve("./fs/data.txt"),
//   path.resolve("./fs/test.txt"),
//   () => {
//     console.log("拷贝成功");
//   }
// );

fs.watchFile(
  path.resolve("./fs/data.txt"),
  {
    interval: 100,
  },
  (cur, pre) => {
    if (pre.mtime !== cur.mtime) {
      console.log("文件被修改了");
      fs.unwatchFile(path.resolve("./fs/data.txt"));
    }
  }
);
