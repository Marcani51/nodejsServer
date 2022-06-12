const express = require('express');
const app = express();
const path = require('path');
//////// encode apapun model req
app.use(express.urlencoded({ extended: true }))

app.use(express.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//fake DB

const comments=[
  {
    username:'denta',
    comment:'test'
  },
  {
    username:'user1',
    comment:'test1'
  },{
    username:'user2',
    comment:'test2'
  },{
    username:'user3',
    comment:'test3'
  },{
    username:'user4',
    comment:'test4'
  },
]

app.get('/comments',(req,res)=>{
  res.render('comments/index',{comments});
})

app.get('/tacos',(req,res)=>{
  res.send("get /tacos response");
})
app.post('/tacos',(req,res)=>{
  console.log(req.body);
  const {meat,qty}= req.body;

  res.send(`Ok, there is the order ${qty} ${meat} tacos`);
})
app.listen(3000, ()=>{
  console.log("on port 3000");
})

