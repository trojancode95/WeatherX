import React from "react";
import "./weather.css";

//stateless function called
const Weather = (props) => {
  return (
    <div className="container">
      <div className="Card">
        <h1 className="text-white py-3">{props.cityname}</h1>
        <h5 className="text-white py-4">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>

        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="text-white py-2">
            Temperature : {props.temp_celsius}&deg; C
          </h1>
        ) : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* Weather description */}
        <h4 className="text-white py-3">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>

        {/* Wind Speed */}
        {props.wind_speed ? (
          <h4 className="text-white py-2">
            Wind Speed : {props.wind_speed} mph
          </h4>
        ) : null}
      </div>
    </div>
  );
};

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="text-white px-4">{min}&deg;</span>
        <span className="text-white px-4">{max}&deg;</span>
      </h3>
    );
  }
}

export default Weather;
