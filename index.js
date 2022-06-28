const http = require("http");

const server = http.createServer(function(req,res){
    res.write("<h1>Hello world!! this is Firsts</h1>")
    res.write("It's a normal text line")
    
    res.write(JSON.stringify({Name :"Sajal"}))
    res.end("<h3>Closing</h3>");
})

server.listen(5000);
