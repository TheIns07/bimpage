import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Index.css'

export const Index = () => {
  return (
    <div className='indexSection'>
      <div className='mainSection'>
        <div className='titleMain'>
        <h1>Bim: el proyecto que cambiara a la comunidad.</h1>
        </div>

        <div className='contextMain'>
        <h3>
          BIM es una plataforma en ayudar a los animales callejeros
          por medio de la recolección de datos de las mascotas dentro
          de Ciudad Obregón.
        </h3>
        <h3>
          En BIM desarrollamos una sencilla aplicación donde tú puedes contibuir, asi como
          veterinarios, dueños de mascotas y gente interesada en el cuidado
          de los animales callejeros.
        </h3>
        <h3>Acompañado de tu aportación, te damos alimento y sueros para que ayudes a los animales 
          que vayas localizando a lo largo de tu travecia.
        </h3>
        <h4>¿Te gustaria saber como lo hacemos?</h4>
          <button className='seeMoreButton'>¿Como se hace?</button>
        </div>
      </div>
      
      <div className='secondSection'>
        <div className='processSection'>
        <h1>Procesos</h1>
        <h2>Ver un animal en la calle es el primer paso para lograr entender como
          estos se mueven por la ciudad para identificar zonas de riesgo.
        </h2>
        <ol>
          <li>Localiza una mascota callejera o perdida dentro de una zona establecida</li>
          <li>Ayudalo dandole alimento e hidratación</li>
          <li>Captura los datos de tu locación con 
            <ol>
            <li>Locación de Google Maps</li>
            <li>Dia, tarde o noche</li>
            <li>Tipo de animal/es</li>
            <li>Cantidad de estos</li>
            </ol>
          </li>
          <li>Registra esos datos en la sección de <NavLink to = {'/bimdata'}>Bim Data</NavLink></li>
        </ol>
        <h3>La información dada sera usada para generar un mapa que identificara zonas de riesgo para las mascotas.</h3>
        <h3>Estos resultados seran procesados y utilizados para entender las migraciones de mascotas callejeras y ayudar a dueños necesitados para darles un aproximado de donde encontrar a su mascota.</h3>
        <h5>No te preocupes. La información que proporciones sera confidencial y solo sera usada para fines educativos.</h5>
        </div>
        <div className='phasesSection'>
        <h1>Fases del proyecto</h1>

        </div>
      </div>
    </div>
  )
}
