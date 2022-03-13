import AboutMe from "../Pages/AboutMe/AboutMe"
import Contacts from "../Pages/Contacts/Contacts"
import Projects from "../Pages/Projects/Projects"
import { useEffect, useState } from 'react'

let CurrentPage = (props) => {

    let [progres, setProgres] = useState([0, 0, 0, 0])

    useEffect(() => {
        console.log("I decided to use this type Router not because I don't know how to use react-router, that's interim solution because of github bug with BrowserRouter")
        setTimeout(() => setProgres([80, 75, 75, 60]), 200)
    }, [])

    {
        switch (props.page) {
            case 'About Me':
                return <AboutMe progres={progres} />
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