import React, { useEffect, useState } from "react";
import ChurchContainer from "./ChurchContainer";
import Nav from "./Nav";
import NoteForm from "./NoteForm";
import NotesContainer from "./NotesContainer";
import NoteSearch from "./NoteSearch";

function Home() {

    const [note, setNote] = useState([])


    // useEffect(() => {
    //     fetch('notes')
    //         .then((res) => res.json())
    //         .then((data) => setNote(data))
    // }, [])

    function addNewNote({ newNote }) {

        fetch('/notes', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ newNote })
        })
            .then((res) => res.json())
            .then((data) => setNote([data, ...note]));
    }

    return (
        <div>

            {/* <Nav /> */}
            <NotesContainer note={note} />
            <NoteForm addNewNote={addNewNote} />
            <NoteSearch />

        </div>
    )
}

export default Home;