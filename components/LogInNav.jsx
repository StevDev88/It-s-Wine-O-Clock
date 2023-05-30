import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import NextLink from 'next/link'
import { Link } from '@mui/material';

import { parseCookies } from 'nookies';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';


// const pages = ['Home', 'Friends', 'My Wines',];
// const pageUrls = ['/', 'friends', 'wineList',];

const LogInNavLinks = ['Sign Up', 'Log In']
const LogInNavUrls = ['register', 'login']

const LogInNav = () => {

    const cookies = parseCookies()
    const { data: session } = useSession()
    const router = useRouter()


    // console.log("COOKIES:", cookies)
    // console.log("USER:", user)
    // console.log('SESSION:', session)


    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

     return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Link
                        variant="h6"
                        noWrap
                        component={NextLink}
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Wine O'Clock
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {LogInNavLinks.map((page, index) => (
                                <Link key={LogInNavUrls[index]}
                                    underline='hover'
                                    textAlign="center"
                                    component={NextLink}
                                    href={LogInNavUrls[index]}
                                >
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        {page}
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        <Link
                            component={NextLink}
                            href="/"
                            color="inherit"
                            underline='none'
                        >
                            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        </Link>
                        <Link
                            component={NextLink}
                            href="/"
                            color="inherit"
                            underline='none'
                        >
                            Wine O'Clock
                        </Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {LogInNavLinks.map((page, index) => (
                            <Link
                                key={LogInNavLinks[index]}
                                component={NextLink}
                                href={LogInNavUrls[index]}
                            >
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}












    // {needLoginNav.map((page, index) => (
    //     <Link
    //         key={needLoginNavUrls[index]}
    //         underline='hover'
    //         textAlign='center'
    //         component={NextLink}
    //         href={needLoginNavUrls[index]}
    //     >
    //         <MenuItem
    //             key={needLoginNav}
    //             onClick={handleCloseNavMenu}
    //         >
    //             {page}
    //         </MenuItem>
    //     </Link>
    // ))}


export default LogInNav
