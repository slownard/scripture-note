import React from "react";
import demouser from "../images/demouser.jpg"


function Profile({ user }) {





    return (
        <div class="user">

            <img src={demouser} height="300" width="250" />

            <h2> {user.first_name} {user.last_name} </h2>
            <h2> Home: {user.town}, {user.state} </h2>

            <p class="title"> @{user.username} </p>
            <a> Contact {user.email} </a>
            <a> Home Church: {user.home_church} </a>
            <a> instagram: @{user.instagram} </a>
        </div>
    )
}
export default Profile;