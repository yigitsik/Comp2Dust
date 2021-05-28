import React, {useState} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsiveMain} from "./CarouselHelper";
import ReactCompareImage from 'react-compare-image';
import {ProgressBar} from "react-bootstrap";
import axios from "axios";




function ImageContainer(props)  
{
 
  function createDef()
  {
    return(
      <div className="card " id="mainCard">
    <ReactCompareImage key={"default"} leftImage="/images/upload.jpg" rightImage="/images/upload.jpg" />
    </div>
    )
  }

  function createImage(data,index) {    


    if((props.checkIn===true)&&(props.checkOut===false)||props.errorStatus)
    { 
      return(
        <div className="card " id="mainCard">
      <ReactCompareImage key={index} leftImage={props.sessionID+"/"+data}  rightImage={props.sessionID+"/"+data}/>
      </div>)
    }
    else if((props.checkIn)&&(props.checkOut))
    { 
      return(
        
      <div className="card " id="mainCard">
      <ReactCompareImage key={index} leftImage={props.sessionID+"/"+data} rightImage={props.sessionID+"/"+props.outputArray.outputArray[index]} />
      </div>
      
      )
    }

  }

  

   return(

        <div className="col-lg-8 rounded" >
     
      <Carousel responsive={responsiveMain} swipeable={false} draggable={false}>
      {
       (props.checkIn===false)&&(props.checkOut===false)?createDef():(props.imageArray.inputArray.map((data,index)=>createImage(data,index)))
      }
      </Carousel>


      <div>

        {props.uploadProgress===null||props.uploadProgress===100?null:
        
        <div className="my-5">

        <label htmlFor="props.uploadProgress"><h6>Upload Progress</h6></label>
        <ProgressBar now={props.uploadProgress}></ProgressBar>

        </div>}

        </div>

        {props.checkOut&&props.errorStatus==false?                                                             //InfoBoxes
        <div className=" alert alert-info text-center mt-3">
        You have saved {(props.size-props.oSize).toFixed(1)} kb in total
        </div>:null}
        
        <div> 

        <div>

        {props.errorStatus?                                                             //InfoBoxes
        <div className=" alert alert-info text-center mt-3">
        <p>There was an error, check your commands</p>
        </div>:null}

        </div>                                               
                                                      
        {props.checkOut===false&&props.checkIn===true&&props.isLoading===false?                                          //InfoBoxes
        <div className=" alert alert-info text-center mt-3">
        Choose your options then press compress button to compress your images
        </div>:null
        }

        </div>

        {
        props.loadingStatus?                                          //InfoBoxes
        <div className=" alert alert-info text-center mt-3">
        Please wait... Compressing Images
        </div>:null
        }

        </div>
       
        )

  }



export default ImageContainer;