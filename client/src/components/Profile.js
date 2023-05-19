import React from "react";
import demouser from "../images/demouser.jpg"

function Profile({ user }) {

    return (
        <div class="user">
            <img class="userimg" src={demouser} height="300" width="250" />

            <h1 className="username"> {user.first_name} {user.last_name} | @{user.username}</h1>

            <h3> Home: {user.town}, {user.state} </h3>


            <ul class="userdetails">
                <li> Contact: {user.email} </li>
                <li> Home Church: {user.home_church} </li>
                <li href={"https://www.instagram.com/" + user.instagram} >IG: {user.instagram}</li>
            </ul>

            <button class="editprofile">Edit Profile </button>
        </div>
    )
}
export default Profile;
