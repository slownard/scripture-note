import React from "react";
import NoteCard from "./NoteCard";
import NoteSearch from "./NoteSearch";

function NotesContainer() {

    // const noteArray = note.map((notes) => {
    //     return
    //     <NoteCard notes={notes} />
    // })


    return (
        <div className="notecontainer">

            {/* {noteArray} */}

            <NoteSearch />

        </div>
    )
}
export default NotesContainer;