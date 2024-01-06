// 获取路径中的基础名称

const path = require("path");
// console.log("🚀 ~ file: 06_path.js:2 ~ __filename:", __filename);
// console.log("🚀 ~ file: 06_path.js:3 ~ path.basename(__filename):", path.basename(__filename, '.js'))
// console.log("🚀 ~ file: 06_path.js:3 ~ path.basename(__filename):", path.basename(__filename, '.ts'))

/**
 * 1. path.basename 取路径中的基础名称
 * 01 返回的就是接收路径当中的最后一部分
 * 02 第二个参数表示扩展名，如果说没有设置则返回完整的文件名称带后缀
 * 03 第二个参数做为后缀时，如果没有在当前路径中被匹配到，那么就会忽略
 * 04 处理目录路径的时候如果说，结尾处有路径分割符，则也会被忽略掉
 */

/* 2.  path.dirname 获取路径目录名 (路径）
 *
 * 01 返回路径中最后一个部分的上一层目录所在路径
 */
// path.dirname(__filename)
// console.log(
//   "🚀 ~ file: 06_path.js:18 ~ path.dirname(__filename):",
//   path.dirname(__filename)
// );
// path.dirname('/a/b/c')
// console.log(
//   "🚀 ~ file: 06_path.js:19 ~ path.dirname('/a/b/c'):",
//   path.dirname("/a/b/c")
// );
// path.dirname('/a/b/c/')
// console.log(
//   "🚀 ~ file: 06_path.js:21 ~ path.dirname('/a/b/c/'):",
//   path.dirname("/a/b/c/")
// );

/* 3.  path.extname 获取路径拓展名
 *
 * 返回 path路径中相应文件的后缀名
 * 如果 path 路径当中存在多个点，它匹配的是最后一个点，到结尾的内容
//  */
// console.log(path.extname(__filename));
// console.log(path.extname(`/a/b`));
// console.log(path.extname(`/a/b/index.html.js.css`));
// console.log(path.extname(`/a/b/index.html.js.css.`));

// 4.
// const obj = path.parse(`/a/b/index.html.js.css`)
// const obj = path.parse(`./a/b/index.html.js.css`)
// console.log("🚀 ~ file: 06_path.js:49 ~ obj:", obj)

// 5. path.format
// const obj = path.format(path.parse(`./a/b/c/`));
// console.log("🚀 ~ file: 06_path.js:55 ~ obj:", obj)

// 6. path.isAbsolute
// console.log("🚀 ~ file: 06_path.js:57 ~ path.isAbsolute('foo'):", path.isAbsolute('foo'))
// console.log("🚀 ~ file: 06_path.js:57 ~ path.isAbsolute('/foo'):", path.isAbsolute('/foo'))
// console.log("🚀 ~ file: 06_path.js:57 ~ path.isAbsolute('///foo'):", path.isAbsolute('///foo'))

// 7. 拼接路径
// console.log("🚀 ~ file: 06_path.js:62 ~ path.join('/a/b', 'c', 'index.html'):", path.join('/a/b', 'c', 'index.html'))

// path.join('/a/b', '../', 'c','a.js')
// console.log("🚀 ~ file: 06_path.js:64 ~ path.join('/a/b', '../', 'c','a.js'):", path.join('/a/b', '../', 'c','a.js'))

// 8. 规范化路径
// console.log(path.normalize('a//\/b/c../d'))

// 9. 绝对路径
path.resolve()
