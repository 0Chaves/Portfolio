import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Header/>
      <section className='container'>
        <div className='apresentacao'>
          <p>
            Olá, sou <br/>
            <span>Daniel Chaves</span><br/>
            Dev Full Stack
          </p>
          <button className='btn btn-red'>
            Sobre mim
          </button>
        </div>
        <figure>
          <img className='img-home' src="/home-image.svg" alt="Imagem de Home" />
        </figure>
      </section>
      <Footer/>
    </>
  )
}

export default App
