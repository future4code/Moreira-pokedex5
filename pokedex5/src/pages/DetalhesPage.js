import React from "react"
import { useRequestData } from "../hooks/useRequestData"
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../constants/url"
import styled from "styled-components"

const ContaineDetails = styled.div`
    border: 3px solid red ;
    margin: 5px auto;
    display: flex ;
    flex-direction: column;
    width: 300px;
    padding: 5px;
    border-radius: 15px;
`
const ContainerImages = styled.div`
    display: flex ;
    justify-content: space-around ;
    margin-top: -6px ;
`
const ContainerImagem = styled.img`
    height: 90px;
`
const ContainerStats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
`
const H3 = styled.h3`
    margin-top: -7px ;
`
const ContainerTypes = styled.div`
    border: 1px solid blue ;
    width: 100px;
    text-align: center;
    border-radius: 15px;
`
const ContainerMoves = styled.div`
    border: 1px solid yellow ;
    border-radius: 15px;
    width: 100px;
    text-align: center;
`
const StatsPokemon = styled.p`
    border: 1px solid red;
    height: 20px;
    width: 150px;
    border-radius: 10px;
    text-transform: capitalize;
    padding-top:3px ;
    text-align: center;
`
const TypeMove = styled.div`
    display: flex;
    justify-content: center;
    justify-content: space-evenly;
    margin-top: -15px;
`
const P = styled.p`
    margin-top: -15px;
`

const Detalhes = () =>{

    const params = useParams().name

    const [pokemonDetails, loadingDetails, errorDetails] = useRequestData(`${BASE_URL}/${params}`)

    const stats = pokemonDetails.stats && pokemonDetails.stats.map((item) => {
        return (<div>
            <StatsPokemon>{item.stat.name}: {item.base_stat}</StatsPokemon>
        </div>)
    })

    const types = pokemonDetails.types && pokemonDetails.types.map((item) => {
        return <div>
            <p>{item.type.name}</p>
        </div>
    })



    return (
        <ContaineDetails>  
           <ContainerImages>
           <ContainerImagem src ={pokemonDetails.sprites && pokemonDetails.sprites.front_default}/>
           <ContainerImagem src ={pokemonDetails.sprites && pokemonDetails.sprites.back_default}/>
           </ContainerImages>
           <ContainerStats>
           <H3>Stats</H3>
           <P>{stats}</P>
           </ContainerStats>
           <TypeMove>
           <ContainerTypes>
           <h3>Tipos</h3>
           {types}
           </ContainerTypes>
           <ContainerMoves>
           <h3>Moves</h3>
           <p>{pokemonDetails.moves && pokemonDetails.moves[0].move.name}</p>
           <p>{pokemonDetails.moves && pokemonDetails.moves[1].move.name}</p>
           <p>{pokemonDetails.moves && pokemonDetails.moves[2].move.name}</p>
           </ContainerMoves>
           </TypeMove>
        </ContaineDetails>
    )
}

export default Detalhes