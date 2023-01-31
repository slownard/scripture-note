import React from "react";
// import { Viewer, Worker } from '@react-pdf-viewer/core'
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'

// import { Document } from 'react-pdf/dist/esm/entry.webpack';
// import { PDFViewer } from 'react-pdf-js';

function NoteCard({ note, removeNote }) {

    // const [viewPdf, setViewPdf] = useState(null)
    console.log(note.file_url)

    // const newplugin = defaultLayoutPlugin()
    // const numPage, set
    // function onDocumentLoadSuccess({ null})

    return (

        <li className="notecards__item">

            <div className="notecard">

                {/* <div className="note__content"> */}

                <div className="note__title">{note.title}</div>
                <p className="note__text">{note.verse}  </p>
                <div className="note__detail">
                    <a>{note.church_id} </a>
                    <a>{note.user_id} </a>


                    {/* pdf goes in here */}
                    {/* <Worker workerUrl={note.file} > */}
                    {/* </Worker> */}

                    {/* <Document file={note.file_url} > */}
                    {/* <Page pageNumber={pageNumber} /> */}
                    {/* </Document> */}
                    {/* <p>
                            Page {pageNumber} of {numPages}
                        </p> */}
                    {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
                            <Viewer fileUrl={note.file_url} plugins={[newplugin]} />
                        </Worker> */}
                    {/* <PDFViewer document={note.file_url} /> */}
                </div>

                <button className="viewnote" type="submit" >View DOC</button>
                <button className="deletenote" onClick={() => removeNote(note)}> remove </button>
                {/* </div> */}
            </div>
        </li >
    )
}
export default NoteCard;