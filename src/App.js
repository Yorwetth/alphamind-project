import React from 'react'
import Logo from './components/logo/Logo'
import Navbar from './components/navbar/Navbar'
import Calculator from './components/modals/Calculator'
import Chat from './components/modals/Chat'
import Strona from './components/pages/strona/Strona'
import Contacts from './components/modals/Contacts'
// import Note from './components/pages/Note/Note'
// import Todo from './components/pages/Todo/Todo'
// import Budget from './components/pages/Budget'
// import Calendar from './components/pages/Calendar'
import './style/index.css'


function App() {
  return (
      <div className="content">
        <Calculator />
        <Chat />
        <Contacts />
        <section className="top-panel">
          <Logo />
          <Navbar />
        </section>
        <Strona />
        {/* <Note /> */}
        {/* <Todo /> */}
        {/* <Budget /> */}
        {/* <Calendar /> */}
      </div>
  );
}
export default App;
