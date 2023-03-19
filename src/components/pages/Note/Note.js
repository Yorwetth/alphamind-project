import React from 'react'
import NoteAside from './NoteAside'
import './note.css'

export default function Note() {
    return (
        <section className="main-content">
            <aside>
                <NoteAside />
            </aside>
            <main>
                <form className="note-container">
                    <input className="note-title" type="text" placeholder="Tytuł" name="title" required/>
                    <textarea className="note-body" name="text-body" required></textarea>
                    <submit className="note-btn">Add Note</submit>
                </form>
            </main>
        </section>
    )
}
