import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import './styles/Nav.css'

export const NavMain = () => {
  return (
    <>
    <div className='navMain'>
    
    <nav>

    <div className='navRight'>
    <ul>
      <li>
      <NavLink to = "/bimdata">Bim Data</NavLink>
      </li>
      <li>
      <NavLink to = "/contribuye">Contribuye</NavLink>
      </li>
      <li>
      <NavLink to = "/donaciones">Donaciones</NavLink>
      </li>
      <li>
      <NavLink to = "/about">Acerca de</NavLink>
      </li>
    </ul>

    </div>
      
    
    <div>
      <h4>Creado por Arturo Cervantes</h4>
    </div>
    </nav>
    </div>
    
    </>
  )
}
