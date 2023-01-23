import React, { useState } from "react";

function NoteForm({ addNewNote }) {

    const [title, setTitle] = useState('')
    const [verse, setVerse] = useState('')
    const [churchId, setChurchId] = useState('')
    const [userId, setUserId] = useState('')
    const [pdf, setPdf] = useState(null)

    const handleSubmit = (e) => {

        e.preventDefault()

        // fetch('/', {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accepts': 'application/json'
        //     },
        //     body: JSON.stringify(title, verse, churchId, userId, pdf)
        // })

        const newNote = {
            title, verse, churchId, userId, pdf
        }

        addNewNote(newNote)
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

                <input
                    type="text"
                    name="churchId"
                    placeholder="churchId"
                    onChange={(e) => setChurchId(e.target.value)}
                    value={churchId}
                />

                <input
                    type="text"
                    name="UserId"
                    placeholder="UserId"
                    onChange={(e) => setUserId(e.target.value)}
                    value={userId}
                />

                <input
                    type="file"
                    name="pdf"
                    placeholder="pdf"
                    onChange={(e) => setPdf(e.target.value)}
                    value={pdf}
                />
                <button type="submit">ADD NOTE</button>


            </form>

        </div>
    )
}

export default NoteForm;