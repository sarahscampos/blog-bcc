import PostModelo from 'componentes/PostModelo';
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';
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
            <p className={styles.paragrafo}>Paragrafos...........</p>
        </PostModelo>
    )    
};