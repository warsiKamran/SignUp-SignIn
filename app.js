const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");          //The request module uses the http module and adds a lot of sugar to make it easier to digest: A lot of common cases can be handled with just a tiny bit of code, it supports piping request data, forwarding requests to a different server, etc.

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));                 //if we want to show images as well as css when calling port 3000
                                                  //we also have to specify the name of the folder here it is "public"

app.get("/", function(req,res){
    res.sendFile(__dirname + "/signup.html");
});

app.listen("3000", function(){
    console.log("server started at port 3000");
});