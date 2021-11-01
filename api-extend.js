const express=require('express');
const app=express();
let {products}=require('./data');

// app.use(express.static('./'))

app.post('/login',(req,res)=>{
    const {name}=req.body;
    if(name){
        return res.status(200).send('Welcome '+name);
    }
    else
        return res.status(401).send('incorrect creds');
    
});

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:products});
});

app.listen(5000);


