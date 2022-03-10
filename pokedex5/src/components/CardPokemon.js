import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";

const CardCointainer = styled.div `
    border: 1px solid black ;
`

export const CardPokemon = (props) => {

    const urlPokemon = props.url

    const navigate = useNavigate()

    const goToDetails = (name) => {
        navigate(`/detalhespage/${name}`)
    }

    const [imagem, loadingImagem, errorImagem] = useRequestData(urlPokemon)


    return(
        <CardCointainer>
            <h3>Nome:{props.nome}</h3>
            <img src={imagem.sprites? imagem.sprites.versions['generation-v']['black-white'].animated.front_default : <p>imagem não encontrada</p>}/>
            <button>Adicionar</button>
            <button onClick={() => goToDetails(props.nome)}>Ver Detalhes</button>
        </CardCointainer>
    )

}