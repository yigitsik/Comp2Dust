const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json(),bodyParser.urlencoded({extended:true})); //This part lets you reach the html elements

// Mongoose

    const mongoose = require('mongoose');

    mongoose.connect("mongodb+srv://admin-cvlt:grind_code66@cluster0.ovzyp.mongodb.net/CompLog", {useNewUrlParser: true, useUnifiedTopology: true});

    const imageSchema = new mongoose.Schema({

        fileName: String,
        fileType: String,
        fileSize: String,
        OfileSize: String,
        OfileType: String,
        inputDimensions: String,
        outputDimensions: String,
        compRate: Number,
        status: Number
    });

    const imgData = mongoose.model("imgData", imageSchema);



app.get("/images/upload.jpg",function (request,response) {
    response.sendFile(__dirname+"/images/upload.jpg");
})

app.get("/images/header.jpg",function (request,response) {
    response.sendFile(__dirname+"/images/header.jpg");
})

app.get("/",function (request,response) {
    response.sendFile(__dirname+"/index.html");
})

app.get("/src/index.js",function (request,response) {
    response.sendFile(__dirname+"/src/index.js");
})

app.get("/node_modules/compress-js/dist/compressjs.js",function (request,response) {
    response.sendFile(__dirname+"/node_modules/compress-js/dist/compressjs.js");
})

app.post("/",function (req,res)
{

    console.log("Post Request !");
    console.log(req.body)

    const imgSample = new imgData ({

        fileName: req.body.fileName,
        fileType: req.body.file_type,
        fileSize: req.body.file_size,
        inputDimensions: req.body.iDimen,
        outputDimensions: req.body.oDimen,
        OfileSize: req.body.OfileSize,
        OfileType: req.body.OfileType,
        compRate: req.body.rate,
        status: req.body.status
    });

    imgSample.save();


})

app.listen(process.env.PORT || port, function (){
    console.log(`Connecting to pOrt`);
})

