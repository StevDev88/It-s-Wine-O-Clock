// import {useState} from 'react'
// import WineList from '../components/WineList'
// import Layout from '../components/Layout'

// export async function getServerSideProps() {
//     try {
//         let response = await fetch('http://localhost:3000/api/getWineList');
//         let wines = await response.json();
//         return {
//         props: { wines: JSON.parse(JSON.stringify(wines)) },
//         };
//     } catch (e) {
//         console.error(e);
//         return { props: { errorMessage: 'An error occurred' } };
//     }
// }

// export default function Home(props: any){

//   const [wines, setWines] = useState<[Wine]>(props.wines);

//     return(
//         <Layout>
//             <WineList wines={props.wines}  {...WineList}/>
//         </Layout>
//     )
// }
