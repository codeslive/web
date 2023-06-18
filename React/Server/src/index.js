// 引入 koa
const koa = require("koa");

const koaApp = new koa();

koaApp.listen(8888, () => {
  console.log("koa started at 8888");
})

koaApp.use((ctx) => {
  const { path } = ctx;
  if (path === "/student") {
    const jsonData = require("./student.json");
    console.log("jsonData", jsonData);
    ctx.response.body = jsonData;
  }
})
