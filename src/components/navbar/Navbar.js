import React from 'react'
import './navbar.css'

export default function navbar() {
    return (
            <nav className="site-nav">
                <ul className="navigation">
                    <li className="nav-item">
                        <a href="Index.html" className="a-item">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="Index.html" className="a-item">
                            Kontakty
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="a-item">
                            Kalkulator
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="Index.html" className="a-item">
                            Support
                        </a>
                    </li>
                    <li>
                        <button className="toggle">
                            <span className="material-symbols-outlined toggle">
                                logout
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>                     
    )
}
