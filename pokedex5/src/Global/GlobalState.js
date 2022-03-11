import React from "react";
import { ContextPokemon } from "./ContextPokemon";
import { BASE_URL } from "../constants/url";
import { useRequestData } from "../hooks/useRequestData";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const GlobalState = (props) => {

    const [pokemons, loadingPokemons, errorPokemons] = useRequestData(`${BASE_URL}`)
    const [pokedex, setPokedex] = useState([])

    const request = { pokemons,loadingPokemons,errorPokemons }

    localStorage.setItem("pokedex", JSON.stringify(pokedex))

    return (
        <ContextPokemon.Provider value={{request, pokedex, setPokedex}}>
            {props.children}
        </ContextPokemon.Provider>
    )

}

export default GlobalState;