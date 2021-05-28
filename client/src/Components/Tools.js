import React, { useState,useEffect } from "react";
import axios from "axios";
import ImageContainer from "./ImageContainer";
import InputDisplayer from "./inputDisplayer";
import $ from "jquery";
import SelectBox from "./selectBox";


function Tools () 
{

  // Initilize the States
  const [inputArray, setInputArray] = useState(null);
  const [inputFiles, setInputFiles] = useState(null);
  const [outputArray,setOutputArray] = useState(null)
  const [compIndex,setCompIndex] = useState(0);
  const [isCompressedAvailable,setIsCompressedAvailable]=useState(false);
  const [isInputAvailable,setIsInputAvailable]=useState(false);
  const [compressionStatistics,setCompressionStatistics]=useState(null);
  const [currentSessionId,setCurrentSessionId]= useState(null)
  const [uploadProgress,setUploadProgress] = useState(null)
  const [totalSize,setTotalSize] = useState(0);
  const [totalOutputSize,setTotalOutputSize]= useState(0);
  const [isLoading,setIsLoading] = useState(false);
  const [errorExist,setErrorExist] = useState(false);
  // Initilize the States

  

  //This triggers on upload
  function upload  (e)  {

    axios.get("/reset")                       //Clear previous files for a fresh start
    .then(function (response) {
      
    setIsInputAvailable(false)
    setIsCompressedAvailable(false)
    setInputFiles({inputFiles:e.target.files})            //Assign file array to state
    setCurrentSessionId(response.data)                  //Get unique session ID
    setErrorExist(false)

    })
    .catch(function (error) {
        console.log(error);
    });

  } 
  //This triggers on upload


  useEffect(() => {                        //When inputFiles's state updated run uploadHandler()
    uploadHandler(inputFiles); 
 }, [inputFiles]);

 //This function called when inputFiles state updated
  function uploadHandler  (files) {
    
    let fd = new FormData();

    if(inputFiles!=null)
    {
      for ( var element of files.inputFiles) {            //push input files into an Array
        fd.append('file',element)
      }

      axios.post('/upload', fd ,{                          //Send input files to Multer
      
        onUploadProgress: progressEvent =>
        {
          setUploadProgress(Math.round(progressEvent.loaded/progressEvent.total*100))           //Set upload status to a state
        }

      })
      .then(function (response) {


        const inputArr = new Array()
        
        Array.from(inputFiles.inputFiles).forEach((piece)=>{                      //Push input file names into an Array
          
        inputArr.push(piece.name)
        }) 

       setInputArray({inputArray: inputArr})                            
       setIsInputAvailable(true)

      })
      .catch(function (error) {
        console.log(error);
      });

    }

  }
   //This function called when inputFiles state updated



   //This function called when compress button clicked
  function compress(){

    var formData = $("#optionsForm").serialize();        //This function gets the form data into a readable format 

    setErrorExist(false);
    setIsLoading(true);

    axios.get('/deleteOutput')                        //Clear compressed files for a fresh start
    .then(function (response) {

     setIsCompressedAvailable(false); 
     
    axios.post('/compSubmit', formData )                          //Send form data from options box to compress                       
    .then(function (response) {
 
     setCompressionStatistics(response.data.statistics)
     rename();                                                            //rename compressed files
     setIsLoading(false)
     

     if(response.data.errors[0]!=null)
     {
      setErrorExist(true)
      setIsCompressedAvailable(false)
     }

 
   }).catch(function (error) {
      console.log(error);
    });
   }).catch(function (error) {
      console.log(error);
    });
   }
    //This function called when compress button clicked


   useEffect(() => {                                          // When compressionStatistics state updated run this function block
    
    let sum=0;
    let oSum=0;

    for( var element in compressionStatistics)
    {
      sum+=compressionStatistics[element].size_in/1024                                    //Convert sizes from byte to kilobyte
      oSum+=compressionStatistics[element].size_output/1024                               //Convert sizes from byte to kilobyte
    }

    setTotalSize(sum.toFixed(1))
    setTotalOutputSize(oSum.toFixed(1))
     
 }, [compressionStatistics]);
   

   //this function called right after files are compressed
   function rename()                          
   {
    axios.post("/rename", {compIndex})                  //Renaming compressed files is neccessary because ReacJS components does not update themselves without change in files
    .then(function (response) {                            

      let array = new Array;
      let inArray= new Array;

      for (let file of inputArray.inputArray) {
     
      array.push("compressed-"+compIndex+"-"+file)
      setCompIndex(compIndex+1)
    
        }

     setOutputArray({outputArray: array})
     setIsCompressedAvailable(true);
                            
    })
    .catch(function (error) {
        console.log(error);
    });
   }
   //this function called right after files are compressed
   

   //Prevent submit button on enter key
   $('#optionsForm').keydown(function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
   });
   //Prevent submit button on enter key

      return(

        <>

        <div className="btn-group col-12 mb-3 ">
      <label className="btn btn-primary" title="select an image (jpeg, png)">
       <h5>Upload</h5>
      <input type="file" hidden id="file" name="file" multiple="multiple" onChange={upload}/>        {/* Input Button */}
      </label>
        </div>

        {
        !isInputAvailable?
        <div className=" alert alert-info text-center">
        <strong>To get started use the upload button to upload up to 100 JPG, PNG, GIF files</strong>                     {/* Info Box */}
        </div>:null
        }

         <div className="row">             {/* Main Image Container */}

          <ImageContainer imageArray={inputArray} outputArray={outputArray} checkOut={isCompressedAvailable} checkIn={isInputAvailable} statistics={compressionStatistics} sessionID={currentSessionId} uploadProgress={uploadProgress} size={totalSize} oSize={totalOutputSize} loadingStatus={isLoading} errorStatus={errorExist}/>

          <div className="col-lg-4 mb-4 ">

    <form action="/compSubmit" id="optionsForm" method="post">                          {/* Form */}

    <div className="card h-100 shadow rounded">
      <h4 className="card-header">Options</h4>
      <div className="card-body">

        {/* <fieldset className="form-group m-5">

          <div className="form-group row">
            <label htmlFor="comp_rate"><h6>Quality</h6></label>
            <input type="range" name="rate" min="0" max="100"/>
          </div>

        </fieldset> */}

              <SelectBox/>                                                                         {/* Options Box */}



         <div className="form-group row m-5">
          <button className="btn bg-primary" onClick={compress} type="button">Compress</button>                   {/* Compress button */}
         </div>

      </div>
    </div>

    </form>

          {/* Displayer */}

          </div>

          {isInputAvailable===true?(<InputDisplayer imageArray={inputArray} outputArray={outputArray} checkOut={isCompressedAvailable} checkIn={isInputAvailable} statistics={compressionStatistics} sessionID={currentSessionId} error={errorExist}/>):<div></div>}

          </div>

          </>

      )
    
}

export default Tools;
