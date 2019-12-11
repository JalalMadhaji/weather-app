import React, { Component } from 'react'

export default class ListItem extends Component {
    render() {
        return (
           <li onClick={()=>this.props.handleClick(this.props.name)}>{this.props.name}</li>
        )
    }
}
