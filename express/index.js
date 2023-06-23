// 引入 exprees
const exprees = require('express');

const cors = require('cors');

const app = exprees();

app.use(cors());

app.use(exprees.urlencoded({ extended: false }));

app.post('/tracker', (req, res) => {
  console.log(req.body);
  res.send('ok');
});

app.listen(9000, () => {
  console.log('正在监听: http://127.0.0.1:9000');
});