import React, { useState, useEffect } from "react";
import ChurchCard from "./ChurchCard";
import ChurchForm from "./ChurchForm";

function ChurchContainer() {
    const [church, setChurch] = useState([])

    // FETCH CHURCH DATA
    useEffect(() => {
        fetch('/churches')
            .then(res => res.json())
            .then((data) => setChurch(data));
    }, [])
    console.log(church);

    // DELETE CARD
    const removeCard = (church) => {
        fetch(`/churches/${church.id}`, {
            method: "DELETE",
        })
        console.log(church.id)
    }
    // MAP CHURCH ARRAY FOR EVERY CHURCH
    const mapChurches = church.map((church) => {
        return <ChurchCard
            key={church.id} church={church} removeCard={removeCard} />
    })

    return (
        <div className="churchcontainer">

            <ChurchForm />
            <ul className="churches">
                {mapChurches}
            </ul>
        </div>
    )
}

export default ChurchContainer;