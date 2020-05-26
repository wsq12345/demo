const express = require('express');
const app=express();
const bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false})); //body-parser获取表单数据

app.all("*", function(req, res, next) { //跨域
    if (!req.get("Origin")) return next();
    // use "*" here to accept any origin
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET,POST");//   res.set("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
    // res.set('Access-Control-Allow-Max-Age', 3600);
    if ("OPTIONS" === req.method) return res.send(200);
    next();
 });

app.post('/login',async(req,res)=>{
    let username=req.body.username;
    let password=req.body.password;
    if(username=="admin"&&password=="123456")
        res.send({
            msg:'登录成功'
        })
    else
        res.status(403).send({
            msg:'用户名或密码错误'
        })
})
app.get('/userList',async(req,res)=>{
    var data=[
        {Id:'a1000',name:'张三',age:19,key:1},
        {Id:'a1001',name:'李四',age:29,key:2},
        {Id:'a1002',name:'王五',age:21,key:3},
        {Id:'a1003',name:'李大',age:14,key:4},
        {Id:'a1004',name:'刘三',age:12,key:5},
        {Id:'a1005',name:'黄三',age:22,key:6},
    ]
    res.send(data);
})

app.get('/detail',async(req,res)=>{
    var data=[
        {Id:'a1000',name:'张三',age:19,email:'190203@qq.com',phone:"18888888888",key:1},
        {Id:'a1001',name:'李四',age:29,email:'190203@163.com',phone:"18888882131",key:2},
        {Id:'a1002',name:'王五',age:21,email:'190203@126.com',phone:"18888887777",key:3},
        {Id:'a1003',name:'李大',age:14,email:'190203@outlook.com',phone:"18888888888",key:4},
    ]
    res.send(data);
})

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})