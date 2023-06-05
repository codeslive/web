import express from 'express';
import multer from 'multer';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 定义文件上传配置
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

// 后端 post 请求
app.post('/api/post', (req, res) => {
  console.log(req.body.name);
  res.json({ code: 200, msg: 'success' })
});

// 上传文件
app.post('/api/upload', upload.single('file'), (req: any, res) => {
  console.log(req.file);
  res.json({ code: 200, msg: 'success' })
});

// 监听 
app.listen(3000, () => {
  console.log('server is running at port 3000');
});


