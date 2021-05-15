import React from "react";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsiveMain} from "./CarouselHelper";
import ReactCompareImage from 'react-compare-image';

function ImageContainer(props)
{


  function createDef()
  {

    console.log("I am null")
    return(<ReactCompareImage leftImage="/images/upload.jpg" rightImage="/images/upload.jpg" />)

  }


  function createImage(element) {                                       

    console.log("I am not null")
    console.log(element)

    if(props.imageoutputArray==null)
    {
      return(<ReactCompareImage leftImage={element} rightImage={"/images/upload.jpg"} />)
    }
    else
    {
      return(<ReactCompareImage leftImage={element} rightImage={"compressed-"+element} />)
    }

  }


// componentDidMount(){

//   var self =this;

//   axios.get("/fetchDef",{responseType: 'base64'})
//   .then(function (response) {
      
//     self.setState({defaultArray: response.data})

//     console.log("/fetchDef called")
//     console.log(response.data)

                    
//   })
//   .catch(function (error) {
//       console.log(error);
//   });

// }


   return(

        <div className="col-lg-8 mb-4 rounded">
        <div className="card shadow-lg ">
      <h4 className="card-header">Image Gallery</h4>

      <div className="card-body h-100" >

      <Carousel responsive={responsiveMain} swipeable={false} draggable={false}>
      {
       props.imageArray==null?createDef():(props.imageArray.inputArray.map(createImage))
      }
      </Carousel>

      </div>

      
        </div>
        </div>
        )

  }



export default ImageContainer;