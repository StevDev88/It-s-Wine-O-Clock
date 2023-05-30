// import styles from '../styles/Header.module.css'
// import Nav from './Nav'

import { parseCookies } from 'nookies';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import dynamic from 'next/dynamic'

const LogInNav = dynamic(() => import('../components/LogInNav'), {
    ssr: false,
})

const Nav = dynamic(() => import('../components/Nav'), {
    ssr: false,
})


const Header = () => {

    const cookies = parseCookies()
    const { data: session } = useSession()

    const user = cookies?.user ? JSON.parse(cookies.user) : session?.user ? session?.user : ''

    if (user || session){
    return (
        <>
            <Nav />
        </>
    )
}
    return(
        <>
            <LogInNav />
        </>
    )
}

export default Header
