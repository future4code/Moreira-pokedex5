import React, { useState } from "react"
import { BASE_URL } from "../constants/url"
import { useRequestData } from "../hooks/useRequestData"
import { CardPokemon } from "../components/CardPokemon";
import styled from "styled-components";

const HomeContainer = styled.div `
    display: grid ;
    grid-template-columns: repeat(4, 1fr) ;
    gap: 24px ;
`

const Home = () =>{

    const [pokemons, loadingPokemons, errorPokemons] = useRequestData(`${BASE_URL}`)

    const pokemonsList = pokemons && pokemons.map((pokemon, index) => {
        return <CardPokemon key = {index} nome={pokemon.name} url={pokemon.url}/>
    })
    
    return (
        <div>
            {loadingPokemons && <p>Carregando...</p>}
            {!loadingPokemons && errorPokemons && <p>Ops, ocorreu um erro! :/</p>}
            {!loadingPokemons && pokemons && pokemons.length === 0 && (
        <p>Não foi encontrado nenhum personagem</p>)}
            {!loadingPokemons && pokemons && pokemons.length > 0 && <HomeContainer>{pokemonsList}</HomeContainer>}
            
        </div>
    )
}

export default Home