import React from 'react'
import {NavLink} from "react-router-dom";
import '../styling/NavigationBar.css'

function NavigationBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/doc/mate/home'>Home</NavLink>
                        <NavLink to='/doc/mate/news'>News</NavLink>
                        <NavLink to='/doc/mate/about'>About</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavigationBar
