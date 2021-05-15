import React, { Component } from "react";
import axios from "axios";
import ImageContainer from "./ImageContainer";
import Displayer from "./Displayer";
import $ from "jquery";


class Tools extends Component
{
  state = {
    inputArray:null,
    inputFiles:null,
    outputArray:null
  }

   upload = e => {

    this.setState({inputFiles:e.target.files})

    const inputArr = new Array()

   Array.from(e.target.files).forEach((piece)=>{

    inputArr.push(piece.name)

    }) 

    this.setState({inputArray: inputArr})

  } 

  componentDidUpdate()
  {
    console.log(this.state.inputArray)
    const fd = new FormData();

    console.log(this.state.inputFiles)

    if(this.state.inputFiles!=null)
    {
      for ( var element of this.state.inputFiles) {
        console.log(element)
        fd.append('file',element)
      }
    }

    axios.post('/upload', fd)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  //  uploadHandler = () => {

  //   console.log(this.state.inputArray)
  //   const fd = new FormData();

  //   console.log(this.state.inputFiles)

  //   if(this.state.inputFiles!=null)
  //   {
  //     for ( var element of this.state.inputFiles) {
  //       console.log(element)
  //       fd.append('file',element)
  //     }
  //   }
  //   axios.post('/upload', fd)
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

   compress = () =>{

    console.log("Compress() function from Options.js")
    var formData = $("#optionsForm").serialize(); //This function gets the form data into an array
 
    axios.post('/compSubmit', formData)
   .then(function (response) {

    console.log(response.data)
    this.setState({outputArray:response.data})
     
   })
   .catch(function (error) {
     console.log(error);
   });
 
   }

   render(){

      return(

        <>

        <div className="btn-group col-12 mb-5 ">
      <label className="btn btn-primary" title="select an image (jpeg, png)">
      <input type="file" id="file" name="file" multiple="multiple" onChange={this.upload}/>
		  <button onClick={this.uploadHandler}>Send Files</button>
      </label>
        </div>

         <div className="row">

          <ImageContainer imageArray={this.state.inputArray} imageOutputArray={this.state.outputArray}/>

          <div className="col-lg-4 mb-4 ">

    <form action="/compSubmit" id="optionsForm" method="post">

    <div className="card h-100 shadow rounded">
      <h4 className="card-header">Options</h4>
      <div className="card-body">

        <fieldset className="form-group m-5">

          <div className="form-group row">
            <label htmlFor="comp_rate">Quality</label>
            <input type="range" name="rate" min="0" max="75" id="comp_rate"/>
          </div>

        </fieldset>

        <div className="form-group row my-5">
          <label htmlFor="width" className="col-5 col-form-label">Width</label>
          <div className="col-7">
            <input type="number" min="1" max="10000"  className="form-control" id="width" placeholder="Optional"/>
          </div>
        </div>

        <div className="form-group row my-5">
          <label htmlFor="height" className="col-5 col-form-label">Height</label>
          <div className="col-7">
            <input type="number" min="1" max="10000"  className="form-control" id="height" placeholder="Optional"/>
          </div>
        </div>

          <div className="form-group row m-5 text-center" >
            <p>Status</p>
            <label htmlFor="status"></label><textarea name="comp_ratio" id="status" cols="30" rows="1" readOnly ></textarea>
          </div>

          <div className="form-group row m-5">
          <button className="btn bg-primary" type="button">Reset</button>
         </div>

         <div className="form-group row m-5">
          <button className="btn bg-primary" onClick={this.compress} type="button">Submit</button>
         </div>

      </div>
    </div>

    </form>

  </div>

          <Displayer />

          <Displayer />

          </div>

          </>

      )

   }
    
}

export default Tools;
