import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"
import NextLink from "next/link"
import Link from "@mui/material/Link"

import { parseCookies } from "nookies"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"

import dynamic from "next/dynamic"

const UserEmail = dynamic(() => import("../components/UserEmail"), {
	ssr: false,
})
const LoggedInUserMenu = dynamic(
	() => import("../components/LoggedInUserMenu"),
	{
		ssr: false,
	}
)

const pages = ["Home", "Friends", "My Wines", "Add New Wine"]
const pageUrls = ["/", "/friends", "/wines", "/wines/addWine"]

function Nav() {
	const cookies = parseCookies()
	const { data: session } = useSession()
	const router = useRouter()

	const user = cookies?.user
		? JSON.parse(cookies.user)
		: session?.user
		? session?.user
		: ""

	// console.log("COOKIES:", cookies)
	// console.log("USER:", user)
	// console.log('SESSION:', session)

	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<AdbIcon
						sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
					/>
					<Link
						variant='h6'
						noWrap
						component={NextLink}
						href='/'
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						Wine O'Clock
					</Link>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}>
							{pages.map((page, index) => (
								<Link
									key={pageUrls[index]}
									underline='hover'
									textAlign='center'
									component={NextLink}
									href={pageUrls[index]}>
									<MenuItem
										key={page}
										onClick={handleCloseNavMenu}>
										{page}
									</MenuItem>
								</Link>
							))}
						</Menu>
					</Box>
					<Typography
						variant='h5'
						noWrap
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}>
						<Link
							component={NextLink}
							href='/'
							color='inherit'
							underline='none'>
							<AdbIcon
								sx={{
									display: { xs: "flex", md: "none" },
									mr: 1,
								}}
							/>
						</Link>
						<Link
							component={NextLink}
							href='/'
							color='inherit'
							underline='none'>
							Wine O'Clock
						</Link>
					</Typography>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						}}>
						{pages.map((page, index) => (
							<Link
								key={pageUrls[index]}
								component={NextLink}
								href={pageUrls[index]}>
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: "white",
										display: "block",
									}}>
									{page}
								</Button>
							</Link>
						))}
					</Box>
					<UserEmail />

					{user ? <LoggedInUserMenu /> : ""}
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default Nav
