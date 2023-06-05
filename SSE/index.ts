import express from "express";
import fs from "fs";
const app = express();

app.get('/api/sse', (req, res) => {
  // 允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  // 设置sse请求头
  res.writeHead(200, {
    'Content-Type': 'text/event-stream', // 核心代码设置对应的请求头信息
  });

  // 读取文件内容
  const txt = fs.readFileSync('./index.txt', 'utf-8');
  // 将文件内容转换为数组
  const arr = txt.split('');
  let current = 0;
  // 每隔300ms发送一次数据
  let timer = setInterval(() => {
    if (current < arr.length) {
      res.write(`data: ${arr[current]}\n\n`);
      current++;
    } else {
      clearInterval(timer);
    }
  }, 100)
})

app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});