import React from "react";
import { NavLink } from "react-router-dom"


function Nav() {

    return (
        <div className="nav">

            <div className="navlinks">
                {/* <NavLink className="padding" to="/home"
                    style={({ isActive }) =>
                        (isActive ? { color: 'blue' } : { color: 'black' })}>Home(add icon)</NavLink> */}

                <NavLink className="padding" to="/profile" style={({ isActive }) =>
                    (isActive ? { color: 'white' } : { color: 'black' })}>Profile(add icon) </NavLink>

                <NavLink className="padding" to="/churches" style={({ isActive }) =>
                    (isActive ? { color: 'white' } : { color: 'black' })} >Church(add icon)</NavLink>

            </div>
        </div>
    )
}

// 

export default Nav;