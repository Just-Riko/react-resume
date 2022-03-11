import s from './AboutMe.module.css'

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
            <p className={s.text}>
                HTML, CSS, JS, React, Redux
            </p>
            <h3 className={s.header}>English</h3> Upper-Intermediate
        </>
    )
}

export default AboutMe