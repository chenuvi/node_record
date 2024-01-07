const fs = require("fs");

let buf = Buffer.alloc(10);
// fs.open("a.txt", "r", (err, rfd) => {
//   fs.open("b.txt", "w", (err, wfd) => {
//     // 从打开文件读取数据
//     fs.read(rfd, buf, 0, 10, 0, (err, readBytes, buffer) => {
//       fs.write(wfd, buf, 0, 10, 0, (err, buffer) => {
//         console.log("写入成功");
//       });
//     });
//   });
// });

const BUFFER_SIZE = buf.length;
let readOffset = 0;
fs.open("a.txt", "r", (err, rfd) => {
  // 从打开文件读取数据
  fs.open("b.txt", "w", (err, wfd) => {
    function next() {
      fs.read(
        rfd,
        buf,
        0,
        BUFFER_SIZE,
        readOffset,
        (err, readBytes, buffer) => {
          if (!readBytes) {
            // 如果条件成立，说明内容已经读取完毕
            fs.close(rfd, () => {});
            fs.close(wfd, () => {});
            console.log("拷贝成功");
            return;
          }
          readOffset += readBytes;
          fs.write(wfd, buf, 0, readBytes, (err, buffer) => {
            next();
          });
        }
      );
    }
    next();
  });
});
