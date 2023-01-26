import React from "react";
// import { Viewer, Worker } from '@react-pdf-viewer/core'
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'



function NoteCard({ notes }) {

    const {
        title, verse, churchId, userId, pdf
    } = notes

    return (

        <div classname="notecard">


            <h1>{title} </h1>
            <h2>{verse} </h2>
            <h3>{userId} </h3>
            <h3>{churchId} </h3>

        </div>
    )
}
export default NoteCard;