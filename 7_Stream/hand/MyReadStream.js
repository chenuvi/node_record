const fs = require("fs");
const EventEmitter = require("events");

// TODO 数据处理
class MyReadStream extends EventEmitter {
  constructor(path, options = {}) {
    super();
    this.path = path;
    this.flags = options.flags || "r";
    this.mode = options.mode || 438;
    this.start = options.start || 0;
    this.end = options.end;
    this.highWaterMark = options.highWaterMark || 64 * 1024;
    this.autoClose = options.autoClose || true;

    this.readOffset = 0;

    this.open();

    this.on("newListener", (type) => {
      // console.log("newListener type :", type);
      switch (type) {
        case "data": {
          this.read();
          break;
        }
      }
    });
  }

  open() {
    // 原生 fs open 方法打开指定位置文件
    fs.open(this.path, this.flags, this.mode, (err, fd) => {
      if (err) {
        return this.emit("error", err);
      }
      this.fd = fd;
      this.emit("open", fd);
    });
  }

  read() {
    console.log("this.fd :", this.fd);
    if (typeof this.id !== "number") {
      return this.once("open", this.read);
    }
    const buf = Buffer.alloc(this.highWaterMark);
    fs.read(
      this.fd,
      buf,
      0,
      this.highWaterMark,
      this.readOffset,
      (err, readBytes) => {
        if (readBytes) {
          this.readOffset += readBytes;
          this.emit("data", buf);
          this.read();
        } else {
        }
      }
    );
  }

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

let rs = new MyReadStream("./f1.txt");
rs.on("open", (fd) => {
  console.log("open :", `open fd: ${fd}`);
});
// rs.on("error", (error) => {
//   console.log("error :", error);
// });

rs.on("data", (chunk) => {
  console.log("chunk :", chunk);
});

rs.on("fn", () => {});

rs.on("close", () => {
  console.log("closed");
});

rs.on("end", () => {
  console.log("ended");
});
// module.exports = MyReadStream;
