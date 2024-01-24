import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './componentes/Menu'
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim'
import Rodape from 'componentes/Rodape';
import PaginaPadrao from 'componentes/PaginaPadrao';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes> {/*Roteador*/}
        <Route path='/' element={<PaginaPadrao />}> {/*Rotas Aninhadas - Rota pai*/}
          <Route index element={<Inicio />} /> {/*Rota filha*/}
          <Route path='sobre-mim' element={<SobreMim />} /> {/*Rota filha*/}
        </Route>

        
        <Route path='*' element={<div>ERRO 404 - PÁGINA NÃO ENCONTRADA ;-;</div>} />
      </Routes>  
      <Rodape />       
    </BrowserRouter>
  )  
};

export default AppRoutes;
