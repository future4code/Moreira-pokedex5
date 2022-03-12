import React, { useContext } from "react"
import { CardPokemonPokedex } from "../components/CardPokemonPokedex"
import { ContextPokemon } from "../Global/ContextPokemon"
import styled from "styled-components"

const PokedexContainer = styled.div `
    display: grid ;
    grid-template-columns: repeat(4, 1fr) ;
    gap: 24px ;
`

const Pokedex = () =>{
    
    const state = useContext(ContextPokemon)
    
    const pokedexDetails = state.pokedex.map((pokemon) => {
        return <CardPokemonPokedex key={pokemon} nome={pokemon}/>
    })

    return (
        <PokedexContainer>
            {pokedexDetails}
        </PokedexContainer>
    )
}

export default Pokedex