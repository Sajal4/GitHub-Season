const express = require("express");
const { reset } = require("nodemon");

const app = express();

app.get("/", function(req,res){
    res.send("Hello It's a normal text");
})

app.get("/api/main", function (req, res) {
    res.write("<h1>Express.JS</h1>")
    reset.write("<p>Express is a light weigtht web application framork to help organize your web application into in mvc architecture on server side.</p>")
    res.end()
});

app.listen(8001);