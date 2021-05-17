import React, { useState,useEffect } from "react";
import axios from "axios";
import ImageContainer from "./ImageContainer";
import Displayer from "./Displayer";
import $ from "jquery";
import SelectBox from "./selectBox";


function Tools () 
{

  const [inputArray, setInputArray] = useState(null);
  const [inputFiles, setInputFiles] = useState(null);
  const [outputArray,setOutputArray] = useState(null)
  const [isCompressedAvailable,setIsCompressedAvailable]=useState(false);
  const [isInputAvailable,setIsInputAvailable]=useState(false);


  
 
  function upload  (e)  {

    axios.get("/reset")
    .then(function (response) {
        
     setInputArray({inputArray:["/images/upload.jpg"]})
     setIsInputAvailable(false)

    const inputArr = new Array()
    Array.from(e.target.files).forEach((piece)=>{
    inputArr.push(piece.name)
    })

    setIsCompressedAvailable(false);
    setInputFiles({inputFiles:e.target.files})
    setIsInputAvailable(true)

    })
    .catch(function (error) {
        console.log(error);
    });

  } 

  useEffect(() => {
    uploadHandler(inputFiles); 
 }, [inputFiles]);

  function uploadHandler  (files) {

    console.log('uploadHandler() from Tools, below is the input array')
    
    let fd = new FormData();

    if(inputFiles!=null)
    {
      for ( var element of files.inputFiles) {
        fd.append('file',element)
      }

      axios.post('/upload', fd)
      .then(function (response) {
        console.log(response);
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

    console.log(formData)

    axios.get('/deleteOutput')
    .then(function (response) {

     console.log("Deleted Outputs")
     setIsCompressedAvailable(false);
     
    axios.post('/compSubmit', formData)
    .then(function (response) {
 
     console.log(response.data)
     rename();
 
   }).catch(function (error) {
      console.log(error);
    });
     
 
   }).catch(function (error) {
      console.log(error);
    });
    
   }

   function rename()
   {
    axios.get("/rename")
    .then(function (response) {

      let array = new Array;

      for (let file of inputArray.inputArray) {

     array.push("compressed-"+file)
      
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

        <div className="btn-group col-12 mb-5 ">
      <label className="btn btn-primary" title="select an image (jpeg, png)">
      <input type="file" id="file" name="file" multiple="multiple" onChange={upload}/>
      </label>
        </div>

         <div className="row">

          <ImageContainer imageArray={inputArray} outputArray={outputArray} checkOut={isCompressedAvailable} checkIn={isInputAvailable}/>

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

          <Displayer   />

          <Displayer />

          </div>

          </>

      )
    
}

export default Tools;
