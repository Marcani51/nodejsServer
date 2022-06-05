const express = require("express");
const port="3000"
const app = express()
console.dir(app)
app.use((req,res)=>{
    console.log("new request")
    res.send("<input type='text' />");
})
app.listen(port,()=>{
    console.log("listen on port 3000");
})