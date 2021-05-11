const fs = require('fs');
const express = require('express');
const multer = require('multer');
const zipper = require("zip-local");
const compress_images = require("compress-images");

const app = express();
const port = process.env.PORT || 5000;



// Set destination for Multer
var storage = multer.diskStorage({

  destination: function (req,file,callback)
  {
    var dir = "./uploadedFiles";

    if(!fs.existsSync(dir)){//Create a folder if not exists
      fs.mkdirSync(dir);
    }
    callback(null,dir);
  },

  filename: function (req, file, callback){
    callback(null, file.originalname);
  }

});
// Set destination for Multer

var upload = multer({storage:storage}).array('file',12);  // Set size for upload

app.post("/upload",(req,res) => {

  console.log(req.file)
  console.log("/upload")

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
        return res.status(500).json(err)
    } else if (err) {
        return res.status(500).json(err)
    }
return res.status(200).send(req.file)

})
                                                 
});

app.post("/compSubmit",(req,res) => {

  console.log("compSubmit!")
  console.log(req.body);

INPUT_path_to_your_images = "./uploadedFiles/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}";
OUTPUT_path = "./build/images/";

compress_images(INPUT_path_to_your_images, OUTPUT_path, { compress_force: false, statistic: true, autoupdate: true }, false,
                { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
                { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
                { svg: { engine: "svgo", command: "--multipass" } },
                { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
  function (error, completed, statistic) {
    console.log("-------------");
    console.log(error);
    console.log(completed);
    console.log(statistic);
    console.log("-------------");
  }
);

                                                 
});


    app.get("/",function (req,res)
{
    console.log("Get Request on server.js !");
    console.log(req.body)
})


app.listen(port, () => console.log(`Listening on port ${port}`));