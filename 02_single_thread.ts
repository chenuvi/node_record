// const http = require("http");
import http from 'http'
// import { RequestListener } from 'http'
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  // console.log("🚀 ~ file: 02_single_thread.ts:5 ~ server ~ req:", req)
  res.end("server starting");
});

function sleep(time: number) {
  const sleep = Date.now() + time * 1000;
  while (Date.now() < sleep) {}
  return;
}

sleep(4);
server.listen(8080, () => {
  console.log("服务启动了");
});
