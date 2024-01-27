import PostModelo from 'componentes/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';
import gifHomer from 'assets/giphy.gif';
import styles from './SobreMim.module.css';

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre mim'
        >
            <h3 className={styles.subtitulo}>
                Oi! Eu sou a Sarah :D
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto da Sarah Campos"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>Sou do Rio de Janeiro, amo jogar videogame, aprender  sobre tecnologia e ouvir piadas ruins.</p>
            <p className={styles.paragrafo}>Atualmente estou no 3° período de Ciência da Computação e iniciando meus estudos em Front-end.</p>
            <p className={styles.paragrafo}>Meu intuito é que com esse blog você possa saber o que é abordado nas disciplinas de CC.</p>
            <p className={styles.paragrafo}>Espero que goste e, lembre-se, nunca fica mais fácil, você só fica melhor. &#x1F463;</p>
            <div className={styles.gif}><img src={gifHomer} alt='Gif Homer Simpson' /></div>
        </PostModelo>
    )    
};