import { useState } from "react"
import axios from "axios"
import cookie from "js-cookie"

// import styles from '../styles/login.module.css'

const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = async (e) => {
        e.preventDefault()

        const config = {
            headers: {
                "Content-Type": "application/json"
            },
        }

        const { data } = await axios.post(
            `/api/userLogin`,
            { email, password },
            config
        )

        console.log('DATA:', data)

        cookie.set('token', data?.token)
        cookie.set('user', JSON.stringify(data?.user))

    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <h1>Log In</h1>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <input value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Log In</button>
            </form>
        </>
    )
}

export default login
