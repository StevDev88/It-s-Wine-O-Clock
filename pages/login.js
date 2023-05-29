import axios from "axios"
import cookie from "js-cookie"

import { useState } from "react"
import { useRouter } from "next/router"
import { useSession, signIn, signOut } from "next-auth/react"

// import styles from '../styles/login.module.css'

const login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const { data: session } = useSession()
    console.log(session)

    const submitHandler = async (e) => {
        e.preventDefault()

        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        }

        const { data } = await axios.post(`/api/userLogin`, { email, password }, config)

        console.log('DATA:', data)
        cookie.set('token', data?.token)
        cookie.set('user', JSON.stringify(data?.user))

        router.push('/')
    }

    const logOutHandler = async () => {
        if (session) {
            signOut()
        }
        cookie.remove('token')
        cookie.remove('user')
    }


    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={logOutHandler}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in

            <br />

            <form onSubmit={submitHandler}>
                <h1>Log In</h1>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <input value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="submit">Log In</button>
            </form>

            <br />

            <button onClick={() => signIn('google')}>Sign in with Google</button>
        </>
    )
}
export default login
