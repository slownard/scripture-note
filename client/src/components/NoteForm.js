import React, { useEffect, useState, useRef } from "react";

function NoteForm({ addNewNote }) {

    const [title, setTitle] = useState('')
    const [verse, setVerse] = useState('')
    const [churchId, setChurchId] = useState('')
    const [userId, setUserId] = useState('')
    const [pdf, setPdf] = useState(null)

    const noteForm = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('title', title)
        formData.append('verse', verse)
        formData.append('churchId', churchId)
        formData.append('userId', userId)
        formData.append('pdf', pdf)

        fetch('/notes', {
            method: 'POST',
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

    const mapC = () => {
        return churches.map(c => (
            <option name={c.name} id={c.name}>
                {c.name}
            </option>
        ))
    }

    return (
        <div class="add-note">
            <h2>Add note: </h2>
            <form onSubmit={handleSubmit}>


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
                <select>
                    {mapC()}
                </select>


                {/* <input
                    type="text"
                    name="UserId"
                    placeholder="UserId"
                    onChange={(e) => setUserId(e.target.value)}
                    value={userId}
                /> */}


                <input
                    type="file"
                    onChange={e => setPdf(e.target.files[0])}
                    ref={noteForm}

                />
                <button type="submit">ADD NOTE</button>


            </form>

        </div >
    )
}

export default NoteForm;