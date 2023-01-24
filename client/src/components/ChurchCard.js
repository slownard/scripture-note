import React from "react";

function ChurchCard({ church }) {

    return (

        <li className="cards__item">
            <div className="card">

                {/* use image tag for avatar */}
                {/* <img
                    src={image}
                    alt={name}
                    className="church__image"
                /> */}

                <div className="church__content">

                    <div className="church__title">{church.name}</div>

                    <p className="church__text">{church.denomination}  </p>

                    <a>{church.pastor} </a>

                    <div className="church__detail">

                        <a href={"https://www.google.com/maps/search/?api=1&query=" + church.name} >{church.address}</a>

                        <a> {church.instagram} </a>

                        <a> {church.website} </a>
                    </div>
                </div>
            </div>
        </li>


    )
}

export default ChurchCard;