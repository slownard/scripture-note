import React, { useEffect, useState, useRef } from "react";

function NoteForm() {

    const [title, setTitle] = useState('')
    const [verse, setVerse] = useState('')
    const [churchId, setChurchId] = useState('')
    const [userId, setUserId] = useState('')
    const [file, setFile] = useState(null)

    const noteForm = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('title', title)
        formData.append('verse', verse)
        formData.append('church_id', churchId)
        formData.append('user_id', userId)
        formData.append('file', file)

        fetch('/notes', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: formData
        })
    }

    // church state for mapping church names into dropdown opt. 
    const [churches, setChurches] = useState([])
    useEffect(() => {
        fetch('/churches')
            .then(res => res.json())
            .then((data) => setChurches(data));
    }, [])
    console.log(churches);

    const handleChange = (e) => {
        setChurchId(e.target.value);
        console.log("get id pls", e.target.value);
    }

    const mapC = () => {
        return churches.map(c => (
            <option id={c.id} value={c.id}>
                {c.name}
            </option>
        ))
    }

    return (
        <div class="add-note">
            <h2>Add note: </h2>
            <form className="noteform" onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="Title"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />


                <input
                    type="text"
                    name="verse"
                    placeholder="verse"
                    onChange={(e) => setVerse(e.target.value)}
                    value={verse}
                />

                <label>Select church</label>
                <select onChange={handleChange}>
                    {mapC()}
                </select>

                {/* <input
                    type="text"
                    name="UserId"
                    placeholder="UserId"
                    onChange={(e) => setUserId(e.target.value)}
                    value={userId}
                /> */}

                <input className="selectnotefile"
                    type="file"
                    onChange={e => {
                        setFile(e.target.files[0]
                        )
                    }}
                    ref={noteForm}
                />


                <button className="submitnote" type="submit">ADD NOTE</button>

            </form>

        </div >
    )
}

export default NoteForm;