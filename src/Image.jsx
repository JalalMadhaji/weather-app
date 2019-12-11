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
          background: `url(${Airship})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {this.props.weather.map(city => (
          <div key={city.request.query}>
            <h1>{city.request.query}</h1>
            <h3>{city.current.temperature}&#176;</h3>
            <img src={city.current.weather_icons[0]} alt="img" />
          </div>
        ))}
      </div>
    );
  }
}
