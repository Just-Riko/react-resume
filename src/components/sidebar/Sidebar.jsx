import Li from './Li/Li'
import s from './sidebar.module.css'

let Sidebar = (props) => {

    return (
        <div className={s.sidebar}>
            <ul>
                <Li text='About Me' click={props.click} />
                <Li text='Projects' click={props.click} />
                <Li text='Contacts' click={props.click} />
            </ul>
        </div>
    )
}

export default Sidebar