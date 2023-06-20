// import Link from 'next/link';
// import styles from '../styles/WineList.module.css'
// import { useRouter } from 'next/router';


// export default function WineList(props) {

//     const router = useRouter()

//     const handleDeleteWine = async (wineId) => {
//         try {
//           let response = await fetch(
//             "http://localhost:3000/api/deleteWine?id=" + wineId,
//             {
//               method: "POST",
//               headers: {
//                 Accept: "application/json, text/plain, */*",
//                 "Content-Type": "application/json",
//               },
//             }
//           );
//           response = await response.json()
//           router.push('/home')
//         } catch (error) {
//           console.log("An error occurred while deleting ", error);
//         }
//       };


//     return (
//         <>
//             <div className={styles.fullWineList}>
//                 <h1 className={styles.h1}>Top 20 Added Wines</h1>
//                 {props.wines.length > 0 ? (
//                     <ul className={styles.ul}>
//                         {props.wines.map((wine, index) => {
//                         return (
//                             <li key={index}>
//                                 <div className={styles.individualWine}>
//                                     <img src={wine.image} className={styles.img} />
//                                     <h2>{wine.name}</h2>
//                                     <strong>{wine.color}</strong>
//                                         <p>{wine.description}</p>
//                                 </div>
//                                 <div className={styles.options}>
//                                     <Link href={`/wines/${wine._id}`}>Edit</Link>
//                                     <button onClick={() => handleDeleteWine(wine._id)}>Delete</button>
//                                 </div>
//                             </li>
//                     );
//                     })}
//                 </ul>
//                 ) : (
//                 <h2 className={styles.h2}>Ooops! No wines added so far</h2>
//                 )}
//             </div>
//         </>
//     )
// }


import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const wines = [
  { name: 'Wine 1', color: 'Red', description: 'Description for Wine 1' },
  { name: 'Wine 2', color: 'White', description: 'Description for Wine 2' },
  { name: 'Wine 3', color: 'Rosé', description: 'Description for Wine 3' },
  { name: 'Wine 4', color: 'Red', description: 'Description for Wine 4' },
  { name: 'Wine 5', color: 'White', description: 'Description for Wine 5' },
];

const defaultTheme = createTheme()

console.log(defaultTheme)


const WineList = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
        <List
        sx={{
            display: 'flex',
            justifyContent: 'space-between',
            listStyleType: 'none',
            padding: 0,
            margin: 0,
        }}>
        {wines.map((wine, index) => (
            <ListItem key={index}>
            <ListItemText>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="151" height="381" viewBox="0 0 151 381">
  <path d="M75.5 0v8.5h30v6h15v-6h30V0H75.5zm30 8.5h-30v6h30v-6zm-15 9h-15v334.19c0 8.677 6.893 15.81 15.486 15.998l.514.002c8.594-.188 15.5-7.32 15.5-15.998V17.5h-15zm30 16h-30v297.682c0 4.532-2.515 8.833-6.68 11.01L75.5 341l-17.82-7.808C55.015 323.515 52.5 319.214 52.5 314.682V33.5h-30V17.5h105v16z" fill="#800000"/>
  <rect x="58" y="200" width="35" height="150" fill="#FFF"/>
  <text x="75.5" y="320" fill="#000" font-family="Arial" font-size="14" text-anchor="middle">WINE</text>
</svg> */}
<svg xmlns="http://www.w3.org/2000/svg" width="151" height="381" viewBox="0 0 151 381">
  <path d="M50 0h51v51h-51zM25 51v330h101V51zm0 330c0-33.1 26.9-60 60-60s60 26.9 60 60h-15c0-24.8-20.2-45-45-45s-45 20.2-45 45H25zm105 0c0-16.6 13.4-30 30-30s30 13.4 30 30h-15c0-8.3-6.7-15-15-15s-15 6.7-15 15h-15zm-75-330H0v381h151V51h-46z" fill="#800000"/>
  <rect x="38" y="160" width="75" height="161" fill="#FFF"/>
  <text x="75.5" y="250" fill="#000" font-family="Arial" font-size="14" text-anchor="middle">WINE</text>
</svg>
                <Typography variant="h4" component="h2">{wine.name}</Typography>
                <Typography variant="body1" component="strong">{wine.color}</Typography>
                <Typography variant="body2" component="p">{wine.description}</Typography>
            </ListItemText>
            </ListItem>
        ))}
        </List>
    </ThemeProvider>
  );
};

export default WineList;
