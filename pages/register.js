import { useState } from "react"

// import styles from '../styles/register.module.css'

const register = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword] = useState('')
    const submitHandler = async (e) => {
        e.preventDefault()
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
