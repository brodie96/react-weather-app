import React from "react";

export default function WeatherIcon(props) {
  return (
    <span>
      <img src={props.code} alt={props.altText} />{" "}
    </span>
  );
}
