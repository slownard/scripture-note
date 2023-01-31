import React from "react";



function ChurchCard({ church, removeCard }) {
    console.log(church.avatar_url)


    return (

        <li className="cards__item">
            <div className="card">

                {/* use image tag for avatar */}

                <div className="church__content">

                    <img height="300" width="250"
                        src={church.avatar_url}
                        alt="Church image"
                        className="church__image"
                    />
                    <div className="church__title">{church.name}</div>

                    <p className="church__text">{church.denomination}  </p>

                    <a>Lead Pastor: {church.pastor} </a>

                    <div className="church__detail">

                        <a href={"https://www.google.com/maps/search/?api=1&query=" + church.name} >{church.address}</a>

                        <a>IG: @{church.instagram} </a>

                        <span></span>

                        <a> {church.website} </a>
                    </div>

                    <button className="deletechurch" onClick={() => removeCard(church)}> x </button>
                </div>
            </div>
        </li>
    )
}

export default ChurchCard;