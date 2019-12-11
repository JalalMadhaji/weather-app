import React from "react";
import Image from "./image";
import CityList from "./City-List";

export default class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "Aden",
      cities: ["Aden", "Sana'a", "Taiz"],
      weather: ""
    };
  }

  constructor() {
    super();
    this.state = {
      city: "Aden",
      cities: ["Aden", "Sana'a", "Cairo"],
      weather: ""
    };
  }

  handleClick = name => {
    fetch(
      `http://api.weatherstack.com/current?access_key=9c5d884fbb53e36a3f2351ef8152fc08&query=${name}`
    )
      .then(data => {
        return data.json();
      })
      .then(result => {
        console.log(result);
        this.setState({
          weather: result
        });
      });
  };

  componentDidMount() {
    fetch(
      `http://api.weatherstack.com/current?access_key=9c5d884fbb53e36a3f2351ef8152fc08&query=${this.state.city}`
    )
      .then(data => {
        return data.json();
      })
      .then(result => {
        console.log(result);
        this.setState({
          weather: result
        });
      });
  }
  render() {
    return (
      <div className="container">
        <CityList cities={this.state.cities} handleClick={this.handleClick} />
      </div>
    );
  }
}
