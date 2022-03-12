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
        setter.setTela("pokedexPage")
        navigate("/pokedexpage")
    }
     const IrParaHomePage = () => {
        setter.setTela("homePage")
        navigate("/")
     }
     const VoltarTelaAnterior = () => {
        //  setter.setTela()
            navigate(-1)
     }

    return (
        <HeaderFormat>
            <ImgFormat
            alt="pokeapi-Logo"
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            />
            {state.tela === "homePage" && <ButtonFormat 
               onClick={IrparaPokedex}>
                Pokedex
            </ButtonFormat>
            }
            {state.tela === "pokedexPage" && <ButtonFormat 
               onClick={IrParaHomePage}>
                Home
            </ButtonFormat>
            }
            {state.tela === "detailsPage" && <ButtonFormat 
               onClick={VoltarTelaAnterior}>
                Voltar
            </ButtonFormat>

            }
        </HeaderFormat>
    )
}

export default Header;