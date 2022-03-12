import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRequestData } from "../hooks/useRequestData";
import { ContextPokemon } from "../Global/ContextPokemon";
import { BASE_URL } from "../constants/url";

const CardCointainer = styled.div `
    border: 1px solid black ;
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
            <h3>Nome:{props.nome}</h3>
            <img src={imagem.sprites? imagem.sprites.versions['generation-v']['black-white'].animated.front_default : <p>imagem não encontrada</p>}/>
            {state.pokedex.includes(props.nome) &&  <button onClick={() => excluirPokemon(props.nome)}>Remover</button>}
            {state.pokedex.includes(props.nome) === false && <button onClick={() => addToPokedex(props.nome)}>Adicionar</button>}
            <button onClick={() => goToDetails(props.nome)}>Ver Detalhes</button>
        </CardCointainer>
    )

}