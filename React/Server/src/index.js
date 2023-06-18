// 引入 koa
const koa = require("koa");

const koaApp = new koa();

koaApp.listen(8888, () => {
  console.log("koa started at 8888");
})

function delay (duration = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, duration)
  })
}


koaApp.use(async (ctx) => {
  const { path } = ctx;
  if (path === "/student") {
    const jsonData = require("./student.json");
    console.log("jsonData", jsonData);
    await delay(2000);
    ctx.response.body = jsonData;
  }
})
