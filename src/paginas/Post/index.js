import { useParams } from "react-router-dom"

export default function Post() {
    const parametros = useParams(); //useParams() retorna um objeto, que tem a propriedade id, que é um parametro de rota
    console.log(parametros);

    return (
        <h1>Post {parametros.id}</h1>
    )
}