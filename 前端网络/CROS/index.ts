import express from 'express';
const app = express();
// jsonp
app.get('/api/jsonp', (req, res) => {
  const { callback } = req.query;
  res.send(`${callback}('跨域成功-jsonp')`);
});
// 纯前端
app.get('/api/json', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({ msg: '跨域成功-纯前端代理' });
});

// 监听端口
app.listen(3000, () => {
  console.log('server is running at http://localhost:3000');
});
