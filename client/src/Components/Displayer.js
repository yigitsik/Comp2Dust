import React from "react";

function Displayer()
{

    return(

    <div className="mb-4">

          <div className="card my-3 shadow rounded">
            <h5 className="card-header d-flex align-items-center justify-content-between">
              <span>Input image </span>
            </h5>

            <div className="card-body" >
              <div className="row">
                <div className="col-md-4 mb-3  shadow-sm d-flex" id="dispCard" >
                    <img className="card-img" src="images/upload.jpg" id="input_Image" alt="upload.jpg"/>
                </div>
                <div className="col-md-8">
                  <ul className="list-group my-4 shadow-sm" >

                    <li className="list-group-item d-flex" >
                      <div className="ms-2 me-auto">
                        <p>File Name </p>
                      </div>
                      <label htmlFor="Ifile_name"></label><textarea id="Ifile_name" cols="20" rows="1" readOnly ></textarea>
                    </li>


                    <li className="list-group-item d-flex ">
                      <div className="ms-2 me-auto ">
                        <p>File Type </p>
                      </div>
                      <label htmlFor="file_type"></label><textarea name="file_type" id="file_type" cols="20" rows="1" readOnly ></textarea>
                    </li>

                    <li className="list-group-item d-flex ">
                      <div className="ms-2 me-auto ">
                       <p>File Size </p>
                      </div>
                      <label htmlFor="file_size"></label><textarea name="file_size" id="file_size" cols="20" rows="1" readOnly ></textarea>
                    </li>

                    <li className="list-group-item d-flex ">
                      <div className="ms-2 me-auto ">
                        <p>Image Dimensions</p>
                      </div>
                      <label htmlFor="iDimen"></label><textarea name="iDimen" id="iDimen" cols="20" rows="1" readOnly ></textarea>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>

          </div>
)
}


export default Displayer;