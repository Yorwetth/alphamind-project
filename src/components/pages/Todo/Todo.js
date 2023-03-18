import React from 'react'
import './todo.css'

export default function Todo() {
    return (
        <div className="todo-container">
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

            <div className="status">
            <header className="todo-header">
                <h2>
                    Do zrobienia
                </h2>
            </header>
                <div className="drop">
                    <div className="todo">
                        <p className="todo-text">Słoiki zalane sedesem. Jebasć arkę gdynię.
                        </p>
                        <span class="close">
                            x
                        </span>
                    </div>
                </div>
            </div>

            <div className="status">
            <header className="todo-header">
                <h2>
                    W trakcie
                </h2>
            </header>
                <div className="drop"></div>
            </div>

            <div className="status">
            <header className="todo-header">
                <h2>
                    Ukończone
                </h2>
            </header>
                <div className="drop"></div>
            </div>
        </div>
    )
}
