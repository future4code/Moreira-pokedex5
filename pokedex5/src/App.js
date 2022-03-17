import React from "react";
import Router from "./router/Router"
import GlobalState from "./Global/GlobalState"
//import { ContextPokemon } from "../src/contexts/context"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: auto;;
  }
`

function App() {

  
  return (
    <GlobalState >
      <GlobalStyle />
      <Router/>
    </GlobalState>
  );
}

export default App;
