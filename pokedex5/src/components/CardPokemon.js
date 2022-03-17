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
    border: 1px solid yellow ;
    border-radius: 20px;
    //background-image: linear-gradient(to bottom right, red, yellow);
    height: 300px;
    width: 250px;
    margin-left:40px;
    transition: 0.55s;
    &:hover{
        box-shadow: 0px 10px 1px red;
    }
`
const Name = styled.h3`
    text-transform: capitalize;
    color:#2F3133;
`
const AddButton = styled.button`
    border: none;
    height: 35px;
    width: 120px;
    font-size: 15px;
    border-radius: 10px;
    margin-top:50px ;
    background-color: rgb(235, 235, 52);
    cursor: pointer;
    transition: 0.55s;
    &:hover{
        width: 125px;
        height: 40px;
    }
`
const DetailsButton = styled.button`
    border: 1px solid rgb(93, 103, 217);
    border-radius: 10px;
    height: 35px;
    width: 120px;
    background-color: white;
    font-size: 15px;
    font-style: italic;
    margin: 10px 0px;
    cursor: pointer;
    transition: 0.55s;
    &:hover{
        width: 125px;
        height: 40px;
    }
`
const Img = styled.img`
    height: 70px;
`
export const CardPokemon = (props) => {

    const urlPokemon = `${BASE_URL}/${props.nome}`

    const navigate = useNavigate()

    const goToDetails = (name) => {
        navigate(`/detalhespage/${name}`)
        setter.setTela("detailsPage")
    }

    const state = useContext(ContextPokemon)
    const setter = useContext(ContextPokemon)

    const addToPokedex = (newItem) => {
        
        const newPokedex = [...state.pokedex];
        
        if(newPokedex.includes(newItem)){
            alert("O pokemon ja foi adicionado")
        }
        else{
            newPokedex.push(newItem)
        }
    
        setter.setPokedex(newPokedex);
        
    };

    
    const excluirPokemon = (newItem) => {
        
        const newPokedex = [...state.pokedex];
        const indexPokemon = state.pokedex.findIndex((item) =>
            item === newItem
        )
        newPokedex.splice(indexPokemon, 1)
        setter.setPokedex(newPokedex);
        console.log(newPokedex)
    };

    
    const [imagem, loadingImagem, errorImagem] = useRequestData(urlPokemon)



    return(
        <CardCointainer>
            <Name>{props.nome}</Name>
            <Img src={imagem.sprites? imagem.sprites.versions['generation-v']['black-white'].animated.front_default : <p>imagem não encontrada</p>}/>
            {state.pokedex.includes(props.nome) &&  <AddButton onClick={() => excluirPokemon(props.nome)}>Remover</AddButton>}
            {state.pokedex.includes(props.nome) === false && <AddButton onClick={() => addToPokedex(props.nome)}>Adicionar</AddButton>}
            <DetailsButton onClick={() => goToDetails(props.nome)}>Ver Detalhes</DetailsButton>
        </CardCointainer>
    )

}