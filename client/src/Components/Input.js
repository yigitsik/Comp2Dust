import React, { Component } from "react";
import axios from "axios";


class Input extends Component
{

  state = {
    selectedFiles: null,
  };

  upload = e => {

    this.setState({selectedFiles:e.target.files})

  } 

  uploadHandler = () =>{

    console.log( this.state.selectedFiles)

    const fd = new FormData();

    for ( var element of this.state.selectedFiles) {
      fd.append('file',element)
    }

    axios.post('/upload', fd)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

    render(){

      return(
        <div className="btn-group col-12 mb-5 ">
      <label className="btn btn-primary" title="select an image (jpeg, png)">
      <input type="file" id="file" name="file" multiple="multiple" onChange={this.upload}/>
		  <button onClick={this.uploadHandler}>Send Files</button>
      </label>
        </div>
      )
    }
}

export default Input;

