const logger=(req,res,next)=>{
    const method=req.method;
    const url=req.url;
    const time=new Date().getFullYear();
    console.log(method,url,time);
    // res.status(200).send('Test');
    next();
};

module.exports=logger;