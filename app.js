// Create two middlewares one should be applicable to all the routes present in backend application is containing and other should be applicable to any 2 specific routes.

const express = require("express");
const app =express();


// Middleware: Middleware are like any general functions which takes in three parameters as request, response and next function.


const middleware1= (req, res, next)=>{
    console.log("Middleware 1");
    next();
}

// next() function is very important, after the end of each middleware we should execute next function so that the program execution can move either to next middleware or to main route, if this function is not added then execution will not move forward.


app.get("/", middleware1,(req, res)=>{
    res.send("Main page with middleware1")
});

const middleware2 = (req, res, next)=>{
    console.log("Middleware 2");
    next();
}

// application level middleware.

app.use(middleware2);


// Create routes.

app.get("/page1", middleware1,(req, res)=>{
    res.send("Page 1 with middleware1 and middleware2")
});

app.get("/page2",(req, res)=>{
    res.send("Main page with middleware1")
});
app.get("/page3",(req, res)=>{
    res.send("Main page with middleware1")
});
app.get("/page3",(req, res)=>{
    res.send("Main page with middleware1")
});
app.get("/page4",(req, res)=>{
    res.send("Main page with middleware1")
});

app.listen(3000,()=>{
    console.log("Server is Running");
});