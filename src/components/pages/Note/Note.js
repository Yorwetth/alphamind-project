import React from 'react'
import './note.css'

export default function Note() {
    return (
        <form className="note-container turn-off">
            <input className="note-title" type="text" placeholder="Tytuł" name="title" required/>
            <textarea className="note-body" name="text-body" required></textarea>
            <submit className="note-btn">Add Note</submit>
        </form>
    )
}
