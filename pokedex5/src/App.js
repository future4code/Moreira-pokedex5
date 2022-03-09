import React from "react";
import Router from "./router/Router"
import GlobalState from "./Global/GlobalState"

function App() {

  
  return (
    <GlobalState >
      <Router/>
    </GlobalState>
  );
}

export default App;
