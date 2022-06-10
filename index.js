const express = require('express');
const path = require('path'); /// for accesig path globally
const port="3000"
const app = express()

//config ejs///////////////////
app.set('view engine','ejs');
///config join directory///////////////////
app.set('views', path.join(__dirname,'/views'));

/////////ejs template////////////////////////
app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/r/:subPage',(req,res)=>{
    const {subPage}= req.params;
    res.render('subPage',{subPage});
})

app.get('/rand',(req,res)=>{
    const number =Math.floor(Math.random() *10)+1;
    res.render('random',{number}); //ditransfer dalam bentu object
})
//////////////////////////////////////////
app.post('/cats',(req,res)=>{
    res.send("this post method")
})

////for route with params
app.get('/r/:subPage/:postId',(req,res)=>{
    console.log(req.params);
    const {subPage,postId}= req.params;
    res.send(`<h1> browsing the ${subPage} on id number : ${postId}</h1>`);

})

///query string/////////////
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