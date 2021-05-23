import react, {useState,useEffect} from "react";
import {Button,Collapse} from "react-bootstrap"
import axios from "axios";



function Collapsible() {

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
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-fade-text"
          aria-expanded={open}
        >
          Info
        </Button>
        <Collapse in={open}>
          <div id="example-fade-text">
          <div className="m-3">
          <ul className="list-group">
          <li className="list-group-item">
           <label className="btn btn-primary">
           <h5>Upload Your Quantization Table !!!</h5>
          <input type="file" hidden id="file" name="file" multiple="multiple" onChange={upload} />
          </label>
          </li>
          <li className="list-group-item"><a href="https://github.com/mozilla/mozjpeg/blob/master/usage.txt">Mozjpeg</a></li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          </div>
          </div>
        </Collapse>
      </div>
    );
  }
  
 export default Collapsible;