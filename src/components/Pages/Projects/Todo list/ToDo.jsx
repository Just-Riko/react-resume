import { useEffect, useState } from 'react'
import s from './ToDo.module.sass'

let Todo = () => {

    let [list, setList] = useState(JSON.parse(localStorage.getItem('todoListR')) || [])

    useEffect(()=> {
        localStorage.setItem('todoListR', JSON.stringify(list))
    }, [list])

    let greenButton = id => {
        setList(list.map(i => {
            if (i.id === id) {
                i.status = !i.status
            }
            return i
        }))
    }

    let [input, setInput] = useState('')

    let add = e => {
        if (e.key === 'Enter') {
            if (input == '') {
                return
            }
            let ell = {
                text: input,
                status: 1,
                id: list.length == 0 ? 1 : [...list].sort((a, b) => b.id - a.id)[0].id + 1
            }
            setList([ell, ...list])
            setInput('')
        }
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
        <input value={input} placeholder="write your task" onChange={e => setInput(e.currentTarget.value)} onKeyPress={add} />
        <p className={s.note}>-don'n work with epmty string-</p>
    </div>)
}

export default Todo 