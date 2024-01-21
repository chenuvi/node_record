const net = require("net"),
  users = {};
let count = 0;

const server = net.createServer((conn) => {
  conn.setEncoding("utf8");
  console.log("新用户接入！");
  let nickname;
  count++; //记录连接终端数
  conn.on("data", (data) => {
    data = data.replace("\r\n", ""); //删除回车符
    console.log("data :", data);
    if (!nickname) {
      if (users[data]) {
        conn.write("\033[93m>昵称已经存在,请重试:\033[39m");
        return;
      } else {
        nickname = data;
        users[nickname] = conn;
        for (let i in users) {
          users[i].write("\033[90m >" + nickname + " 加入聊天室 \033[39m\r\n");
        }
      }
    } else {
      for (let i in users) {
        if (i !== nickname) {
          users[i].write(
            "\033[94m> " + nickname + " 说: \033[39m" + data + "\r\n"
          );
        }
      }
    }
  });
  conn.on("close", () => {
    count--;
    // 给其他用户发送当前人退出信息
    for (let i in users) {
      if (i !== nickname) {
        console.log(i + " --- " + nickname);
        console.log(i == nickname);
        users[i].write("\033[94m> " + nickname + " 退出聊天室。 \033[39m\r\n");
      }
    }
    //删除退出昵称
    delete users[nickname];
  });
  conn.write(`
  欢迎来到node聊天室~~~
  共有' + ${count} + '用户在线.'
  请输入您的昵称 :
  `);
});

server.listen(4000, (conn) => {
  console.log("服务监听 *:4000");
});
