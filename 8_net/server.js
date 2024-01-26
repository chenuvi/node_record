const net = require("net");

const server = net.createServer();

const PORT = 1234,
  HOST = "localhost";
server.listen(PORT, HOST);

server.on("listening", () => {
  `服务端已经开启在 ${HOST}: ${PORT}`;
});

server.on("connection", (socket) => {
  socket.on("data", (chunk) => {
    const msg = chunk.toString();
    console.log("msg :", msg);

    socket.write(Buffer.from("您好" + msg));
  });
});

server.on("close", () => {
  console.log("服务端关闭了");
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log("地址正在被使用");
  } else {
    console.log(err);
  }
});
