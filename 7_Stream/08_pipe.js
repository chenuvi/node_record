const fs = require("fs");

const MyReadStream = require("./hand/MyReadStream");

// const rs = fs.createReadStream("./test.txt", {
//   highWaterMark: 4,
// });

// const ws = fs.createWriteStream("./f10.txt", {
//   highWaterMark: 1,
// });

// rs.pipe(ws);

const rs = new MyReadStream("./test.txt");
const ws = fs.createWriteStream("f11.txt");
rs.pipe(ws);
