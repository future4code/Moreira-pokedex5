import React, { useContext } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextPokemon } from "../Global/ContextPokemon";



const HeaderFormat = styled.div `
    background-color: red;
    height: 80px;
    display: flex;
    flex-directiom: row;
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

    // const [tela, setTela] = useState("homePage")
    
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
        </HeaderFormat>
    )
}

export default Header;