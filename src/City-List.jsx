import React, { Component } from "react";
import ListItem from "./listItem";

export default class CityList extends Component {
  render() {
    return (
      <div className="list-div">
        <ul>
          {this.props.cities.map((city, key) => (
            <ListItem
              key={key}
              name={city}
              handleClick={this.props.handleClick}
            />
          ))}
        </ul>
      </div>
    );
  }
}
