const fs = require("fs");
let rs = fs.createReadStream("test.txt", {
  flags: "r",
  //   encoding: null, // 默认null，为 Buffer
  encoding: "utf8", // 默认null，为 Buffer
  fd: null,
  mod: 438,
  autoClose: true,
  start: 0,
  end: 20,
  highWaterMark: 4,
});

// rs.on("data", (chunk) => {
//   console.log("chunk :", chunk.toString());
//   rs.pause();
//   setTimeout(() => {
//     rs.resume();
//   }, 1000);
// });

// rs.on("readable", () => {
//   // let data = rs.read()
//   let data;
//   while ((data = rs.read(1)) !== null) {
//     console.log("🚀 ~ rs.on ~ data:", data);
//     // rs._readableState.length
//     console.log('rs._readableState.length :', rs._readableState.length);
//   }
// });

rs.on('open', (fd) => {
  console.log(fd, '文件打开了')
})

rs.on('close', () => {
  
})
