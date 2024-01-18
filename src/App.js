import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

function App() {
  const pagina = window.location.pathname === '/' ? <Inicio /> : <SobreMim />
  return pagina;
}

export default App;
