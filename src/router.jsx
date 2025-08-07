import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Filme from './pages/Filme';
import Header from './components/Header';
import Erro from './pages/Erro';
function RoutesApp() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Filme/>}/>
                <Route path="/filme" element={<Filme/>}/>
                <Route path='*' element={<Erro/>}/>
            </Routes>
         
        </BrowserRouter>
    )

}

export default RoutesApp;