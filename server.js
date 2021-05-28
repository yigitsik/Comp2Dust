const fs = require('fs');
const express = require('express');
const multer = require('multer');
const zipper = require("zip-local");
const {compress} = require('compress-images/promise');
const compress_images = require("compress-images");
const bodyParser = require('body-parser');
const path = require('path');
var session = require('express-session');
const mongoose = require('mongoose');

const app = express();              //set up express
const port = process.env.PORT || 5000;  //set port according to local and cloud service environment
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true})); //This part lets you reach the html elements

mongoose.connect("mongodb+srv://admin-cvlt:grind_code66@cluster0.ovzyp.mongodb.net/CompLog", {useNewUrlParser: true, useUnifiedTopology: true});

const imageSchema = new mongoose.Schema({

  inputSize: String,
  outputSize: String,
  CompressionEngine: String,
  compPercantage: Number,
  status: Number
  
});

const imgData = mongoose.model("imgData", imageSchema);

app.use(express.static(path.join(__dirname, 'uploadedFiles')));                 //Serve static files to client
app.use(express.static(path.join(__dirname, 'compressedImages')));              //Serve static files to client

//Set-up session options
app.use(session({
  secret: 'nooseCallingMe',
  resave: false,
  saveUninitialized: true
}));
//Set-up session options


// Set destination for Multer
var storage = multer.diskStorage({

  destination: function (req, file, callback) {
    var dir = __dirname+"/uploadedFiles/"+req.sessionID;

    if (!fs.existsSync(__dirname+"/uploadedFiles")) { //Create a folder if not exists
      fs.mkdirSync(__dirname+"/uploadedFiles");
    }

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

var textStorage = multer.diskStorage({

  destination: function (req, file, callback) {
    var dir = __dirname+"/";

    callback(null, dir);
  },

  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

// Set upload destination and upload limit
var uploadImages = multer({
  storage: storage
}).array('file', 120); 
// Set upload destination and upload limit

var uploadText = multer({
  storage: textStorage
}).array('file', 120); 


// This triggers on user input
app.post("/upload", (req, res) => {

  console.log(req.body)
  

  uploadImages(req, res, function (err) {                        //Multer Upload
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
     return res.status(200).send(req.body)
  })

});
// This triggers on user input

// This triggers on user input
app.post("/uploadText", (req, res) => {

  uploadText(req, res, function (err) {                        //Multer Upload
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
     return res.status(200).send(req.body)
  })
  
});
// This triggers on user input

//This triggers on submit button clicked
app.post("/compSubmit", (req, res) => {

  process.on('uncaughtException', (error, origin) => {
    console.log('----- Uncaught exception -----')
    console.log(error)
    console.log('----- Exception origin -----')
    console.log(origin)    
  })

  process.on('unhandledRejection', (reason, promise) => {
    console.log('----- Unhandled Rejection at -----')
    console.log(promise)
    console.log('----- Reason -----')
    console.log(reason)
  })

  let form = req.body;
  let commandJPG;
  let commandPNG;
  let commandSVG;
  let commandGIF;


  if(form.JPG== "mozjpeg" && req.body.commandJPG==="")
  {
    commandJPG = ["-quality", "60"];
  }
  else if(form.JPG== "mozjpeg"&& req.body.commandJPG!=="")
  {
    commandJPG = req.body.commandJPG.split(" ");
  }

  if(form.JPG== "jpegtran" && req.body.commandJPG==="")
  {
    commandJPG = ["-trim", "-progressive", "-copy", "none", "-optimize"];
  }
  else if(form.JPG== "jpegtran"&& req.body.commandJPG!=="")
  {
    commandJPG = req.body.commandJPG.split(" ");
  }

  // if(form.JPG== "webp" && req.body.commandJPG==="")
  // {
  //   commandJPG = ['-q', '60','image.jpg','-o','image.jpg'];
  // }
  // else if(form.JPG== "webp"&& req.body.commandJPG!=="")
  // {
  //   commandJPG = req.body.commandJPG.split(" ");
  // }

  // if(form.JPG== "guetzli" && req.body.commandJPG==="")
  // {
  //   commandJPG = ['--quality', '84'];
  // }
  // else if(form.JPG== "guetzli"&& req.body.commandJPG!=="")
  // {
  //   commandJPG = req.body.commandJPG.split(" ");
  // }

  // if(form.JPG== "jpegRecompress" && req.body.commandJPG==="")
  // {
  //   commandJPG = ['--quality', 'high', '--min', '10'];
  // }
  // else if(form.JPG== "jpegRecompress" && req.body.commandJPG!=="")
  // {
  //   commandJPG = req.body.commandJPG.split(" ");
  // }

  // if(form.JPG== "jpegoptim" && req.body.commandJPG==="")
  // {
  //   commandJPG = ['--all-progressive', '-d'];
  // }
  // else if(form.JPG== "jpegoptim" && req.body.commandJPG!=="")
  // {
  //   commandJPG = req.body.commandJPG.split(" ");
  // }

  if(form.PNG== "pngquant" && req.body.commandPNG==="")
  {
    commandPNG = ['--quality=20-50', '-o'];
  }
  else if(form.PNG== "pngquant" && req.body.commandPNG!=="")
  {
    commandPNG = req.body.commandPNG.split(" ");
  }

  // if(form.PNG== "optipng" && req.body.commandPNG==="")
  // {
  //   commandPNG = ['-o7','-zm1-9'];
  // }
  // else if(form.PNG== "optipng" && req.body.commandPNG!=="")
  // {
  //   commandPNG = req.body.commandPNG.split(" ");
  // }

  // if(form.PNG== "pngout" && req.body.commandPNG==="")
  // {
  //    commandPNG = ['/b#'];
  // }
  // else if(form.PNG== "pngout" && req.body.commandPNG!=="")
  // {
  //   commandPNG = req.body.commandPNG.split(" ");
  // }

   //Unable to show when image is converted into another format


  // if(form.PNG== "webp" && req.body.commandPNG==="")
  // {
  //    commandPNG = ['-q', '60'];
  // }
  // else if(form.PNG== "webp" && req.body.commandPNG!=="")
  // {
  //   commandPNG = req.body.commandPNG.split(" ");
  // }

   //Unable to show when image is converted into another format



  // if(form.SVG== "svgo" && req.body.commandSVG==="")
  // {    
  //    commandSVG = ["--multipass"];
  // }
  // else if(form.SVG== "svgo" && req.body.commandSVG!=="")
  // {
  //   commandSVG = req.body.commandSVG.split(" ");
  // } 

  if(form.GIF== "gifsicle" && req.body.commandGIF==="")
  {
     commandGIF = ['--colors', '64', '--use-col=web'];
  }
  else if(form.GIF== "gifsicle" && req.body.commandGIF!=="")
  {
    commandGIF = req.body.commandGIF.split(" ");
  }

  //Unable to show when image is converted into another format


  // if(form.GIF== "gif2webp" && req.body.commandGIF==="")
  // {
  //    commandGIF = ['-f', '80', '-mixed', '-q', '30', '-m', '2',];
  // }
  // else if(form.GIF== "gif2webp" && req.body.commandGIF!=="")
  // {
  //   commandGIF = req.body.commandGIF.split(" ");
  // }

  // if(form.GIF== "giflossy" && req.body.commandGIF==="")
  // {
  //   console.log("ff")
  //    commandGIF = ['--lossy=80'];
  // }
  // else if(form.GIF== "giflossy" && req.body.commandGIF!=="")
  // {
  //   commandGIF = req.body.commandGIF.split(" ");
  // }


    //Unable to show when image is converted into another format

   

  const processImages = async (onProgress) => {
    const result = await compress({
      source: "./uploadedFiles/"+req.sessionID+"/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}",
      destination: './compressedImages/'+req.sessionID+"/",
      onProgress, 
      params:{pathLog:"./log/"+req.sessionID+"/"},
      enginesSetup: {
        jpg: {
          engine: form.JPG,
           command: commandJPG
        },
        png: {
          engine: form.PNG,
          command: commandPNG
        },
        svg: {
          engine: form.SVG,
          command: commandSVG
        },
        gif: {
          engine: form.GIF,
          command: commandGIF
        }
      },
       pathLog:"./",
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

  });
  
 


});
//This triggers on submit button clicked

//This is called after compression is done
app.post("/rename",function (req,res)
{

  const files = fs.readdirSync(__dirname+"/compressedImages/"+req.sessionID)

  let outputArray = new Array;

  for (let file of files) {

    outputArray.push(file)

  fs.renameSync(__dirname+"/compressedImages/"+req.sessionID+"/"+file, __dirname+'/compressedImages/'+req.sessionID+'/compressed-'+req.body.compIndex+"-"+file, () => {
  console.log("\nFile Renamed!\n");
  });

  } 

  res.send(outputArray)
  
})
//This is called after compression is done

//This is called when download button clicked
app.get("/download", function (req, res) {

console.log("download request")

zipper.sync.zip(__dirname+"/compressedImages/"+req.sessionID+"/").compress().save(req.sessionID+".zip");

res.download(__dirname +"/"+req.sessionID+'.zip','images.zip');

})
//This is called when download button clicked



//This is called when reset button clicked
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
//This is called when reset button clicked


//This is called before compression
app.get("/deleteOutput", function (req, res) {

  const odir = __dirname+'/compressedImages/'+req.sessionID

  if (fs.existsSync(__dirname+"/compressedImages/"+req.sessionID)) {

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

  if (fs.existsSync(__dirname+"/"+req.sessionID+"log"+".zip")) {
  
    fs.unlink(__dirname+"/"+req.sessionID+"log"+".zip", (err) => {
      if (err) {
        throw err;
      }
  
      console.log("Zip is deleted.")
    })
  }
  
  res.send("succesfully deleted")

})
//This is called before compression


//If app is on production environment this part is active
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
//If app is on production environment this part is active

app.listen(port, () => console.log(`Listening on port ${port}`));