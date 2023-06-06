import { Container } from "@mui/material"
import Header from "./Header"
import Nav from "./Nav";

// import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
        <Container>
            <Header />
            { children }
        </Container>
        </>
    )
}

export default Layout
