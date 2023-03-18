import React from 'react'
import Logo from './components/pages/Logo'
import Navbar from './components/pages/Navbar'
import Note from './components/pages/Note'
import Todo from './components/pages/Todo'
import Budget from './components/pages/Budget'
import Calendar from './components/pages/Calendar'
import Weather from './components/pages/Weather'
import './style/index.css'
import './style/navbar.css'
import './style/logo.css'
import './style/weather.css'


function App() {
  return (
      <div className="content">
        <section className="top-panel">
          <Logo />
          <Navbar />
        </section>
        <section className="main-content">
          <aside>
            <Weather/>
          </aside>
          <main>
            <Note />
            <Todo />
            <Budget />
            <Calendar />
          </main>
        </section>
      </div>
  );
}

export default App;
