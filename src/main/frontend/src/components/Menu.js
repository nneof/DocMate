import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import "../styling/Menu.css";

class Menu extends Component {
    render() {

        const changeRoute = (props) => {
            this.props.handleMouseDown(props);
        }

        let visibility = "hide";

        if (this.props.menuVisibility) {
            visibility = "show";
        }

        return (
            <div id="flyoutMenu" className={visibility}>
                <div className={"closeMenu"} onClick={this.props.handleMouseDown} style={{"cursor": "pointer"}}>✖</div>
                <ul style={{"list-style-type": "none"}}>
                    <li>
                        <NavLink to='/doc/mate/home' onClick={changeRoute} className={"menuItem"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/doc/mate/news' onClick={changeRoute} className={"menuItem"}>News</NavLink>
                    </li>
                    <li>
                        <NavLink to='/doc/mate/about' onClick={changeRoute} className={"menuItem"}>About</NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Menu;