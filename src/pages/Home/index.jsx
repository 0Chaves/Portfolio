import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
        <Header />
        <section className='container'>
            <div className='apresentacao'>
                <p>
                    Olá, sou <br />
                    <span>Daniel Chaves</span><br />
                    Dev Full Stack
                </p>
                <Link className='btn btn-red'>
                    Sobre mim
                </Link>
            </div>
            <figure>
                <img className='img-home' src="/home-image.svg" alt="Imagem de Home" />
            </figure>
        </section>
        <Footer />
        </>
    )
}