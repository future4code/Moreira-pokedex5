import HomePage from "../pages/HomePage";
import PokedexPage from "../pages/PokedexPage";
import DetalhesPage from "../pages/DetalhesPage";
import ErroPage from "../pages/ErroPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
    
                    <Route path='/pokedexpage' element={<PokedexPage/>} />

                    <Route path='/detalhespage' element={<DetalhesPage/>} />

                    <Route path='/erropage' element={<ErroPage/>} />
                </Routes>
            
            </BrowserRouter>
        </div>
    )
}

export default Router
