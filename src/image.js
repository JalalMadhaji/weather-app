import React, { Component } from "react";
export default class Image extends Component {
  render() {
    return (
      <div
        className="bac-img"
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
        {console.log("here ", this.props.weather)}
        {this.props.weather.map(city => {
          return (
            <div>
              <h1>{city.request.query}</h1>
              <h2>{city.current.temperature}</h2>
              <img src={city.current.weather_icons} alt="" />
            </div>
          );
        })}
      </div>
    );
  }
}
