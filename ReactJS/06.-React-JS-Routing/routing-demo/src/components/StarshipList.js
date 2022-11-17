import { useEffect, useState } from "react"
import {Link} from 'react-router-dom';

const StarshipList = () => {

    const [starships, setStarships] = useState([])
    
    useEffect(() => {
        fetch('https://swapi.dev/api/starships')
            .then(res => res.json())
            .then(data => setStarships(data.results))
    }, [])
    
    return (
        <>
        <h2>StarshipList</h2>
        <ul>
            {starships.map((x, i) => <li key={x.name}><Link  to={`/starships/${i + 1}`}>{x.name}</Link> </li>)}
        </ul>
        </>
    )
} 

export default StarshipList