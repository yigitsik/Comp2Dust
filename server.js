const fs = require('fs');
const express = require('express');
const multer = require('multer');
const zipper = require("zip-local");
const compress_images = require("compress-images");
const {compress} = require('compress-images/promise');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json(), bodyParser.urlencoded({
  extended: true
})); //This part lets you reach the html elements


app.use(express.static("compressedImages"));
app.use(express.static("uploadedFiles"));


// Set destination for Multer
var storage = multer.diskStorage({

  destination: function (req, file, callback) {
    var dir = "./uploadedFiles";

    if (!fs.existsSync(dir)) { //Create a folder if not exists
      fs.mkdirSync(dir);
    }
    callback(null, dir);
  },

  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }

});
// Set destination for Multer

var upload = multer({
  storage: storage
}).array('file', 12); // Set size for upload


// This triggers on user input
app.post("/upload", (req, res) => {

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
// This triggers on user input


//This triggers on submit button clicked
app.post("/compSubmit", (req, res) => {

  console.log("compSubmit!")
  console.log(req.body);

  let form = req.body;


  const processImages = async (onProgress) => {
    const result = await compress({
      source: "./uploadedFiles/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}",
      destination: "./compressedImages/",
      onProgress, 
      enginesSetup: {
        jpg: {
          engine: form.JPG,
          command: ["-quality", form.rate]
        },
        png: {
          engine: form.PNG,
          command: ["--quality=20-50", "-o"]
        },
        svg: {
          engine: form.SVG,
          command: "--multipass"
        },
        gif: {
          engine: form.GIF,
          command: ["--colors", "64", "--use-col=web"]
        },
      }
    });

    const {statistics, errors} = result;
    // statistics - all processed images list
    // errors - all errros happened list
    
      res.send(result)
    
  };

  processImages((error, statistic, completed) => {
    if (error) {
        console.log('Error happen while processing file');
        console.log(error);
        return;
    }
    
    console.log('Sucefully processed file');

    console.log(statistic)
});

 

});
//This triggers on submit button clicked


app.post("/rename",function (req,res)
{


  const files = fs.readdirSync("./compressedImages")

  for (let file of files) {

  fs.renameSync("./compressedImages/"+file, './compressedImages/compressed-'+req.body.compIndex+"-"+file, () => {
  console.log("\nFile Renamed!\n");
  });

  }

  res.send("renamed")
  
})


app.get("/reset", function (req, res) {

  const odir = './compressedImages/'
  const idir = './uploadedFiles/'
  const ifiles = fs.readdirSync(idir)
  const ofiles = fs.readdirSync(odir)

  for (let ofile of ofiles) {

    ofile = './compressedImages/' + ofile;

    fs.unlink(ofile, (err) => {
      if (err) {
        throw err;
      }

      console.log(ofile + " is deleted.");
    });

  }

  for (let ifile of ifiles) {

    ifile = './uploadedFiles/' + ifile;

    fs.unlink(ifile, (err) => {
      if (err) {
        throw err;
      }
      console.log(ifile + " is deleted.");
    });

  }

  res.send("succesfully deleted")

})

app.get("/deleteOutput", function (req, res) {

  const odir = './compressedImages/'
  const ofiles = fs.readdirSync(odir)

  for (let ofile of ofiles) {

    ofile = './compressedImages/' + ofile;

    fs.unlink(ofile, (err) => {
      if (err) {
        throw err;
      }

      console.log(ofile + " is deleted.");
    });

  }

  res.send("succesfully deleted")

})


app.listen(port, () => console.log(`Listening on port ${port}`));