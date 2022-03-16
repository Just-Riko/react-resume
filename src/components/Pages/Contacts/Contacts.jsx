import s from './Contacts.module.css'

let Contacts = () => {
    return (<div className={s.block}>
        <p className={s.topic}>Write and call at convenient time for you</p>
        <div className={s.table}>
            <ul>
                <li><span>Telegram</span><span>@JebbUniverse</span></li>
                <li><span>Instagram</span><a target="_blank" href='https://www.instagram.com/jebb_universe/'>@jebb_universe</a></li>
                <li><span>LinkedIn</span><span>Pavlo Kitchak</span></li>
                <li><span>GitHub</span><a target="_blank" href='https://github.com/Just-Riko'>Just-Riko</a></li>
            </ul>
        </div>
    </div>)
}

export default Contacts