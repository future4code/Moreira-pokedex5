import React from "react";
import { ContextPokemon } from "./ContextPokemon";
import { BASE_URL } from "../constants/url";
import { useRequestData } from "../hooks/useRequestData";
import { useState } from "react";

const GlobalState = (props) => {
    const [tela, setTela] = useState(1)
    const [pokemons, loadingPokemons, errorPokemons] = useRequestData(`${BASE_URL}`)
    const [pokedex, setPokedex] = useState([])
    const [nome, setNome] = useState("")

    const request = { pokemons,loadingPokemons,errorPokemons }

    return (
        <ContextPokemon.Provider value={{tela, setTela, request, pokedex, setPokedex, nome, setNome}}>
            {props.children}
        </ContextPokemon.Provider>
    )

}

export default GlobalState;