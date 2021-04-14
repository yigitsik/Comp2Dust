const express = require('express');
const app = express();
const port = 3000;


app.get("/upload.jpg",function (request,response) {
    response.sendFile(__dirname+"/upload.jpg");
})

app.get("/",function (request,response) {
    response.sendFile(__dirname+"/index.html");
})

app.get("/index.js",function (request,response) {
    response.sendFile(__dirname+"/index.js");
})

app.get("/node_modules/compress-js/dist/compressjs.js",function (request,response) {
    response.sendFile(__dirname+"/node_modules/compress-js/dist/compressjs.js");
})

app.listen(process.env.PORT || port, function (){
    console.log(`Connecting to pOrt`);
})

