const express=require('express');
const app=express();
const {products}=require('./data');
const logger=require('./logger');
const authorize=require('./authorize');

app.use('/api',[authorize,logger]);

app.get('/',(req,res)=>{
    res.send('Home');
});

app.get('/api/products',(req,res)=>{
    const newProduct=products.map((product)=>{
        const {Id,Title,Url}=product;
        return {Id,Title,Url};
    });
    console.log(req.user);
    res.json(newProduct);
});

app.get('/api/products/:productId',(req,res)=>{
    console.log(req.params);
    const singleProduct=products.find((product)=>product.Id===req.params.productId);

    if(!singleProduct)
    {
        return res.status(404).send('Product Does Not Exist');
    }
    console.log(singleProduct);
    res.json(singleProduct);
});
app.listen(5000,()=>{
    console.log('server on port 5000');
});

app.get('/api/v1/query',(req,res)=>{
    console.log(req.query);
    const {search,limit}=req.query;
    let sortedProducts=[...products];

    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.Id.startsWith(search);
        });
    }
    if(limit)
    {
        sortedProducts=sortedProducts.slice(0,Number(limit));
    }
    if(sortedProducts.length<1)
        res.status(200).json({sucess:true,data:'hi'});
    console.log(sortedProducts);
    res.status(200).json(sortedProducts);
});



