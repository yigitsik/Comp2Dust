import React from "react";



function ImageContainerSmall(props)
{

  

    return(

      <div className="col mb-3  shadow-sm d-flex" id="dispCard" >
      <img className="card-img" src={props.src} id="input_Image" alt="upload.jpg"/>
      </div>
   
)
}


export default ImageContainerSmall;