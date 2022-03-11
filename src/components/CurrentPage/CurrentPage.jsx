import AboutMe from "../Pages/AboutMe/AboutMe"
import Contacts from "../Pages/Contacts/Contacts"
import Projects from "../Pages/Projects/Projects"

let CurrentPage = (props) => {
    {
        switch (props.page) {
            case 'About Me':
                return <AboutMe />
            case 'Projects':
                return <Projects />
            case 'Contacts':
                return <Contacts />
            default:
                return <div>Something went wrong</div>
        }
    }
}

export default CurrentPage