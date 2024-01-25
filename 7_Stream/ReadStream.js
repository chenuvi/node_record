const fs = require("fs");

const EventEmitter = require("events");

class MyReadStream extends EventEmitter {
  constructor(path, options = {}) {
    super();
  }

  open() {}

  read() {}

  close() {}

  pipe(ws) {
    this.on("data", (data) => {
      let flag = ws.write(data);
      if (!flag) {
        this.pause();
      }
      ws.on("drain", () => {
        this.resume();
      });
    });
  }
}

module.exports = MyReadStream;
