import React from 'react'
import Logo from './components/logo/Logo'
import Navbar from './components/navbar/Navbar'
import Main from './components/pages/strona/Main'
// import Test from './components/strona/test'
// import NoteAside from './components/pages/Note/noteAside'
// import Note from './components/pages/Note/Note'
// import Todo from './components/pages/Todo/Todo'
// import TodoAside from './components/pages/Todo/todoAside'
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
        <Main />
        {/* <Test /> */}
        {/* <Note /> */}
        {/* <Todo /> */}
      </div>
  );
}
export default App;
