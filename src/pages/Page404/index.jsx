import styles from './Page404.module.css'

export default function Page404(){
    return(
        <>
            <h2 className={styles.titulo2}>Algo deu errado ao acessar esta rota</h2>
            <div className={styles.textos}>
                <span className={styles.texto_grande}>404</span><br />
                <strong className={styles.texto_vermelho}>Página Não Localizada</strong>
            </div>
        </>
    )
}