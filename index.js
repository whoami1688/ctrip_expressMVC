
/*
 *虽然要求很简单
 * 但稍微抽取了一下MVC 
*/
//express使用的是8000端口，nest使用3000端口
const express = require('express')
const app = express()
const {router} = require("./router/router")
const port = 8000
app.use(router)
app.listen(port,()=>{
    console.log("启动成功");
})