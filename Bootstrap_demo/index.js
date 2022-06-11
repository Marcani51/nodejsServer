const express = require('express');
const path = require('path'); /// for accesing path globally
const redditData = require('./data.json');

const port="3000"
const app = express()
/////////// UNTUK INCLUDE STATIC FILE ////////////////////

//app.use(express.static('public')) ///untuk include directory lebih mudah

app.use(express.static(path.join(__dirname,'public'))) ///untuk include directory lebih mudah, dan ditambahkan join dir

/////////////////////config ejs//////////////////////////////
app.set('view engine','ejs');

///////////////////// CONFIG JOIN DIRECTORY ///////////////////
app.set('views', path.join(__dirname,'/views')); ///untuk bisa di run di directory manapun

///////////////////////// EJS TEMPLATE ////////////////////////////////////////////
app.get('/',(req,res)=>{

    res.render('home');
})

app.get('/r/:subPage',(req,res)=>{
    const {subPage}= req.params;
    const data = redditData[subPage]
    if(data){
        res.render('subPage',{...data});
    }
    else{
        res.render('notFound',{subPage})
    }
})

app.get('/rand',(req,res)=>{
    const number =Math.floor(Math.random() *10)+1;
    res.render('random',{number}); //ditransfer dalam bentu object
})

app.get('/cats',(req,res)=>{
    const cats=[
        'Blue','Marlo','Marco'
    ]
    res.render('cats',{cats});
})//////////////// For Looping

/////////////////////////////////////////////////////////////////////
app.post('/cats',(req,res)=>{
    res.send("this post method")
})

////////for route with params
app.get('/r/:subPage/:postId',(req,res)=>{
    console.log(req.params);
    const {subPage,postId}= req.params;
    res.send(`<h1> browsing the ${subPage} on id number : ${postId}</h1>`);

})

//////query string/////////////
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

///////////////// CEK KONEKSI KE PORT //////////
app.listen(port,()=>{
    console.log("listen on port 3000");
})