import s from './AboutMe.module.css'
import Circle from './Circle/Circle'

let AboutMe = () => {
    return (
        <>
            <h3 className={s.header}>Trainee/Junior Front-end developer</h3>
            <p className={s.text}>
                Don't have work experience, yet. Learning fast, self-motavated,
                have good understanding of algorithms, good knowledge of HTML and CSS,
                basic JS (Array methods, prototypes, classes, promises, asinc await, DOM,
                fetch, arrou functions...). Doing my own test projects like: JS site constructor,
                image carousel. React in progress.
            </p>
            <h3 className={s.header}>Skills</h3>
            <ul className={s.list}>
                <Circle number="80" text="HTML" />
                <Circle number="75" text="CSS" />
                <Circle number="75" text="JS" />
                <Circle number="60" text="React/Redux" />
            </ul>
            <h3 className={s.header}>English</h3> Upper-Intermediate
        </>
    )
}

export default AboutMe