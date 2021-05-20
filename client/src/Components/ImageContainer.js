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
    <ReactCompareImage id="compare"  leftImage="/images/upload.jpg" rightImage="/images/upload.jpg" />
    </div>
    )
  }


  function createImage(data,index) {         
    
    if((props.checkIn===false)&&(props.checkOut===false))
    {
      return(
        <div className="card " id="mainCard">
      <ReactCompareImage  leftImage="/images/upload.jpg" rightImage="/images/upload.jpg" />
      </div>
      )
    }
    else if((props.checkIn===true)&&(props.checkOut===false))
    { 
      return(
        <div className="card " id="mainCard">
      <ReactCompareImage key={data} leftImage={data} rightImage={"/images/black.jpg"}/>
      </div>)
    }
    else if((props.checkIn)&&(props.checkOut))
    { 
      return(
      
        
      <div className="card " id="mainCard">
      <ReactCompareImage key={data} leftImage={data} rightImage={props.outputArray.outputArray[index]} />
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