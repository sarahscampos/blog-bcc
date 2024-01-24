import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
    return (
        <main>
            <Banner />
            <Outlet /> {/*Componente React Router DOM, indica onde irá ser renderizado o conteúdo das rotas filhas, nesse caso vai ser renderizado após o Banner*/}
        </main>
    )
}