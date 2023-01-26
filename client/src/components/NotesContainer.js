import React, { useState, useEffect } from "react";
import NoteCard from "./NoteCard";
import NoteSearch from "./NoteSearch";


function NotesContainer() {

    // const noteArray = note.map((notes) => {
    //     return
    //     <NoteCard notes={notes} />
    // })

    const [note, setNote] = useState([])

    useEffect(() => {
        fetch('/notes')
            .then(res => res.json())
            .then((data) => setNote(data));
    }, [])
    console.log(note);




    return (
        <div className="notecontainer">

            {/* {noteArray} */}

            <NoteSearch />

        </div>
    )
}
export default NotesContainer;