import React, { Component } from "react";
export default class Image extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage:
            "url(" +
            "https://previews.123rf.com/images/_ig0rzh_/_ig0rzh_1809/_ig0rzh_180900017/108836944-weather-forecast-background-climate-change-concept-collage-of-sky-photos-with-variety-weather-condit.jpg" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "800px"
        }}
      >
        <h1>{this.props.weather.request}</h1>
        <h1>{this.props.weather.request}</h1>
        <h1>{this.props.weather.request}</h1>
      </div>
    );
  }
}
