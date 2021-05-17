import React, {useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsiveMain} from "./CarouselHelper";
import ReactCompareImage from 'react-compare-image';

function ImageContainer(props)
{

  useEffect(() => console.log('prop changed'), [props]);


  console.log(props)
  
  function createDef()
  {
    console.log("I am null")
    return(<ReactCompareImage  leftImage="/images/upload.jpg" rightImage="/images/upload.jpg" />)
  }


  function createImage(data,index) {         
    
    if((props.checkIn==false)&&(props.checkOut==false))
    {
      return(<ReactCompareImage  leftImage="/images/upload.jpg" rightImage="/images/upload.jpg" />)
    }
    else if((props.checkIn==true)&&(props.checkOut==false))
    {
      return(<ReactCompareImage key={data} leftImage={data} rightImage={"/images/upload.jpg"} />)
    }
    else if((props.checkIn)&&(props.checkOut))
    { 
      return(<ReactCompareImage key={data} leftImage={data} rightImage={props.outputArray.outputArray[index]} />)
    }

  }

  


   return(

        <div className="col-lg-8 mb-4 rounded">
        <div className="card shadow-lg ">
      <h4 className="card-header">Image Gallery</h4>

      <div className="card-body h-100" >

      <Carousel responsive={responsiveMain} swipeable={false} draggable={false}>
      {
       (props.checkIn==false)&&(props.checkOut==false)?createDef():(props.imageArray.inputArray.map((data,index)=>createImage(data,index)))
      }
      </Carousel>

      </div>

      
        </div>
        </div>
        )

  }



export default ImageContainer;