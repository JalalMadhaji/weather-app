import React, { Component } from "react";

export default class Image extends Component {
  render() {
    return (
      <div>
        {this.props.weather.map(city => (
          <h1>{city.request.query}</h1>
        ))}
      </div>
    );
  }
}
