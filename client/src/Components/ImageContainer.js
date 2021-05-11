import React from "react";


function ImageContainer()
{

    return(

        <div className="col-lg-8 mb-4 rounded">
        <div className="card shadow-lg ">
      <h4 className="card-header">Image Gallery</h4>
      <div className="card-body h-100 img-con d-flex" id="imgCard">
        <img className="card-img " src="images/upload.jpg" alt="" id="comp_img"/>
      </div>
        </div>
        </div>
    )

}

export default ImageContainer;