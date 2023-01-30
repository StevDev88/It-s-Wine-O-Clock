import { Container } from "@mui/material"
import Header from "./Header"

import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
        <div>
            <Container className={styles.div}>
                <Header />
                { children }
            </Container>
        </div>
        </>
    )
}

export default Layout
