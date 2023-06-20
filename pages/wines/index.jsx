import {useState} from 'react'
import WineList from '../../components/WineList'

export async function getServerSideProps() {
    try {
        let response = await fetch('http://localhost:3000/api/getWineList');
        let wines = await response.json();
        return {
        props: { wines: JSON.parse(JSON.stringify(wines)) },
        };
    } catch (e) {
        console.error(e);
        return { props: { errorMessage: 'An error occurred' } };
    }
}

export default function Home(props){

  const [wines, setWines] = useState(props.wines);

    return(
            <WineList wines={props.wines}  {...WineList}/>
    )
}
