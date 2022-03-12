import React from "react"
import { useRequestData } from "../hooks/useRequestData"
import { useNavigate, useParams } from "react-router-dom"
import { BASE_URL } from "../constants/url"
import styled from "styled-components"

const ContaineDetails = styled.div`
    border: 1px solid black ;
    display: flex ;
    justify-content: space-evenly ;
`
const ContainerImages = styled.div`
    border: 1px solid black ;
    display: flex ;
    flex-direction: column ;
    justify-content: space-around ;
`

const ContainerImagem = styled.img`
    border: 1px solid black ;
`

const ContainerStats = styled.div`
    border: 1px solid black ;
`
const ContainerTypes = styled.div`
    border: 1px solid black ;
`
const ContainerMoves = styled.div`
    border: 1px solid black ;
`

const Detalhes = () =>{

    const params = useParams().name

    const [pokemonDetails, loadingDetails, errorDetails] = useRequestData(`${BASE_URL}/${params}`)

    const stats = pokemonDetails.stats && pokemonDetails.stats.map((item) => {
        return (<div key={item.stat.name}>
            <p>{item.stat.name}: {item.base_stat}</p>
        </div>)
    })

    const types = pokemonDetails.types && pokemonDetails.types.map((item) => {
        return <div key={item.type.name}>
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
           <p> Stats</p>
           {stats}
           </ContainerStats>
           <div>
           <ContainerTypes>
           <p>Tipos</p>
           {types}
           </ContainerTypes>
           <ContainerMoves>
           <p>Moves</p>
           <p>{pokemonDetails.moves && pokemonDetails.moves[0].move.name}</p>
           <p>{pokemonDetails.moves && pokemonDetails.moves[1].move.name}</p>
           <p>{pokemonDetails.moves && pokemonDetails.moves[2].move.name}</p>
           </ContainerMoves>
           </div>
        </ContaineDetails>
    )
}

export default Detalhes