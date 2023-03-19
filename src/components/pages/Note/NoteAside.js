import React from 'react'
import './note.css'

export default function NoteAside() {
    return (
        <div className="notes-container">
            <header className="notes-header">
                <h2>
                    Twoje Notatki
                </h2>
            </header>
            <div className="note-list-item">
                <div className="note-titles">test</div>
                <div className="note-bodys">test test test test test test test testtest test test test</div>
                <div className="note-dates">Poniedziałek 20.03.2023</div>
            </div>
        </div>
    )
}
