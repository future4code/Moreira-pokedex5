import HomePage from "../pages/HomePage";
import PokedexPage from "../pages/PokedexPage";
import DetalhesPage from "../pages/DetalhesPage";
import ErroPage from "../pages/ErroPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "../components/Header"

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Header/> 
                <Routes>

                    <Route path='/' element={<HomePage/>} />
    
                    <Route path='/pokedexpage/' element={<PokedexPage/>} />

                    <Route path='/detalhespage/:name' element={<DetalhesPage/>} />

                    <Route path='/erropage' element={<ErroPage/>} />
                </Routes>
            
            </BrowserRouter>
        </div>
    )
}

export default Router
