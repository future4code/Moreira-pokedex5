import React, { useContext, useState } from "react"
import { CardPokemon } from "../components/CardPokemon";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ContextPokemon } from "../Global/ContextPokemon";

const HomeContainer = styled.div `
    display: grid ;
    grid-template-columns: repeat(4, 1fr) ;
    gap: 24px ;
`

const Home = () =>{

    const navigate = useNavigate()
    const request = useContext(ContextPokemon)
    const state = useContext(ContextPokemon)

    const pokemonsList = request.request.pokemons.results && request.request.pokemons.results.map((pokemon) => {
        return <CardPokemon key = {pokemon.name} nome={pokemon.name} url={pokemon.url}/>
    })

    
    return (
        <div>
            {request.request.loadingPokemons && <p>Carregando...</p>}
            {!request.request.loadingPokemons && request.request.errorPokemons && <p>Ops, ocorreu um erro! :/</p>}
            {!request.request.loadingPokemons && request.request.pokemons.results && request.request.pokemons.results.length === 0 && (
        <p>Não foi encontrado nenhum personagem</p>)}
            {!request.request.loadingPokemons && request.request.pokemons.results && request.request.pokemons.results.length > 0 && <HomeContainer>{pokemonsList}</HomeContainer>}
            
        </div>
    )
}

export default Home