import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ContextPokemon } from "../Global/ContextPokemon";


const HeaderFormat = styled.div `
    background-color: red;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 2px;
    border: 1px solid black;
`

const ImgFormat = styled.img `
    width: 160px;
`

const ButtonFormat = styled.button `
    height: 50px;
    cursor: pointer;
    background: transparent;
    font-size: 20px;
    border-radius: 10px;
    color: #4160a0 ;
    border: #4160a0 ;
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;
    font-family: 'pokemon-font';

    &:hover {
        color: red;
        background-color: #f7c925;
        
    }
`

const Header = () =>{
    
    const state = useContext(ContextPokemon)
    const setter = useContext(ContextPokemon)
    const navigate = useNavigate()

    const IrparaPokedex = () => {
        setter.setTela(state.tela + 1)
        navigate("/pokedexpage")
    }
     const IrParaHomePage = () => {
        setter.setTela(state.tela - 1)
        navigate("/")
     }
     const VoltarTelaAnterior = () => {
         setter.setTela(state.tela - 2)
            navigate(-1)
     }
 
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
     };


    return (
        <HeaderFormat>
            <ImgFormat
            alt="pokeapi-Logo"
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            />
            {state.tela === 1 && <ButtonFormat 
               onClick={IrparaPokedex}>
                Pokedex
            </ButtonFormat>
            }
            {state.tela === 2 && <ButtonFormat 
               onClick={IrParaHomePage}>
                Home
            </ButtonFormat>
            }
            {(state.tela === 3 || state.tela === 4) && <ButtonFormat 
               onClick={VoltarTelaAnterior}>
                Voltar
            </ButtonFormat>
            }
            {state.pokedex.includes(state.nome) && (state.tela === 3 || state.tela === 4) && 
            <ButtonFormat onClick={() => excluirPokemon(state.nome)}>Remover</ButtonFormat>}
            {state.pokedex.includes(state.nome) === false && (state.tela === 3 || state.tela === 4) &&
            <ButtonFormat onClick={() => addToPokedex(state.nome)}>Adicionar</ButtonFormat>}
        </HeaderFormat>
    )
}

export default Header;