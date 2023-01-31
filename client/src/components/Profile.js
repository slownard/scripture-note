import React from "react";
import demouser from "../images/demouser.jpg"


function Profile({ user }) {



    return (
        <div class="user">
            <img class="userimg" src={demouser} height="300" width="250" />

            <h1 className="username"> {user.first_name} {user.last_name} | @{user.username}</h1>
            {/* <h2 class="title"> @{user.username} </h2> */}

            <h3> Home: {user.town}, {user.state} </h3>

            {/* <h3 class="title"> @{user.username} </h3> */}

            <ul class="userdetails">
                <li> Contact: {user.email} </li>
                <li> Home Church: {user.home_church} </li>
                <li href={"https://www.instagram.com/" + user.instagram} >IG: {user.instagram}</li>
            </ul>
        </div>
    )
}
export default Profile;

{/* <a href={"https://www.instagram.com/" + user.instagram} >{user.instagram}</a>

<a href={"https://www.google.com/maps/search/?api=1&query=" + name} >{address}</a> */}