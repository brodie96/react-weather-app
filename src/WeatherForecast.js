import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "8cce8f330a604a34b98d4612tbf4o097";
  let lon = props.coordinates.longitude;
  let lat = props.coordinates.latitude;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div className="WeatherForecast-icon">
            <WeatherIcon />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max"> 19º</span>{" "}
            <span className="WeatherForecast-temperature-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
