import styles from './Contatos.module.css'
import { GoMail } from "react-icons/go";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";



export default function Contatos(){
    return(
        <section className={styles.contatos}>
            <h2>Entre em contato</h2>
            <p>Para que possamos conversar mais sobre.</p>
            <div className={styles.icones}>
                <a href="mailto:danieldossantoschaves@gmail.com" target='_blank' rel='noopener noreferrer'><GoMail className={styles.icone}/></a>
                <a href="https://www.instagram.com/danieel.chavess/" target='_blank' rel='noopener noreferrer'><BsInstagram className={styles.icone}/></a>
                <a href="https://github.com/0Chaves" target='_blank' rel='noopener noreferrer'><BsGithub className={styles.icone}/></a>
                <a href="https://www.linkedin.com/in/daniel-chaves-dev/" target='_blank' rel='noopener noreferrer'><BsLinkedin className={styles.icone}/></a>
            </div>
        </section>
    )
}