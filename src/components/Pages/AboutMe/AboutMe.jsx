import s from './AboutMe.module.css'
import Circle from './Circle/Circle'

let AboutMe = props => {

    return (
        <>
            <h3 className={s.header}>Trainee/Junior Front-end developer</h3>
            <p className={s.text}>
                Don't have work experience, yet. Learning fast, self-motavated,
                have good understanding of algorithms, good knowledge of HTML, CSS, JS.
                Learning React/Redux, plan to study Typescript in the nearby future.
                Want to improve skills, earn experiance and grow as Front-end
                or Fullstack developer in progressive company.
            </p>
            <h3 className={s.header}>Skills</h3>
            <ul className={s.list}>
                <Circle number={props.progres[0]} text="HTML" />
                <Circle number={props.progres[1]} text="CSS" />
                <Circle number={props.progres[2]} text="JS" />
                <Circle number={props.progres[3]} text="React" />
            </ul>
            <p className={s.note}>
                -numbers in circles are very subjective and taken only from my mind-
            </p>
            <h3 className={s.header}>English</h3>
            <p className={s.english}>Upper-Intermediate</p>
            <div className={s.englishBlock}>
                <div className={s.balls}>
                    <div className={s.ball}><span className={s.spanText}>A1</span></div>
                    <div className={s.ball}><span className={s.spanText}>A2</span></div>
                    <div className={s.ball}><span className={s.spanText}>B1</span></div>
                    <div className={s.ball}><span className={s.spanText}>C2</span></div>
                    <div className={s.ball}><span className={s.spanText}>C1</span></div>
                    <div className={s.ball} style={{ border: '3px solid cadetblue', fontWeight: 600 }}><span className={s.spanText}>B2</span></div>
                </div>
                <div className={s.line}></div>
            </div>
        </>
    )
}

export default AboutMe