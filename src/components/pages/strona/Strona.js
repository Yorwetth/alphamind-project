import React from 'react'
import Weather from './Weather'

export default function Strona() {
    return (
        <section className="main-content">
            <aside>
                <header className="name-header">
                    <h2>
                        Hello Jonathan
                    </h2>
                </header>
                <Weather />
            </aside>
            <main>
                <div className="content-box">
                    <section className="note">Notatnik</section>
                    <section className="todo">Todo</section>
                    <section className="budget">Budżet</section>
                    <section className="calendar">Kalendarz</section>
                </div>
            </main>
        </section>
    )
}
