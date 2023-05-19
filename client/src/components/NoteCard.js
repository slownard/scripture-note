import React from "react";
// import { Viewer, Worker } from '@react-pdf-viewer/core'
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

// import { Document } from 'react-pdf/dist/esm/entry.webpack';
// import { PDFViewer } from 'react-pdf-js';

function NoteCard({ note, removeNote }) {

    console.log(note.file_url)

    return (

        <li className="notecards__item">

            <div className="notecard">

                <div className="note__title">{note.title}</div>
                <p className="note__text">{note.verse}  </p>
                <div className="note__detail">
                    <a>{note.church_id} </a>
                    <a>{note.user_id} </a>
                </div>

                <button className="viewnote" type="submit" >View DOC</button>
                <button className="deletenote" onClick={() => removeNote(note)}> remove </button>
                {/* </div> */}
            </div>
        </li >
    )
}
export default NoteCard;