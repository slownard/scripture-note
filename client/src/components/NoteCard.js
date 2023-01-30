import React, { useState } from "react";
import { Viewer, Worker } from '@react-pdf-viewer/core'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

// import { Document, Page } from 'react-pdf';


function NoteCard({ note, removeNote }) {

    // const [viewPdf, setViewPdf] = useState(null)
    console.log(note.file_url)

    return (

        <li className="cards__item">
            <div className="card">

                <div className="note__content">

                    <div className="note__title">{note.title}</div>

                    <p className="note__text">{note.verse}  </p>


                    <div className="note__detail">
                        {/* pdf goes in here */}
                        {/* <Worker workerUrl={note.file} >
                        </Worker> */}

                        {/* <Document file={note.file} onLoadSuccess={onDocumentLoadSuccess}>
                            <Page pageNumber={pageNumber} />
                        </Document> */}

                        {/* <p>
                            Page {pageNumber} of {numPages}
                        </p> */}

                        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
                            <Viewer fileUrl={note.file_url} />
                        </Worker>



                    </div>

                    {/* <button type="submit" className="view-button">View PDF</button> */}

                    <button className="deletenote" onClick={() => removeNote(note)}> x </button>
                </div>
            </div>
        </li>
    )
}
export default NoteCard;