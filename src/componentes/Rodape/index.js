import { Link } from 'react-router-dom';
import styles from './Rodape.module.css';
import separador from 'assets/separadorBits.png';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <img 
                src={separador} 
                alt='separador' 
                className={styles.separador}
                aria-hidden={true}
                draggable={false}
            />
            <p>Desenvolvido por <Link to='/sobre-mim' className={styles.link}>Sarah Campos</Link></p>

            <img 
                src={separador} 
                alt='separador' 
                className={styles.separador}
                aria-hidden={true}
                draggable={false}
            />
        </footer>
    )
}