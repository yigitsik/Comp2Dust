import react, {useState,useEffect} from "react";
import axios from "axios";



function Info() {

    const [open, setOpen] = useState(false);
    const [file,setFile] = useState(false);


    function upload  (e)  {

      setFile({inputFiles:e.target.files[0]})            //Assign file array to state
        
      } 
      //This triggers on upload
    
    
      useEffect(() => {                        //When inputFiles's state updated run uploadHandler()
        uploadHandler(file); 
     }, [file]);
    
     //This function called when inputFiles state updated
      function uploadHandler (files) {
        
        let fd = new FormData();
    
        if(file!=null)
        {
            
          fd.append('file',files.inputFiles)
            
          axios.post('/uploadText', fd ,{                          //Send input files to Multer
          
            onUploadProgress: progressEvent =>
            {
            //   setUploadProgress(Math.round(progressEvent.loaded/progressEvent.total*100))           //Set upload status to a state
            }
          })
          .then(function (response) {

            // setCurrentSessionId(response.data)  
    
          })
          .catch(function (error) {
            console.log(error);
          });
    
        }
    
      }
    

  
    return (
      <div className="row">
          <div id="example-fade-text">
          <div className="m-1">
          <label className="btn btn-primary col-12">
           <h5>Upload Configuration File</h5>
          <input type="file" hidden id="file" name="file" multiple="multiple" accept=".txt" onChange={upload} />
          </label>
          <ul className="list-group">
          {/* <li className="list-group-item">
          </li> */}
          {/* <li className="list-group-item"><a href="https://github.com/mozilla/mozjpeg/blob/master/usage.txt">Mozjpeg</a></li> */}
          {/* <li className="list-group-item"><a href="https://github.com/cloudflare/jpegtran/blob/master/usage.txt">Jpegtran</a></li> */}
          {/* <li className="list-group-item"><a href="https://developers.google.com/speed/webp/docs/cwebp">Webp</a></li> */}
          {/* <li className="list-group-item"><a href="https://github.com/google/guetzli">Guetzli</a></li> */}
          {/* <li className="list-group-item"><a href="https://github.com/imagemin/guetzli-bin">Guetzli-Bin</a></li> */}
          {/* <li className="list-group-item"><a href="https://github.com/imagemin/jpeg-recompress-bin">jpeg-Recompress</a></li> */}
          {/* <li className="list-group-item"><a href="https://github.com/imagemin/jpegoptim-bin">jpeg-Optim</a></li> */}
          {/* <li className="list-group-item"><a href="https://github.com/imagemin/pngquant-bin">png-quant</a></li> */}
          {/* <li className="list-group-item"><a href="https://github.com/imagemin/pngcrush-bin">png-crush</a></li> */}
          {/* <li className="list-group-item"><a href="https://www.npmjs.com/package/svgo">svgo</a></li> */}
          {/* <li className="list-group-item"><a href="https://github.com/imagemin/gifsicle-bin">gifsicle</a></li> */}
          {/* <li className="list-group-item"><a href="https://www.npmjs.com/package/giflossy">gif-lossy</a></li> */}


          </ul>
          </div>
          </div>  
      </div>
    );
  }
  
 export default Info;