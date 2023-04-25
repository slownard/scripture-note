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
                        (isActive ? { color: 'white' } : { color: 'black' })}>Home</NavLink>

                <span></span>

                <NavLink className="padding" to="/profile" style={({ isActive }) =>
                    (isActive ? { color: 'white' } : { color: 'black' })}>Profile </NavLink>

                <span></span>

                <NavLink className="padding" to="/churches" style={({ isActive }) =>
                    (isActive ? { color: 'white' } : { color: 'black' })} >Church</NavLink>

                <span></span>

                <NavLink className="padding">
                    {user ? <button className="logout" onClick={handleLogOut}>Logout</button> : null}
                </NavLink>

                <span></span>
            </div>
        </div >
    )
}


export default Nav;