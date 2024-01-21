const fs = require("fs");

const rs = fs.createReadStream("../test.txt");
const ws = fs.createWriteStream("./text1.txt");
rs.pipe(ws);
