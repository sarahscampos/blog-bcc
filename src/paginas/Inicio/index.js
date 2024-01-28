
import PostCard from "componentes/PostCard";

import styles from './Inicio.module.css';

import posts from 'json/posts.json';



export default function Inicio() {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    )
};