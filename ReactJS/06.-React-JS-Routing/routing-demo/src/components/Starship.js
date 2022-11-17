import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Link, Route, Routes } from 'react-router-dom';

const Starship = () => {
    const [ starship, setStarship ] = useState({});

    const { starshipId } = useParams();

    const navigate = useNavigate();

    const location = useLocation();
    console.log(location)

    useEffect(() => {
        fetch(`https://swapi.dev/api/starships/${starshipId}/`)
            .then(res => res.json())
            .then(data => setStarship(data))
    }, [starshipId, navigate])

    const nextProductHandler = () => {
        navigate(`/starships/${Number(starshipId) + 1}`)
    }

    return (
        <>
        <h1>Products Page</h1>

        <h3>Product {starshipId} specs</h3>
        <ul>
            <li>Name: {starship.name}</li>
            <li>Model: {starship.model}</li>
            <li>Manufacturer: {starship.manufacturer}</li>
            <li>Cost in credits: {starship.cost_in_credits}</li>

<button onClick={nextProductHandler} >Next</button>

        </ul>

<h2>Movies</h2>
{console.log(starship.films)}
        <nav>
            <ul>
                {starship.films?.map((x, i) => 
                <li key={x}>
                    <Link to={`films/${i + 1}`}>Film {i + 1}</Link>
                </li>
                )}
            </ul>
        </nav>
        <section>
            <Routes>
            <Route path={`films/1`} element={<h3>Film 1</h3> } />
            <Route path={`films/2`} element={<h3>Film 2</h3> } />
            <Route path={`films/3`} element={<h3>Film 3</h3> } />
            </Routes>
        </section>
        </>
    );
}

export default Starship