import { useEffect, useState } from "react";

 

export const CharacterList = () => {
    const [characters, setCharacters] = useState();
    

    useEffect(() => {
        fetch(`https://swapi.dev/api/people`)
        .then(res => res.json())
        .then(result => {
            setCharacters(result.results)
        })
    }, [])


    return (
        <ul>
            
            {characters ? characters.map(c => (
                 <li key={c.name}>{c.name}</li> 
                )) : <li>Loading...</li>}
        </ul>
    );

}