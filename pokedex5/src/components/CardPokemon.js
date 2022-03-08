import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const CardCointainer = styled.div `
    border: 1px solid black ;
`

export const CardPokemon = (props) => {
    const [img, setImg] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const urlPokemon = props.url

    const getPokemons = (url) => {
        setIsLoading(true)
        axios.get(urlPokemon)
        .then((res) => {
            setImg(res.data.sprites.front_default)
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
    }, [urlPokemon])

    return(
        <CardCointainer>
            <h3>Nome:{props.nome}</h3>
            <img src={img}/>
            <button>Adicionar</button>
            <button>Ver Detalhes</button>
        </CardCointainer>
    )

}