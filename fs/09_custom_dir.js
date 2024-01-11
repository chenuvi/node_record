const fs = require("fs");
const path = require("path");

/**
 * 需求:自定义一个函数,接收一个路径,然后执行删除
 * 01判断当前传入的路径是否为一个文件,直接删除当前文件即可
 * 02如果当前传入的是一个目录,我们需要继续读取目录中的内容,然后再执行删除操作
 * 03将删除行为定义成一个函数,然后通过递归的方式进行复用
 * 04将当前的名称拼接成在删除时可使用的路径
 */

function myRmdir(dirPath, cb) {
  fs.stat(dirPath, (err, stateObj) => {
    if (stateObj.isDirectory()) {
      fs.readdir(dirPath, (err, files) => {
        let dirs = files.map((dir) => {
          return path.join(dirPath, dir);
        });
        let index = 0;
        function next() {
          if (index === dirs.length) return fs.rmdir(dirPath, cb);
          let current = dirs[index++];
          myRmdir(current, next);
        }
        next();
      });
    } else {
      fs.unlink(dirPath, cb);
    }
  });
}

myRmdir("a", () => {
  console.log("删除成功");
});
