import styles from '../styles/login.module.css'

import axios from "axios"
import cookie from "js-cookie"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import NextLink from "next/link";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { toast } from "react-toastify"

import { useState } from "react"
import { useRouter } from "next/router"
import { parseCookies } from "nookies"
import { useSession, signIn, signOut } from "next-auth/react"

const defaultTheme = createTheme()

const login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter()

    const { data: session } = useSession()
    const cookies = parseCookies()

    const user = cookies?.user ? JSON.parse(cookies.user) : ""

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            const config = {
            headers: {
                "Content-Type": "application/json"
            },
        }

        const { data } = await axios.post(`/api/userLogin`, { email, password }, config)

        // console.log('DATA:', data)

        cookie.set('token', data?.token)
        cookie.set('user', JSON.stringify(data?.user))

        router.push('/')

        toast.success("Log in successful!")

        } catch (error) {

            toast.error(error.response.data.message)

        }


    }

    if (session || user) {
        router.push('/')
    }

    return (
    <>    
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
        className={styles.formBackground}
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link component={NextLink} href="register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>


    
    {/* Integrate new Google auth after building main app functionality. */}

    <button onClick={() => signIn('google')}>Sign in with Google</button>





    </>
    )
}
export default login
