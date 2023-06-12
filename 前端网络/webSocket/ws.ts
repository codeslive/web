// 第一步安装ws
import ws from "ws";
// 创建scoket服务 8080端口
const wss = new ws.Server({ port: 8080 }, () => {
  console.log("scoket服务启动成功8080");
});

const state = {
  HEART: 1,
  MeSSAGE: 2
}

// 监听客户端的连接
wss.on('connection', (socket) => {
  // 监听客户端的消息
  console.log("客户端连接成功");
  socket.on('message', (e) => {
    console.log(e.toString());
    // socket.send(`我是服务端 发送消息给客户端---${e.toString()}`);
    // 群发消息
    wss.clients.forEach((client) => {
      // client.send(`我是服务端 发送消息给客户端---${e.toString()}`);
      client.send(JSON.stringify({
        type: state.MeSSAGE,
        message: `我是服务端 发送消息给客户端---${e.toString()}`
      }))
    })
  })

  // socket 长时间不使用 网络波动 弱网模式 会断开连接
  // 心跳机制 进行保活 保持连接
  let heartInterval: any = null;
  const heartCheck = () => {
    // open 事件触发后 才会进入心跳机制
    if (socket.readyState !== socket.OPEN) {
      console.log("连接断开");
      clearInterval(heartInterval);
      return;
    }
    // 发送心跳
    socket.send(JSON.stringify({
      type: state.HEART,
      message: "心跳检测"
    }));
  }
  heartInterval = setInterval(heartCheck, 5000);

});