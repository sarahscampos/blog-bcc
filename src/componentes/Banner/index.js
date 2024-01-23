import styles from './Banner.module.css';
import LogoBf from '../../assets/LogoBF.png';

export default function Banner() {

    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Bit Fields 
                </h1>

                <p className={styles.paragrafo}>Explore o universo binário no Bit Fields, o blog que desvenda os segredos da Ciência da Computação! Seja bem-vindo a uma jornada onde cada bit conta! &#x1f469;&#x200d;&#x1f4bb;</p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.logo}
                    src={LogoBf}
                    alt='Logo Bit Fields'
                    aria-hidden={true} //elemento não deve ser percebido pelos leitores de tela
                    draggable={false} //imagem fantasma é bloqueada
                />


            </div>
        </div>
    )
}