// import styles from '../styles/UserEmail.module.css'

import { parseCookies } from 'nookies';


const UserEmail = () => {

    const cookies = parseCookies()
    const user = cookies?.user ? JSON.parse(cookies.user) : ""

    return (
        <>
            {user && user.email}
        </>
    )
}

export default UserEmail
