import React, {Component} from "react";
import axios from "axios";
import $ from "jquery";


class Options extends Component
{

  componentDidUpdate(){

   var formData = $("#optionsForm").serialize(); //This function gets the form data into an array

   axios.post('/compSubmit', formData)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  }


    render(){

      return(

        
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
          <button className="btn bg-primary" onClick={this.componentDidUpdate} type="button">Submit</button>
         </div>

      </div>
    </div>

    </form>

  </div>

      )
    }


}

export default Options;