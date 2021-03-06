import s from './App.module.sass'
import Sidebar from './components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import CurrentPage from './components/CurrentPage/CurrentPage';

function App() {

  let [page, setPage] = useState(localStorage.getItem('currentPage') || 'About Me')

  useEffect(() => {
    localStorage.setItem('currentPage', page)
  }, [page])

  return (
    <div className={s.wrapper}>


      <div className={s.header}><span className={s.span1}>Pavlo</span> <span className={s.span2}>Kitchak</span></div>
      <div className={s.underHeader}>Trainee/Junior Front-end developer</div>
      <Sidebar click={setPage} />
      <div className={s.content}>

        <CurrentPage page={page} />

      </div>

    </div>
  )
}

export default App;
