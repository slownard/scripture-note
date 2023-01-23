import React from "react";
import { NavLink } from "react-router-dom"


function Nav() {

    // HOME
    // PROFILE 
    // CHURCH 
    // LOGOUT 



    // function handleLogOut() {

    //     fetch('/logout', {
    //         method: "DELETE"
    //     })
    //         .then((res) => {
    //             if (res.ok) {
    //                 setUser(null)
    //             }
    //         })
    // }


    return (
        <div className="nav">


            <div className="navlinks">
                <NavLink className="padding" to="/home"
                    style={({ isActive }) =>
                        (isActive ? { color: 'white' } : { color: 'black' })}>Home(add icon)</NavLink>

                <NavLink className="padding" to="/profile" style={({ isActive }) =>
                    (isActive ? { color: 'white' } : { color: 'black' })}>Profile(add icon) </NavLink>

                <NavLink className="padding" to="/church" style={({ isActive }) =>
                    (isActive ? { color: 'white' } : { color: 'black' })} >Church(add icon)</NavLink>

                {/* <NavLink className="padding" to="/logout" style={({ isActive }) =>
                    (isActive ? { color: 'white' } : { color: 'black' })} >Logout(add icon)</NavLink> */}

                {/* <NavLink> {handleLogOut}  </NavLink> */}

            </div>
        </div>
    )
}

export default Nav;