import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "./CarouselHelper";
import ImageContainerSmall from "./ImageContainerSmall";
import TableRow from "./TableRow";
import axios from "axios";


function InputDisplayer(props)
{

  //this function called when download button clicked
  function download()
  {

    axios.get('/download')
    .then(function (response) {



      if (process.env.NODE_ENV === 'production') {                                 //This forces browser to download
        window.open("https://comp2dust.herokuapp.com/download");
      }
      else
      {
        window.open("http://localhost:5000/download");
      }

        

   }).catch(function (error) {
      console.log(error);
    });

  
  }
  //this function called when download button clicked

  //Call this on inital state
  function createDef() {

    return(

      <ImageContainerSmall src={"/images/upload.jpg"}/>

    )
    
  }
  //Call this on inital state

  function createImage(data) {
    
    if(props.checkIn===false)
    {
      return(<ImageContainerSmall src={"/images/upload.jpg"}/>)
    }
    else if(props.checkIn===true)
    {
      return(<ImageContainerSmall key={data} src={props.sessionID+"/"+data}/>)
    }
   
  }

  function createOutputImage(data,index)
  {
    
    if(props.checkOut===true)
    {
      return(<ImageContainerSmall key={props.outputArray.outputArray[index]} src={props.sessionID+"/"+props.outputArray.outputArray[index]}/>)
    }
  }

  function createTable(value,id)
  {
    if(props.checkOut===true)
    {
      return(
       
<TableRow parentProps={props} key={id} id={id}/>

        
      )
    }
  }

    return(

    <div className="mb-4">

          <div className="card my-3 shadow rounded">
            <h5 className="card-header d-flex align-items-center justify-content-between">
              <span>Input image </span>
              {props.checkOut==false?null:<a onClick={download} download="pack.zip" className="btn btn-primary">download</a>}
            </h5>

            <div className="card-body" >
              <div className="row">

              <Carousel responsive={responsive}>

              {(props.checkIn===false)&&(props.checkOut===false)?createDef():(props.imageArray.inputArray.map((data,index)=>createImage(data,index)))}
          
              </Carousel>

              <hr/>

              <Carousel responsive={responsive}>

              {(props.checkIn===false)&&(props.checkOut===false)?null:(props.imageArray.inputArray.map((data,index)=>createOutputImage(data,index)))}
          
              </Carousel>
              
  <div>
                 

<div >

<table className="table shadow-sm">

{
(props.checkOut===false)?null:

<thead className="thead-dark">
<tr>
<th scope="col">#</th>
<th scope="col">Name</th>
<th scope="col">Algorithm</th>
<th scope="col">Input Size</th>
<th scope="col">Output Size</th>
<th scope="col">Compression %</th>
</tr>
</thead>

}

<tbody>

  {(props.checkOut===false)?null:(props.imageArray.inputArray.map((value,id)=>createTable(value,id)))}

 </tbody>

</table>
         
         </div>
                
                </div>
              </div>
            </div>
          </div>

          </div>
)
}


export default InputDisplayer;