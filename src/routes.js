import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu'
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobre-mim' element={<SobreMim />} />
        <Route path='*' element={<div>ERRO 404 - PÁGINA NÃO ENCONTRADA ;-;</div>} />
      </Routes>         
    </BrowserRouter>
  )  
};

export default AppRoutes;
