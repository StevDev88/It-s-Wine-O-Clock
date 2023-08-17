import styles from "../styles/WineList.module.css"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Link from "next/link"
import Grid from "@mui/material/Unstable_Grid2"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { useRouter } from "next/router"

const defaultTheme = createTheme()

const WineList = (props) => {
	const router = useRouter()

	const handleDeleteWine = async (wineId) => {
		try {
			let response = await fetch(
				`http://localhost:3000/api/deleteWine?id=${wineId}`,
				{
					method: "POST",
					headers: {
						Accept: "application/json, text/plain, */*",
						"Content-Type": "application/json",
					},
				}
			)
			response = await response.json()

			router.push("/wines")
		} catch (error) {
			console.log("ERROR:", error)
		}
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container maxWidth='lg'>
				<Box
					sx={{
						listStyleType: "none",
						padding: 0,
						margin: 0,
						maxWidth: "100%",
					}}>
					<List className={styles.wineList}>
						<Grid
							container
							spacing={2}
							display='flex'
							justifyContent='space-evenly'>
							{props.wines.map((wine, index) => (
								<Grid key={wine._id}>
									<Card
										className={styles.card}
										sx={{
											maxWidth: 190,
											height: "100%",
										}}>
										<Box>
											<CardMedia
												className={styles.img}
												component='img'
												alt={wine.name}
												image={wine.image}
											/>
											<CardContent>
												<Typography
													gutterBottom
													variant='h5'
													component='div'>
													{wine.name}
												</Typography>
												<Typography
													gutterBottom
													variant='body1'>
													{wine.color}
												</Typography>
												<Typography
													variant='body2'
													color='text.secondary'>
													{wine.description}
												</Typography>
											</CardContent>
										</Box>
										<CardActions
											className={styles.cardActions}>
											<Link href={`/wines/${wine._id}`}>
												<Button size='small'>
													Edit
												</Button>
											</Link>
											<Button
												size='small'
												onClick={() =>
													handleDeleteWine(wine._id)
												}>
												Delete
											</Button>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					</List>
				</Box>
			</Container>
		</ThemeProvider>
	)
}

export default WineList
