import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json"; //Array de objetos
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown"; //Biblioteca
import "./Post.css"
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";

import styles from './Post.module.css';
import PostCard from "componentes/PostCard";

export default function Post() {
    const parametros = useParams(); //useParams() retorna um objeto, que tem a propriedade id, que é um parametro de rota
    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if(!post) {
        return <NaoEncontrada />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutrosPosts}>
                            Outros posts que você pode gostar:
                        </h2>

                        <ul className={styles.postsRecomendados}>
                            {postsRecomendados.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post}/>
                                </li>
                            ))}
                        </ul>

                    </PostModelo>
                }>
                </Route>
            </Route>
        </Routes>
        
    )
}