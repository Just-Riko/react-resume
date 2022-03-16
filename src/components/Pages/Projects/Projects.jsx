import s from './Projects.module.css'
import left from './../../../svg/left.svg'
import right from './../../../svg/right.svg'

import { useState } from 'react'
import Todo from './Todo list/ToDo'

let Projects = () => {

    let [page, setPage] = useState(1)

    let onClick = direction => {
        if (direction == 'left'){
            page == 1 ? setPage(4) : setPage(page-1)
        }
        else {
            page == 4 ? setPage(1) : setPage(page+1)
        }
    }

    let [modal, setmodal] = useState(false)

    return (
        <div>
            <a className={s.href} href="https://just-riko.github.io/someList/" target="_blank">Internet Market Imitation</a>
            <p className={s.note}>(no styles, only functional)</p>
            <div className={s.block}>
                <img src={left} className={s.svg} onClick={() => onClick('left')} />
                <div className={s.carucel}>
                    <img src={require(`./../../../img/market${page}.jpg`)} onClick={() => setmodal(!modal)} />
                </div>
                <img src={right} className={s.svg} onClick={() => onClick('right')} />
            </div>
            <div className={s.dots}>
                {[...Array(4)].map((i, ind) => <div key={ind} className={ ind == page-1 ? s.active : s.dot}></div>)}
            </div>
            <p className={s.description}>
                Internet market imitation, with Redux store, without styles.
                Search, sort, posibility to add or delete element, some troubles audits and more...
            </p>

            {modal
                ? <div className={s.modal} onClick={() => setmodal(!modal)}>
                    <div></div>
                    <img src={require(`./../../../img/market${page}.jpg`)} />
                    <div></div>
                </div>
                : null}

            <hr style={{width: '400px'}} />
            <p style={{fontSize: '28px', margin: '0 0 10px 0'}}>Common ToDo List</p>
            <Todo />
            <div style={{height: '20px'}}></div>
        </div>
    )
}

export default Projects