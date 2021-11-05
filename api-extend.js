const express=require('express');
const app=express();
let {products}=require('./data');

app.use(express.json());

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
app.post('api/people',(req,res)=>{
    const {name}=req.body;
    if(!name)
    {
        return res.status(400).json({success:false, msg:'please provide name value'});
    }
    res.status(201).json({success:true,person:name});
});

app.post('/api/postman/people',(req,res)=>{
    const body=req.body;
    // if(!body.name)
    //     return res.json({success:false,msg:'plase provide name'});
    return res.json({success:true,name:body.name});
});

app.put('/api/people/:id',(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;

    console.log(id,name);

});

console.log('dev');
app.listen(5000);


