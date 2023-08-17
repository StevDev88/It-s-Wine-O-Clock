import styles from "../styles/login.module.css"

import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { parseCookies } from "nookies"

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme()

export default function AddWineForm() {
	const [name, setName] = useState("")
	const [image, setImage] = useState("")
	const [color, setColor] = useState("")
	const [size, setSize] = useState("")
	const [price, setPrice] = useState("")
	const [region, setRegion] = useState("")
	const [protectedOrigin, setProtectedOrigin] = useState("")
	const [flavorProfile, setFlavorProfile] = useState("")
	const [description, setDescription] = useState("")
	const [error, setError] = useState("")
	const [message, setMessage] = useState("")

	const { data: session } = useSession()
	const cookies = parseCookies()

	const user = cookies?.user
		? JSON.parse(cookies.user)
		: session?.user
		? session?.user
		: ""

	const email = user.email

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (name) {
			try {
				let response = await fetch("/api/addWine", {
					method: "post",
					body: JSON.stringify({
						name,
						image,
						color,
						size,
						price,
						region,
						protectedOrigin,
						flavorProfile,
						description,
						email,
					}),
					headers: {
						Accept: "application/json, text/plain, */*",
						"Content-Type": "application/json",
					},
				})

				response = await response.json()
				setName("")
				setImage("")
				setColor("")
				setSize("")
				setPrice("")
				setRegion("")
				setProtectedOrigin("")
				setDescription("")
				setError("")
				setMessage("Added successfully")
			} catch (errorMessage) {
				setError(errorMessage)
			}
		} else {
			return setError("All fields are required")
		}
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
					className={styles.formBackground}
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component='h1' variant='h5'>
						Add a new wine to your collection:
					</Typography>
					<Box
						component='form'
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									autoComplete='name'
									name='name'
									required
									fullWidth
									id='name'
									label='Name of the wine'
									autoFocus
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id='lastName'
									label='Last Name'
									name='lastName'
									autoComplete='family-name'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
								/>
							</Grid>
							Add 1-10 wine rating option
							{/* <Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									autoComplete='email'
								/>
							</Grid> */}
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									autoComplete='new-password'
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}>
							🍾 Add Wine
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	)
}

// export function AddWineForm() {
// 	const [name, setName] = useState("")
// 	const [image, setImage] = useState("")
// 	const [color, setColor] = useState("")
// 	const [size, setSize] = useState("")
// 	const [price, setPrice] = useState("")
// 	const [region, setRegion] = useState("")
// 	const [protectedOrigin, setProtectedOrigin] = useState("")
// 	const [flavorProfile, setFlavorProfile] = useState("")
// 	const [description, setDescription] = useState("")
// 	const [error, setError] = useState("")
// 	const [message, setMessage] = useState("")

// 	const handleSubmit = async (e) => {
// 		e.preventDefault()
// 		if (name) {
// 			try {
// 				let response = await fetch("/api/addWine", {
// 					method: "post",
// 					body: JSON.stringify({
// 						name,
// 						image,
// 						color,
// 						size,
// 						price,
// 						region,
// 						protectedOrigin,
// 						flavorProfile,
// 						description,
// 					}),
// 					headers: {
// 						Accept: "application/json, text/plain, */*",
// 						"Content-Type": "application/json",
// 					},
// 				})

// 				response = await response.json()
// 				setName("")
// 				setImage("")
// 				setColor("")
// 				setSize("")
// 				setPrice("")
// 				setRegion("")
// 				setProtectedOrigin("")
// 				setDescription("")
// 				setError("")
// 				setMessage("Added successfully")
// 			} catch (errorMessage) {
// 				setError(errorMessage)
// 			}
// 		} else {
// 			return setError("All fields are required")
// 		}
// 	}

// 	return (
// 		<form onSubmit={handleSubmit} className={styles.form}>
// 			{error && (
// 				<div className={styles["alert-error"]}>{error.toString()}</div>
// 			)}
// 			{message && (
// 				<div className={styles["alert-message"]}>
// 					{message.toString()}
// 				</div>
// 			)}
// 			<div className={styles["form-group"]}>
// 				<label>Name</label>
// 				<input
// 					type='text'
// 					placeholder='Name of the wine'
// 					onChange={(e) => setName(e.target.value)}
// 					value={name}
// 					className={styles.input}
// 				/>
// 			</div>
// 			<div className={styles["form-group"]}>
// 				<label>Image</label>
// 				<input
// 					type='text'
// 					placeholder='Image URL'
// 					onChange={(e) => setImage(e.target.value)}
// 					value={image}
// 					className={styles.input}
// 				/>
// 			</div>
// 			<div className={styles["form-group"]}>
// 				<label>Color</label>
// 				<input
// 					type='text'
// 					placeholder='White, red, rose, bubbly, etc.'
// 					onChange={(e) => setColor(e.target.value)}
// 					value={color}
// 					className={styles.input}
// 				/>
// 			</div>
// 			<div className={styles["form-group"]}>
// 				<label>Size</label>
// 				<input
// 					type='text'
// 					placeholder='Volume in ml'
// 					onChange={(e) => setSize(e.target.value)}
// 					value={size}
// 					className={styles.input}
// 				/>
// 			</div>
// 			<div className={styles["form-group"]}>
// 				<label>Price</label>
// 				<input
// 					type='text'
// 					placeholder='Price in USD'
// 					onChange={(e) => setPrice(e.target.value)}
// 					value={price}
// 					className={styles.input}
// 				/>
// 			</div>
// 			<div className={styles["form-group"]}>
// 				<label>Region</label>
// 				<input
// 					type='text'
// 					placeholder='Region of origin'
// 					onChange={(e) => setRegion(e.target.value)}
// 					value={region}
// 					className={styles.input}
// 				/>
// 			</div>
// 			<div className={styles["form-group"]}>
// 				<label>Protected Origin?</label>
// 				<input
// 					type='text'
// 					placeholder='Type of legally protected origin like DOCG'
// 					onChange={(e) => setProtectedOrigin(e.target.value)}
// 					value={protectedOrigin}
// 					className={styles.input}
// 				/>
// 			</div>
// 			<div className={styles["form-group"]}>
// 				<label>Flavor Profile</label>
// 				<input
// 					type='text'
// 					placeholder='Flavor notes like cherry, dark chocolate, etc.'
// 					onChange={(e) => setFlavorProfile(e.target.value)}
// 					value={flavorProfile}
// 					className={styles.input}
// 				/>
// 			</div>
// 			<div className={styles["form-group"]}>
// 				<label>Description</label>
// 				<textarea
// 					name='description'
// 					placeholder='Description of the wine'
// 					value={description}
// 					onChange={(e) => setDescription(e.target.value)}
// 					cols={20}
// 					rows={8}
// 					className={styles.input}
// 				/>
// 			</div>
// 			<div className={styles["form-group"]}>
// 				<button type='submit' className={styles.submit_btn}>
// 					🍾 Add Wine
// 				</button>
// 			</div>
// 		</form>
// 	)
//
