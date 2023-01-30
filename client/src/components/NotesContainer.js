import React, { useState, useEffect } from "react";
import NoteForm from "./NoteForm";
import NoteCard from "./NoteCard";

// import { Viewer, Worker } from '@react-pdf-viewer/core'
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

function NotesContainer() {
    const [note, setNote] = useState([])


    // FETCH NOTE DATA
    useEffect(() => {
        fetch('/notes')
            .then(res => res.json())
            .then((data) => setNote(data));
    }, [])
    console.log(note);

    // DELETE CARD
    const removeNote = (note) => {
        fetch(`/notes/${note.id}`, {
            method: "DELETE",
        })
        console.log(note.id)
    }

    // MAP NOTE ARRAY FOR EVERY NOTE
    const mapNotes = note.map((note) => {
        return <NoteCard
            key={note.id} note={note} removeNote={removeNote}
        />
    })

    return (
        <div className="notecontainer">

            <NoteForm />
            <ul className="notes">
                {mapNotes}
            </ul>
        </div>
    )
}
export default NotesContainer;