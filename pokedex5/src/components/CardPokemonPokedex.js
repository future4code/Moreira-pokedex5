import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { ContextPokemon } from "../Global/ContextPokemon";
import { BASE_URL } from "../constants/url";


const CardCointainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid blue ;
    width: 250px;
    height: 250px;
    border-radius: 15px;
    text-transform: capitalize;
    margin: 15px;
`
const ButtonDelete = styled.button`
    width: 100px;
    border: 1px solid red;
    background-color: white;
    margin: 10px 0px;
    height: 25px;
    border-radius: 15px;
    cursor: pointer;
`
const Secondbutton = styled.button`
    width: 100px;
    border: 2px solid blue;
    background-color: white;
    margin: 10px 0px;
    height: 25px;
    border-radius: 15px;
    cursor: pointer;
`


export const CardPokemonPokedex = (props) => {

    const urlPokemon = `${BASE_URL}/${props.nome}`

    const navigate = useNavigate()

    const goToDetails = (name) => {
        navigate(`/detalhespage/${name}`)
        setter.setTela("detailsPage")
    }
    const state = useContext(ContextPokemon)
    const setter = useContext(ContextPokemon)

    const excluirPokemon = (newItem) => {
        
        const newPokedex = [...state.pokedex];
        const indexPokemon = state.pokedex.findIndex((item) =>
            item === newItem
        )
        newPokedex.splice(indexPokemon, 1)
        setter.setPokedex(newPokedex);
        console.log(newPokedex)
    };

    // localStorage.setItem("pokedex", JSON.stringify(state.pokedex))
    

    console.log(state.pokedex)
    const [imagem, loadingImagem, errorImagem] = useRequestData(urlPokemon)

    return(
            <CardCointainer>
                <h3>{props.nome}</h3>
                <img src={imagem.sprites? imagem.sprites.versions['generation-v']['black-white'].animated.front_default : <p>imagem não encontrada</p>}/>
                <Secondbutton onClick={() => goToDetails(props.nome)}>Ver Detalhes</Secondbutton>
                <ButtonDelete onClick={() => excluirPokemon(props.nome)}>Remover</ButtonDelete>
            </CardCointainer>
    )
}