import { useState } from "react"
import axios from "axios"

// import styles from '../styles/register.module.css'

const register = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword] = useState('')
    const submitHandler = async (e) => {
        e.preventDefault()

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.token}`
            },
        }

        const { data } = await axios.post(`/api/userRegister`, {email, password}, config )

    }

    return (
        <>
        <form onSubmit={submitHandler}>
        <h1>Register</h1>        
        <input value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Register</button>
        </form>
        </>
    )
}

export default register
