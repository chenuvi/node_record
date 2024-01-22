// 同步创建目录
const fs = require("fs");
const path = require("path");
/**
 * 同步地测试用户对 path 指定的文件或目录的权限。
 * mode 参数是可选的整数，指定要执行的可访问性检查。
 * mode 应该是值 fs.constants.F_OK 或由 fs.constants.R_OK、
 * fs.constants.W_OK 和 fs.constants.X_OK 中的任何一个
 * （例如 fs.constants.W_OK | fs.constants.R_OK）的按位或组成的掩码。
 *  查看文件访问的常量以获取可能的 mode 值。
 * 如果任何可访问性检查失败，将抛出 Error。 否则，该方法将返回 undefined。
 */

function makeDirSync(dirPath) {
  let items = dirPath.split(path.sep);
  for (let i = 1; i <= items.length; i++) {
    let dir = items.slice(0, i).join(path.sep);
    try {
      fs.accessSync(dir);
    } catch (error) {
      fs.mkdirSync(dir);
    }
  }
}

makeDirSync("a/b/c");
