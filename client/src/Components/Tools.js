import React, { useState,useEffect } from "react";
import axios from "axios";
import ImageContainer from "./ImageContainer";
import InputDisplayer from "./inputDisplayer";
import $ from "jquery";
import SelectBox from "./selectBox";


function Tools () 
{

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

  

  function upload  (e)  {

    axios.get("/reset")
    .then(function (response) {
        
    setIsInputAvailable(false)

    const inputArr = new Array()
    Array.from(e.target.files).forEach((piece)=>{
    inputArr.push(piece.name)
    })

    setIsCompressedAvailable(false)
    setInputFiles({inputFiles:e.target.files})
    setCurrentSessionId(response.data)

    })
    .catch(function (error) {
        console.log(error);
    });

  } 

  useEffect(() => {
    uploadHandler(inputFiles); 
 }, [inputFiles]);

  function uploadHandler  (files) {
    
    let fd = new FormData();

    if(inputFiles!=null)
    {
      for ( var element of files.inputFiles) {
        fd.append('file',element)
      }

      axios.post('/upload', fd ,{
      
        onUploadProgress: progressEvent =>
        {
          console.log('Upload Progress: '+ Math.round(progressEvent.loaded/progressEvent.total*100)+'%')
          setUploadProgress(Math.round(progressEvent.loaded/progressEvent.total*100))
        }

      })
      .then(function (response) {

        console.log(response)

        const inputArr = new Array()
        

        Array.from(inputFiles.inputFiles).forEach((piece)=>{

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


  function compress(){

    var formData = $("#optionsForm").serialize(); //This function gets the form data into an array 

    axios.get('/deleteOutput')
    .then(function (response) {

     setIsCompressedAvailable(false);
     
    axios.post('/compSubmit', formData)
    .then(function (response) {
 
     setCompressionStatistics(response.data.statistics)
     rename();
 
   }).catch(function (error) {
      console.log(error);
    });
     
   }).catch(function (error) {
      console.log(error);
    });


   }



   useEffect(() => {
    
    let sum=0;
    let oSum=0;

    console.log(compressionStatistics)

    for( var element in compressionStatistics)
    {
      sum+=compressionStatistics[element].size_in/1024
      oSum+=compressionStatistics[element].size_output/1024
    }

    setTotalSize(sum.toFixed(1))
    setTotalOutputSize(oSum.toFixed(1))

     
 }, [compressionStatistics]);
   

   function rename()
   {
    axios.post("/rename", {compIndex})
    .then(function (response) {

      let array = new Array;

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
   


   function reset()
   {

    axios.get("/reset")
    .then(function (response) {
      setIsInputAvailable(false)   
      setIsCompressedAvailable(false)               
    })
    .catch(function (error) {
        console.log(error);
    });

   }

      return(

        <>

        <div className="btn-group col-12 mb-3 ">
      <label className="btn btn-primary" title="select an image (jpeg, png)">
       <h5>Upload</h5>
      <input type="file"hidden id="file" name="file" multiple="multiple" onChange={upload}/>

      </label>
        </div>

        {
        !isInputAvailable?
        <div className=" alert alert-info text-center">
        <strong>To get started use the upload button to upload your JPG, PNG, GIF and SVG files</strong>
        </div>:null
        }

         <div className="row">

          <ImageContainer imageArray={inputArray} outputArray={outputArray} checkOut={isCompressedAvailable} checkIn={isInputAvailable} statistics={compressionStatistics} sessionID={currentSessionId} uploadProgress={uploadProgress} size={totalSize} oSize={totalOutputSize}/>

          <div className="col-lg-4 mb-4 ">

    <form action="/compSubmit" id="optionsForm" method="post">

    <div className="card h-100 shadow rounded">
      <h4 className="card-header">Options</h4>
      <div className="card-body">

        <fieldset className="form-group m-5">

          <div className="form-group row">
            <label htmlFor="comp_rate"><h6>Quality</h6></label>
            <input type="range" name="rate" min="0" max="100"/>
          </div>

        </fieldset>

              <SelectBox/>


          <div className="form-group row m-5">
          <button className="btn bg-primary" onClick={reset} type="button">Reset</button>
         </div>

         <div className="form-group row m-5">
          <button className="btn bg-primary" onClick={compress} type="button">Submit</button>
         </div>

      </div>
    </div>

    </form>

  </div>

          {isInputAvailable===true?(<InputDisplayer imageArray={inputArray} outputArray={outputArray} checkOut={isCompressedAvailable} checkIn={isInputAvailable} statistics={compressionStatistics} sessionID={currentSessionId} />):<div></div>}

          </div>

          </>

      )
    
}

export default Tools;
