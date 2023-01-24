import React, { useState, useEffect } from "react";
import ChurchCard from "./ChurchCard";
import ChurchForm from "./ChurchForm";

function ChurchContainer() {
    const [church, setChurch] = useState([])

    useEffect(() => {
        fetch('/churches')
            .then(res => res.json())
            .then((data) => setChurch(data));
    }, [])
    console.log(church);



    function addNewChurch(newChurch) {

        fetch('/churches', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newChurch)
        })
            .then((res) => res.json())
            .then((data) => setChurch([data, ...church]));
    }


    const mapChurches = church.map((church) => {
        return <ChurchCard key={church.id} church={church} />
    })

    return (
        <div>

            {/* <Nav /> */}

            <ChurchForm addNewChurch={addNewChurch} />

            <ul className="churches">
                {mapChurches}
            </ul>


        </div>
    )
}

export default ChurchContainer;