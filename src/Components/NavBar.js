import React from 'react'
import { NavBarStyled } from '../styles/Styles'
import HomeIcon from "../assets/hogar.png"
import HomeIconOn from "../assets/hogar1.png"
import AboutIcon from "../assets/grupos.png"
import AboutIconOn from "../assets/grupos1.png"
import ServicesIcon from "../assets/apoyo-tecnico.png"
import ServicesIconOn from "../assets/apoyo-tecnico1.png"
import ContactIcon from "../assets/correo-de-contacto.png"
import ContactIconOn from "../assets/correo-de-contacto 1.png"
import { useLocation, Link } from 'react-router-dom'



export const NavBar = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <NavBarStyled>
    {pathName === "/" ? 
    <Link to = "/" className= "iconContainerOn">
    <div>
      <img className="iconsBannerOn" src={HomeIconOn} alt="Inicio" /> 
    </div> 
    </Link>
    : 
    <Link to = "/" className='iconContainer' >
    <div >
      <img className="iconsBanner" src={HomeIcon} alt="Inicio" /> 
    </div>
    </Link> }
    {pathName === "/nosotros" ? 
    <Link to = "/nosotros" className='iconContainerOn'>
    <div>
      <img className='iconsBannerOn' src={AboutIconOn} alt="Nosotros" />
    </div>
    </Link>
    : 
    <Link to = "/nosotros" className='iconContainer'>
    <div>
      <img className='iconsBanner' src={AboutIcon} alt="Nosotros" />
    </div>
    </Link> }
    {pathName === "/servicios" ? 
    <Link to="/servicios" className='iconContainerOn'>
    <div>
      <img className='iconsBannerOn' src={ServicesIconOn} alt="Servicios" />
    </div>
    </Link>
    : 
    <Link to = "/servicios" className='iconContainer'>
    <div>
      <img className='iconsBanner' src={ServicesIcon} alt="Servicios" />
    </div>
    </Link>}
    {pathName === "/contacto" ? 
    <Link to="/contacto" className='iconContainer1On' >
    <div>
      <img className='iconsBannerOn' src={ContactIconOn} alt="Contacto" />
    </div>
    </Link>
    : 
    <Link to="/contacto" className='iconContainer1'>
    <div>
      <img className='iconsBanner' src={ContactIcon} alt="Contacto" />
    </div>
    </Link>}

    </NavBarStyled>
  )
}
