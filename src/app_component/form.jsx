import React from "react";
import "./form.css";

//stateless function called
const Form = (props) => {
  return (
    <div className="container h-100">
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className="row">
          <div className="col-md-4 offset-md-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter any City"
              name="city"
              autoComplete="on"
            />
          </div>
          <div className="col-md-4 mt-md-0 mt-2 text-md-left ">
            <button className="btn btn-primary">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const error = (props) => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City!
    </div>
  );
};

export default Form;
