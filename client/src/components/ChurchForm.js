import React, { useState } from "react";

function ChurchForm({ addNewChurch }) {

    const [churchImage, setChurchImage] = useState(null)
    const [name, setChurchName] = useState('')
    const [address, setChurchAddress] = useState('')
    const [denomination, setDenomination] = useState('')
    const [website, setWebsite] = useState('')
    const [pastor, setPastor] = useState('')
    const [instagram, setInstagram] = useState('')

    function handleSubmitChurch(e) {

        e.preventDefault()

        const newChurch = {
            name, address, denomination, website, pastor, instagram
        }
        addNewChurch(newChurch)
    }

    const newChurch = {
        name, address, denomination, website, pastor, instagram
    }

    return (
        <div>
            <h2>Add church: </h2>

            <form onSubmit={handleSubmitChurch}>

                <input
                    type="text"
                    name="Church name"
                    placeholder="name"
                    onChange={(e) => setChurchName(e.target.value)}
                    value={name}
                />

                <input
                    type="text"
                    name="Church address"
                    placeholder="address"
                    onChange={(e) => setChurchAddress(e.target.value)}
                    value={address}
                />

                <input
                    type="text"
                    name="denomination"
                    placeholder="denomination"
                    onChange={(e) => setDenomination(e.target.value)}
                    value={denomination}
                />

                <input
                    type="text"
                    name="website"
                    placeholder="website"
                    onChange={(e) => setWebsite(e.target.value)}
                    value={website}
                />

                <input
                    type="text"
                    name="pastor"
                    placeholder="pastor"
                    onChange={(e) => setPastor(e.target.value)}
                    value={pastor}
                />

                <input
                    type="text"
                    name="instagram"
                    placeholder="instagram"
                    onChange={(e) => setInstagram(e.target.value)}
                    value={instagram}
                />

                <input type="file"
                    onChange={e => setChurchImage(e.target.value)}
                    value={churchImage} />

                {/* <input type="submit"
                    value="Submit"
                /> */}


                <button type="submit">ADD CHURCH </button>
            </form>

        </div>
    )
}

export default ChurchForm;