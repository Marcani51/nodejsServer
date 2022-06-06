const express = require("express");
const port="3000"
const app = express()

// app.use((req,res)=>{
//     console.log("new request")
//     res.send("<input type='text' />");
// })

app.get('/',(req,res)=>{
    res.send("<h1>welcome to home page</h1>");
})

app.get('/cats',(req,res)=>{
    res.send("Meow");
})
app.get('/dogs',(req,res)=>{
    res.send("Woof");
})

app.post('/cats',(req,res)=>{
    res.send("this post method")
})

////for route with params
app.get('/r/:subPage/:postId',(req,res)=>{
    console.log(req.params);
    const {subPage,postId}= req.params;
    res.send(`<h1> browsing the ${subPage} on id number : ${postId}</h1>`);

})

///query string
app.get('/search',(req,res)=>{
    console.log(req.query);
    const{q}= req.query;
    if(!q){
        res.send("wrong params");
    }
    res.send(`<h1>search result ${q}`);
})
app.get('*',(req,res)=>{
    res.send("Wrong route");
})////untuk match apapun

app.listen(port,()=>{
    console.log("listen on port 3000");
})