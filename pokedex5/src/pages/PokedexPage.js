import React, { useContext } from "react"
import { CardPokemonPokedex } from "../components/CardPokemonPokedex"
import { ContextPokemon } from "../Global/ContextPokemon"

const Pokedex = () =>{
    
    const state = useContext(ContextPokemon)
    console.log(state.pokedex)

    // const pokedexList = JSON.parse(localStorage.getItem("pokedex"))

    // console.log(pokedexList)
    
    const pokedexDetails = state.pokedex.map((pokemon) => {
        return <CardPokemonPokedex nome={pokemon}/>
    })

    return (
        <div>
            {pokedexDetails}
        </div>
    )
}

export default Pokedex