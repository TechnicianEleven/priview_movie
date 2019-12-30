const koa = require('koa')
const app = new koa()
const views = require('koa-views')
const {resolve} = require('path')
// 除了需要安装koa-views还需要安装pug
app.use(views(resolve(__dirname,'./views'),{
  extension: 'pug'
}))
app.use(async (ctx, next)=> {
  // ctx.render会把pug解析成str返回
  await ctx.render('index',{
    you: 'Luke',
    me: 'SHUNdai'
  })
})
app.listen(3000)