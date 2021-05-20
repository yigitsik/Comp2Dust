import React from "react";



function ImageContainerSmall(props)
{

    return(

      <div className="column col mb-3  shadow-sm d-flex" id="dispCard" >
      <img className="card-img" key={props.src} id="imgDisp" src={props.src} alt="upload.jpg"/>
      </div>
   
)
}


export default ImageContainerSmall;