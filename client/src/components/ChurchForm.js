import React, { useState, useRef } from "react";

function ChurchForm({ addNewChurch }) {

    const [avatar, setChurchAvatar] = useState(null)
    const [name, setChurchName] = useState('')
    const [address, setChurchAddress] = useState('')
    const [denomination, setDenomination] = useState('')
    const [website, setWebsite] = useState('')
    const [pastor, setPastor] = useState('')
    const [instagram, setInstagram] = useState('')

    const churchForm = useRef()

    const handleSubmitChurch = (e) => {

        e.preventDefault()

        const formData = new FormData()
        formData.append('name', name)
        formData.append('address', address)
        formData.append('denomination', denomination)
        formData.append('website', website)
        formData.append('pastor', pastor)
        formData.append('instagram', instagram)
        formData.append('avatar', avatar)

        fetch('/churches', {
            method: 'POST',
            // headers: {
            //     "Content-Type": "application/json"
            // },
            body: formData
        })
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

                <input
                    type="file"
                    onChange={e => setChurchAvatar(e.target.files[0])}
                    ref={churchForm}

                />


                <button type="submit">ADD CHURCH </button>
            </form>

        </div>
    )
}

export default ChurchForm;