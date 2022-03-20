import s from './AboutMe.module.sass'
import Circle from './Circle/Circle'

let AboutMe = props => {

    return (
        <>
            <h3 className={s.header}>Trainee/Junior Front-end developer</h3>
            <p className={s.text}>
                Well motivated, ambitious and responsible Front-end developer. Work with HTML,
                CSS (including grid and flex layouts) + Sass preprocessor , JavaScript, React and Redux.
                Ready to learn new technologies and improve in already learned knowledge.
                Wish to earn commercial experience and realize myself in promising, friendly company.
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