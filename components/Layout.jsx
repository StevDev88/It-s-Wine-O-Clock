import styles from "../styles/Layout.module.css"

import Container from "@mui/material/Container"
import Header from "./Header"

const Layout = ({ children }) => {
	return (
		<>
			<div>
				<Container className={styles.div}>
					<Header />
					{children}
				</Container>
			</div>
		</>
	)
}

export default Layout
