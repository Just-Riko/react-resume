import s from './Projects.module.css'
import left from './../../../svg/left.svg'
import right from './../../../svg/right.svg'

let Projects = () => {
    return (
        <div>
            <a className={s.href} href="https://just-riko.github.io/someList/" target="_blank">Internet Market Imitation</a>
            <div className={s.block}>
                <img src={left} className={s.svg} />
                <div className={s.carucel}>
                    <div>img</div>
                </div>
                <img src={right} className={s.svg} />
            </div>
            <br />
            <br />
            ToDo list
        </div>
    )
}

export default Projects