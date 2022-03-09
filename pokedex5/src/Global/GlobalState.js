import React from "react";
import { ContextPokemon } from "./ContextPokemon";
import { BASE_URL } from "../constants/url";
import { useRequestData } from "../hooks/useRequestData";
import { useState } from "react";

const GlobalState = (props) => {

    const [pokemons, loadingPokemons, errorPokemons] = useRequestData(`${BASE_URL}`)


    const request = { pokemons,loadingPokemons,errorPokemons }

    return (
        <ContextPokemon.Provider value={{request}}>
            {props.children}
        </ContextPokemon.Provider>
    )

}

export default GlobalState;