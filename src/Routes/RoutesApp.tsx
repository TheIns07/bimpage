import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from '../Components/pages/Footer'
import { Logo } from '../Components/pages/Logo'
import { NavMain } from '../Components/pages/Nav'
import { About } from '../Components/sources/About'
import { BimData } from '../Components/sources/BimData'
import { Contribute } from '../Components/sources/Contribute'
import { DonateUs } from '../Components/sources/DonateUs'
import { Index } from '../Components/sources/Index'



export const RoutesApp = () => {
  return (
    <BrowserRouter>
    {/*Header y navegación*/}
    <NavMain />
    <Logo/>
      
    {/*Contenido Central*/}
    <section className='content'>
    <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/portafolio" element={<BimData />} />
        <Route path="/servicios" element={<Contribute />} />
        <Route path="/curriculum"  element={<DonateUs />} />
        <Route path="/contacto" element={<About />} />
        <Route path="*" element={
          <div className='page'>
            <h1 className='heading'>Error 404</h1>
          </div>
        
        } />
      </Routes>
    </section>
      
      <hr></hr>
      {/*Footer*/}
      <Footer />

    </BrowserRouter>
  )
}
