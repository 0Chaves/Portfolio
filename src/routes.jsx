import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contatos";

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/sobre" element={<Sobre/>}></Route>
                <Route path="/projetos" element={<Projetos/>}></Route>
                <Route path="/contatos" element={<Contatos/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}