import React from 'react'
import Logo from './components/logo/Logo'
import Navbar from './components/navbar/Navbar'
import Weather from './components/weather/Weather'
import Note from './components/pages/Note/Note'
// import Todo from './components/pages/Todo'
// import Budget from './components/pages/Budget'
// import Calendar from './components/pages/Calendar'
import './style/index.css'


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
            {/* <Note/> */}
          </aside>
          <main>
            <div className="content-box">
              <section className="note">Notatnik</section>
              <section className="todo">Todo</section>
              <section className="budget">Budżet</section>
              <section className="calendar">Kalendarz</section>
            </div>
            {/* Każda opcja wyłącza content-box oraz Weather */}
            {/* <Note /> */}
            {/* <Todo /> */}
            {/* <Budget /> */}
            {/* <Calendar />  */}
          </main>
        </section>
      </div>
  );
}

export default App;
