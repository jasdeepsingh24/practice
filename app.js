const express=require('express');
const app=express();
const path=require('path');



app.get('/',(req,res)=>{
    // res.status(200).send('<h1>Home Page</h1>');
    res.status(200);
    res.sendFile(path.join(__dirname,'./index.html'));
});

app.get('/about',(req,res)=>{
    res.status(200).send('<h1>About Page</h1>');
})

app.all('*',(req,res)=>{
    res.status(404);
    res.send('<h1>Error 404</h1>');
});

app.listen(5000,()=>{
     console.log('listening on port 5000');
});































// const EventEmitter=require('events');
// const customEmitter=new EventEmitter();

// customEmitter.on('response',(name,age)=>{
//     console.log(`Name: ${name} | Age: ${age}`);
// });

// customEmitter.on('response',()=>{
//     console.log('hi2');
// });
// customEmitter.emit('response' ,'jasdeep','20');

// const http=require('http');
// const {readFileSync} =require('fs');

// //get all fiels
// const homepage=readFileSync('./index.html');

// const server=http.createServer((req,res)=>{
//     if(req.url==='/')
//     {
//         res.writeHead(200,{'content-type':'text/html'}); 
//         res.write(homepage);
//         res.end();
//     }
//     else if(req.url==='/about')
//     {
//         res.writeHead(200,{'content-type':'text/html'});
//         res.write('<h1>About Page</h1>');
//         res.end();
//     }
//     else{
//         res.writeHead(404,{'content-type':'text/html'});
//         res.write('<h1>Error 404 Page Not FOund</h1>');
//         res.end();
//     }
// });

// server.listen(5000);
 



