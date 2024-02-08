import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Peliculas from './paginas/Peliculas';
import Mainprincipal from './paginas/Mainprincipal';
import DetallesPeliculas from './paginas/DetallesPeliculas';

function App() {


  return (
    <>
      <Header/>
      {/* <img className='portada' src="../public/img/portada.jpg" alt="" /> */}
      <Routes>
        <Route path='/' element={<Mainprincipal/>}/>
        <Route path='/pelicula/:id' element={<DetallesPeliculas/>} />
      </Routes>
      <Footer/>
    </>
  )
}
export default App
