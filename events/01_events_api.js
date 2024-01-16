const EventEmitter = require("events");
const ev = new EventEmitter();
ev.on("event1", () => {
  console.log("event1 ran ---2: ");
});

ev.on("event1", (a, b) => {
  console.log("event1 ran:");
  console.log("a,b :", a, b);
});

// ev.emit("event1", "a", [1]);
// ev.emit("event1", "b", [2]);

// ev.once("event1", (a, b) => {
//   console.log("event1 ran:");
//   console.log("a,b :", a, b);
// });

// ev.once("event1", () => {
//   console.log("event1 ran ---2: ");
// });
const cbFn = () => {
  console.log(" 事件1 执行了");
};

ev.emit("event1");
ev.off("event1", cbFn);
ev.emit("event1");

const fs = require('fs')

const crt = fs.createReadStream()
crt.on('data')

