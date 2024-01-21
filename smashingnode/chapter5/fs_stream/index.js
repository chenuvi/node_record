"use strict";
const fs = require("fs");
const stream = fs.createReadStream("msg.txt", "utf-8");
stream.on("data", (chunk) => {
  console.log("data chunk :", chunk);
});
stream.on("end", (chunk) => {
  console.log("end chunk :", chunk);
});
