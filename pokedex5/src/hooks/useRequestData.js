import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export function useRequestData(url) {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")


    const getPokemons = () => {
        setIsLoading(true)
        axios.get(url)
        .then((res) => {
            setData(res.data.results)
            setIsLoading(false)
        })
        .catch((err) => {
            alert(err.response)
            setIsLoading(false)
            setError(err)
        })
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return [data, isLoading, error]
}

