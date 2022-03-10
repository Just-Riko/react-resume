import { NavLink, Route, Routes } from 'react-router-dom';
import s from './App.module.css'

function App() {
  return (<div className={s.wrapper}>
    <div className={s.sidebar}>
      Sidebar
      <br></br>
      <br></br>
      <ul>
        <li><NavLink to='/'>About me</NavLink></li>
        <li><NavLink to='/skills'>skills</NavLink></li>
        <li><NavLink to='/projects'>projects</NavLink></li>
        <li><NavLink to='/contacts'>contacts</NavLink></li>
      </ul>
    </div>

    <div className={s.block}>
      <div className={s.header}>Header</div>
      <div className={s.content}>

        <Routes>
          <Route path='/*' element={<div>About me</div>} />
          <Route path='/skills' element={<div>skills</div>} />
          <Route path='/projects' element={<div>projects</div>} />
          <Route path='/contacts' element={<div>contacts</div>} />
        </Routes>

      </div>
    </div>

  </div>)
}

export default App;
