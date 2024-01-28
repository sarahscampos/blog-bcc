import { useParams } from "react-router-dom";
import posts from "json/posts.json"; //Array de objetos
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown"; //Biblioteca
import "./Post.css"

export default function Post() {
    const parametros = useParams(); //useParams() retorna um objeto, que tem a propriedade id, que é um parametro de rota
    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    return (
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
            
        </PostModelo>
    )
}