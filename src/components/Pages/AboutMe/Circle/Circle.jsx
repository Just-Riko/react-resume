import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import s from './Circle.module.css'
import './Circle.css'

let Circle = props => {
    return (
        <li className={s.li}>
            <div className={s.circle}><CircularProgressbar value={props.number} maxValue={100} text={`${props.number}%`} /></div>
            {props.text}
        </li>
    )
}

export default Circle