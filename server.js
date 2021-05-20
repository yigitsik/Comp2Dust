const fs = require('fs');
const express = require('express');
const multer = require('multer');
const zipper = require("zip-local");
const compress_images = require("compress-images");
const {compress} = require('compress-images/promise');
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json(), bodyParser.urlencoded({
  extended: true
})); //This part lets you reach the html elements


app.use(express.static(path.join(__dirname, 'uploadedFiles')));
app.use(express.static(path.join(__dirname, 'compressedImages')));

app.use(session({
  secret: 'nooseCallingMe',
  resave: false,
  saveUninitialized: true
}));

// Set destination for Multer
var storage = multer.diskStorage({

  destination: function (req, file, callback) {
    var dir = __dirname+"/uploadedFiles/"+req.sessionID;

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

  let form = req.body;


  const processImages = async (onProgress) => {
    const result = await compress({
      source: "./uploadedFiles/"+req.sessionID+"/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}",
      destination: './compressedImages/'+req.sessionID+"/",
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

  const files = fs.readdirSync(__dirname+"/compressedImages/"+req.sessionID)

  for (let file of files) {

  fs.renameSync(__dirname+"/compressedImages/"+req.sessionID+"/"+file, __dirname+'/compressedImages/'+req.sessionID+'/compressed-'+req.body.compIndex+"-"+file, () => {
  console.log("\nFile Renamed!\n");
  });

  } 

  res.send("renamed")
  
})

app.get("/download", function (req, res) {

console.log("download request")

zipper.sync.zip(__dirname+"/compressedImages/"+req.sessionID+"/").compress().save(req.sessionID+".zip");

res.download(__dirname +"/"+req.sessionID+'.zip','images.zip');

})

app.get("/reset", function (req, res) {

  const odir = __dirname+'/compressedImages/'+req.sessionID
  const idir = __dirname+'/uploadedFiles/'+req.sessionID

  if (fs.existsSync(__dirname+"/compressedImages/"+req.sessionID)) { //Create a folder if not exists

    const ofiles = fs.readdirSync(odir)

    for (let ofile of ofiles) {

      ofile = __dirname+'/compressedImages/'+req.sessionID+"/"+ ofile;
  
      fs.unlink(ofile, (err) => {
        if (err) {
          throw err;
        }
  
        console.log(ofile+" is deleted.");
      });
  
    }

  }
  if (fs.existsSync(__dirname+"/uploadedFiles/"+req.sessionID)) { //Create a folder if not exists

    const ifiles = fs.readdirSync(idir)

    for (let ifile of ifiles) {

      ifile = __dirname+'/uploadedFiles/'+req.sessionID+"/"+ ifile;
  
      fs.unlink(ifile, (err) => {
        if (err) {
          throw err;
        }
        console.log(ifile + " is deleted.");
      });
  
    }

  }

  res.send(req.sessionID);

})

app.get("/deleteOutput", function (req, res) {

  const odir = __dirname+'/compressedImages/'+req.sessionID

  if (fs.existsSync(__dirname+"/compressedImages"+req.sessionID)) {

    const ofiles = fs.readdirSync(odir)

    for (let ofile of ofiles) {

      ofile = __dirname+'/compressedImages/'+req.sessionID+"/"+ ofile;
  
      fs.unlink(ofile, (err) => {
        if (err) {
          throw err;
        }
  
        console.log(ofile + " is deleted.");
      });
  
    }

  }


  if (fs.existsSync(__dirname+"/"+req.sessionID+".zip")) {
  
    fs.unlink(__dirname+"/"+req.sessionID+".zip", (err) => {
      if (err) {
        throw err;
      }
  
      console.log("Zip is deleted.")
    })
  }
  
  res.send("succesfully deleted")

})


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));