import React from 'react'
import './todo.css'

export default function TodoAside() {
    return (
        <div className="status">
                <header className="todo-header">
                    <h2>
                        Utwórz
                    </h2>
                </header>
                    <input type="text" placeholder="Twoje zadanie..." id="todo-input" />
                    <button id="note-btn" data-target-modal="#todo_form">Add Todo</button>
                    <div className="drop default"></div>
        </div>
    )
}
