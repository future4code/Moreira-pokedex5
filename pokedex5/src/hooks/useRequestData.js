import { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url) {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")


    const getPokemons = () => {
        setIsLoading(true)
        axios.get(url)
        .then((res) => {
            setData(res.data)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setError(err)
        })
    }

    useEffect(() => {
        getPokemons()
    }, [url])

    return [data, isLoading, error]
}

