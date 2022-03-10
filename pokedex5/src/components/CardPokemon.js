import React, { useContext } from "react";
import styled from "styled-components";
import { useRequestData } from "../hooks/useRequestData";

const CardCointainer = styled.div `
    border: 1px solid black ;
`

export const CardPokemon = (props) => {

    const urlPokemon = props.url

    const [imagem, loadingImagem, errorImagem] = useRequestData(urlPokemon)


    return(
        <CardCointainer>
            <h3>Nome:{props.nome}</h3>
            <img src={imagem.sprites? imagem.sprites.versions['generation-v']['black-white'].animated.front_default : <p>imagem não encontrada</p>}/>
            <button>Adicionar</button>
            <button onClick={props.verDetalhes}>Ver Detalhes</button>
        </CardCointainer>
    )

}