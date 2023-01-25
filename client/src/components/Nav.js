import React from "react";
import { NavLink } from "react-router-dom"


function Nav({ user, handleLogOut }) {

    return (
        <div className="nav">

            <div className="navbar">

                <h1>Scripture Note</h1>

            </div>

            <div className="navlinks">
                <NavLink className="padding" to="/"
                    style={({ isActive }) =>
                        (isActive ? { color: 'white' } : { color: 'black' })}>Home(add icon)</NavLink>

                <NavLink className="padding" to="/profile" style={({ isActive }) =>
                    (isActive ? { color: 'white' } : { color: 'black' })}>Profile(add icon) </NavLink>

                <NavLink className="padding" to="/churches" style={({ isActive }) =>
                    (isActive ? { color: 'white' } : { color: 'black' })} >Church(add icon)</NavLink>

                <NavLink>
                    {user ? <button className="logout" onClick={handleLogOut}>Log out</button> : null}
                </NavLink>



            </div>
        </div >
    )
}

// 

export default Nav;