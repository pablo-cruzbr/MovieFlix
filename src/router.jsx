import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Erro from './pages/Erro';
import Filme from './pages/Filme';
import Header from './components/Header';
import Detalhes from './pages/Detalhes';
import Favoritos from './pages/Favoritos';

function RoutesApp() {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Filme/>}/>
                <Route path="/filme" element={<Filme/>}/>
                <Route path='*' element={<Erro/>}/>
                <Route path='/detalhes/:id' element={<Detalhes/>}/>
                <Route path='/favoritos' element={<Favoritos/>}/>
            </Routes>
         
        </BrowserRouter>
    )

}

export default RoutesApp;