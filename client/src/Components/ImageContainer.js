import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsiveMain} from "./CarouselHelper";
import ReactCompareImage from 'react-compare-image';


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
    
    console.log(data)

    if((props.checkIn===true)&&(props.checkOut===false))
    { 
      return(
        <div className="card " id="mainCard">
      <ReactCompareImage key={index} leftImage={props.sessionID+"/"+data} rightImage={props.sessionID+"/"+data}/>
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
      
        </div>
       
        )

  }



export default ImageContainer;