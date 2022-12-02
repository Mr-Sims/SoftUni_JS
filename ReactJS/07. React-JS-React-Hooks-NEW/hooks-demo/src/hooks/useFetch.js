import { useState, useEffect } from "react"


const useFetch = (url, defaultValue) => {

    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(result => {
                setIsLoading(false)
                setData(Object.values(result))
            })
    }, [url]);

    return [data, setData, isloading];
} 

export default useFetch;