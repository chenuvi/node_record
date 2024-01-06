// const fs = require("fs");
// Buffer.alloc(1000)
// console.log(process.memoryUsage());
// console.log(process.cpuUsage());

// 2.运行环境： 运行目录，node 环境，cpu 架构，用户环境，系统平台
// console.log(process.cwd());
// console.log(process.version);
// console.log(process.versions);
// console.log(process.arch);
// console.log(process.env);
// console.log(process.env.NODE_ENV);
// console.log(process.env.PATH);

// console.log(process.platform);
// if (process.platform.indexOf("win") > 0) {
//   console.log(process.env.USERPROFILE);
// } else {
//   console.log(process.env.HOME);
// }

// 3. 运行状态： 启动参数、PID、运行时间
// console.log(process.argv);
// console.log(process.argv0); // execArgv
// console.log(process.pid); // ppid
// 加载文件到运行结束消耗时间
// setTimeout(() => {
//   console.log(process.uptime());
// }, 3000);

// 4. 事件
// 只能执行 同步代码，不支持异步
// process.on("exit", (code) => {
//   console.log("🚀 ~ file: 05_process.js:exit ~ process.on ~ code:", code);
// });
// // 支持异步、同步代码，
// process.on("beforeExit", (code) => {
//   console.log("🚀 ~ file: 05_process.js:beforeExit ~ process.on ~ code:", code);
// });
// process.exit()
// // 代码写完了
// console.log("🚀 ~ file: 05_process.js:41 ~ 代码写完了:");

// 5. 标准输出 输入 错误
// console.log = function (data) {
//     process.stdout.write('----' + data + '\n')
// }
// console.log("🚀 ~ file: 05_process.js:49 ~ 11:", 11)
// console.log("🚀 ~ file: 05_process.js:51 ~ 22:", 22)

// const fs = require("fs");
// fs.createReadStream("test.txt").pipe(process.stdout);
// process.stdin.pipe(process.stdout)
process.stdin.setEncoding("utf-8");
process.stdin.on("readable", () => {
  let chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write("data: " + chunk);
  }
});
