import styles from '../styles/UserEmail.module.css'

import { parseCookies } from 'nookies';


const UserEmail = () => {

    const cookies = parseCookies()
    const user = cookies?.user ? JSON.parse(cookies.user) : ""

    return (
        <>
            <div className={styles.div}>
                {user && user.email}
            </div>
        </>
    )
}

export default UserEmail
