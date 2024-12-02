import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <p>
                    Olá, sou <br />
                    <span>Daniel Chaves</span><br />
                    Dev Back End
                </p>
                <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                    Sobre mim
                </Link>
            </div>
            <figure>
                <img className={styles.img_home} src="/home-image.svg" alt="Imagem de Home" />
            </figure>
        </section>
    )
}