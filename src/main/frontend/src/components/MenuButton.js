import React, { Component } from "react";
import '../styling/MenuButton.css';

class MenuButton extends Component {
    render() {
        return (
            <button id="roundButton" onMouseDown={this.props.handleMouseDown}/>
        );
    }
}

export default MenuButton