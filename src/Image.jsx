import React, { Component } from "react";
import Airship from "./aerostat.jpg";

export default class Image extends Component {
  render() {
    {
      console.log("obj", this.props.weather);
    }
    return (
      <div
        className="image"
        style={{
          background: `linear-gradient(
            45deg,
            rgba(6, 100, 112, 0.5),
            rgba(134, 228, 240, 0.429)
          ), url(${Airship})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {this.props.weather.map(city => (
          <div key={city.request.query}>
            <h3>{city.request.query}</h3>
            <h1>{city.current.temperature}&#176;</h1>
            <img src={city.current.weather_icons[0]} alt="img" />
          </div>
        ))}
      </div>
    );
  }
}
