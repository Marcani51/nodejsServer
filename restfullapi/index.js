const express = require('express');
const app = express();
const path = require('path');
////untuk buat uniqe id////////////////
const {v4: uuidv4}=require('uuid');
///untuk buat method override karena untuk action selain get hrus lewat post (dele put patch)/////////
const methodOverride= require('method-override');
//////// encode apapun model req
app.use(express.urlencoded({ extended: true }))
/////untuk mencari method pada query strings
app.use(methodOverride('_method'))
app.use(express.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//fake DB

let comments=[
  {
    id: uuidv4(),
    username:'denta',
    comment:'test'
  },
  {
    id:uuidv4(),
    username:'user1',
    comment:'test1'
  },{
    id:uuidv4(),
    username:'user2',
    comment:'test2'
  },{
    id:uuidv4(),
    username:'user3',
    comment:'test3'
  },{
    id:uuidv4(),
    username:'user4',
    comment:'test4'
  },
]

app.get('/comments',(req,res)=>{
  res.render('comments/index',{comments});
})

app.get('/comments/new',(req,res)=>{
res.render('comments/new');
})

app.post('/comments',(req,res)=>{
  console.log(req.body);
  const{username,comment}= req.body;
  comments.push({username,comment, id:uuidv4()});
  ////untuk redirect ke url lain
  res.redirect('/comments');
})

app.patch('/comments/:id',(req,res)=>{
  const{id}=req.params;
  const newCommentText = req.body.comment;
  const foundComment=comments.find(c=>  c.id  === id)
  foundComment.comment=newCommentText;
  res.redirect('/comments');
})

app.get('/comments/:id',(req,res)=>{
  const {id}=req.params;
  const comment=comments.find(c=>  c.id  === id)
  res.render('comments/show',{comment});
})

app.get('/comments/:id/edit',(req,res)=>{
  const {id}=req.params;
  const comment = comments.find(c=>c.id===id);
  res.render('comments/edit',{comment})
})

app.delete('/comments/:id',(req,res)=>{
  const {id}=req.params;
  comments=comments.filter(c=>c.id !== id);
  res.redirect('/comments');
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

