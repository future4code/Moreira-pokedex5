import React from "react"
import { CardPokemonPokedex } from "../components/CardPokemonPokedex"

const Pokedex = () =>{
    
    const pokedexList = JSON.parse(localStorage.getItem("pokedex"))

    console.log(pokedexList)
    
    const pokedexDetails = pokedexList.map((pokemon) => {
        return <CardPokemonPokedex nome={pokemon}/>
    })

    return (
        <div>
            {pokedexDetails}
        </div>
    )
}

export default Pokedex