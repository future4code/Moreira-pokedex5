import React, { useContext } from "react"
import { CardPokemonPokedex } from "../components/CardPokemonPokedex"
import { ContextPokemon } from "../Global/ContextPokemon"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`


const Pokedex = () =>{
    
    const state = useContext(ContextPokemon)
    console.log(state.pokedex)

    // const pokedexList = JSON.parse(localStorage.getItem("pokedex"))

    // console.log(pokedexList)
    
    const pokedexDetails = state.pokedex.map((pokemon) => {
        return <CardPokemonPokedex nome={pokemon}/>
    })

    return (
        <Container>
            {pokedexDetails}
        </Container>
    )
}

export default Pokedex