// 导入 express
const express = require('express');
// 导入 cors
const cors = require('cors');
// 导入 jsonwebtoken commonjs规范
const jwt = require('jsonwebtoken');
// 导入Request Response 类型
import { Request, Response } from 'express';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let Key = 'XKZS';

const user = {
  id: 1,
  username: 'admin',
  password: '123456'
}

// 登录返回前端 token 用于授权
app.post('/api/login', (req: Request, res: Response) => {
  // 如果账号密码错误, 返回
  if (req.body.username !== user.username && req.body.password !== user.password) {
    return res.status(403).json({
      message: '账号或密码错误'
    });
  }

  // 生成 token
  res.json({
    message: '登录成功',
    token: jwt.sign({ id: user.id }, Key, { expiresIn: '1h' }),
    code: 200
  })

});

// 列表接口但是必须是授权状态才能访问 否则返回 403
app.get('/api/list', (req: Request, res: Response) => {
  // 获取前端传递过来的 token
  const token = req.headers.authorization as string; // 前端会把 token 放在请求头中 authorization 字段中
  jwt.verify(token, Key,(err:any, decode:any)=>{
    if(err){
      return res.status(403).json({
        message: '无权限访问'
      });
    }
    res.json({
      message: 'ok',
      list: [
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
        { id: 3, name: '王五' },
      ]
    })
  })

});

// 监听端口
app.listen(9000, () => {
  console.log('服务器启动成功, 地址是: http://localhost:9000');
});


