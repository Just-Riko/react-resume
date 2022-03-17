import { useState } from 'react'
import s from './ToDo.module.css'

let Todo = () => {

    let state = [
        {
            text: 'buy rise',
            status: 1,
            id: 1
        },
        {
            text: 'buy bread',
            status: 1,
            id: 2
        }
    ]
    let [list, setList] = useState(state)

    let greenButton = id => {
        let ell = list.filter(i => i.id == id)[0]
        ell.status = 0
        setList([...list.filter(i => i.id != id), ell])
    }

    let [input, setInput] = useState('')

    let add = () => {
        if (input == '') {
            return
        }
        let ell = {
            text: input,
            status: 1,
            id: list.length == 0 ? 1 : [...list].sort((a, b) => b.id - a.id)[0].id + 1
        }
        setList([...list, ell])
        setInput('')
    }

    return (<div className={s.block}>
        {list.length == 0 
        ? <div className={s.noToDos}>- No ToDos -</div>
        : list.map((i, ind) => {
            return <div className={s.element} key={ind}>
                <span style={{ textDecoration: i.status ? 'none' : 'line-through', textAlign: 'start', padding: '0 0 0 30px' }}>{i.text}</span>
                {i.status
                    ? <span onClick={() => greenButton(i.id)} style={{ color: 'green', cursor: 'pointer' }}>&#9745;</span>
                    : <span onClick={() => setList([...list.filter(x => x.id != i.id)])} style={{ color: 'darkred', cursor: 'pointer' }}>&#9746;</span>}
            </div>
        })}
        <div className={s.addBlock}>
            <input value={input} onChange={e => setInput(e.currentTarget.value)} />
            <span className={s.add} onClick={add}>Add</span>
        </div>
        <span className={s.note}>-don'n work with epmty string-</span>
    </div>)
}

export default Todo 