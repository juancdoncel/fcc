import Header from "../Components/Header";
import Footer from "../Components/Footer";
import TextField from '@mui/material/TextField';
import fachada from "../assets/fachadaIcono.png"
import cieloRaso from "../assets/amianto.png"
import cubierta from "../assets/cubierta.png"
import mantenimiento from "../assets/renovacion.png"
import materiales from "../assets/membrana.png"
import vidrios from "../assets/limpieza-de-vidrio.png"
import { BannerStyle, DescriptionStyle } from "../styles/Styles";
import React, { useContext }from "react";
import { ContactStyle } from '../styles/Styles'
import { Link } from "react-router-dom";
import { ServiceContext } from "../context/serviceContext";
import { NavBar } from "../Components/NavBar";


function Home() {
  const { setService } = useContext(ServiceContext);

  return (
    <>
      <Header />
      <BannerStyle>
        <div className="div1"></div>
      </BannerStyle>
      <DescriptionStyle>
        <div className="description">
         <div className="title">Bienvenido a FCC IN BLAU</div>
          <div className="title2">
            Cubiertas, fachadas y cielo raso.
          </div>
          <div>
            Respaldados por una experiencia de más de 15 años como expertos en
            montaje e instalación.
          </div>
          <div>
            Nuestro compromiso con su proyecto busca conseguir los mejores
            resultados en calidad, productividad y eficiencia.
          </div>
        </div>
        <div className="slogan">
          "Generamos relaciones en firme"
        </div>
        <div className="services">
         <div className="serviceTitle"> ¿Qué servicios tenemos?</div>
         <div className="servicesIcons">
         <div>
         <Link onClick={() => {
              setService("fachada");
            }}
            to={"/servicios"}>

         <div className="icons">
            <img className="icon" src={fachada} alt="" />
          </div>
          <div className="titleService">
            Fachadas
          </div>
            </Link>
         </div>

         <div>
         <Link
            onClick={() => {
              setService("cieloRaso");
            }}
            to={"/servicios"}
          >
         <div className="icons">
            <img className="icon" src={cieloRaso} alt="" />
          </div>
          <div className="titleService">
            Cielo Raso
          </div>
          </Link>
         </div>
         <div>
         <Link
            onClick={() => {
              setService("cubierta");
            }}
            to={"/servicios"}
          >
         <div className="icons">
            <img className="icon" src={cubierta} alt="" />
          </div>
          <div className="titleService">
            Cubiertas
          </div>
          </Link>
         </div>
         <div>
         <Link
            onClick={() => {
              setService("cubierta");
            }}
            to={"/servicios"}
          >
         <div className="icons">
            <img className="icon" src={vidrios} alt="" />
          </div>
          <div className="titleService">
            Ventaneria
          </div>
          </Link>
         </div>
         <div>
         <Link
            onClick={() => {
              setService("cubierta");
            }}
            to={"/servicios"}
          >
         <div className="icons">
            <img className="icon" src={materiales} alt="" />
          </div>
          <div className="titleService">
            Venta de materiales
          </div>
          </Link>
         </div>
         <div>
         <Link
            onClick={() => {
              setService("mantenimiento");
            }}
            to={"/servicios"}
          >
         <div className="icons">
            <img className="icon" src={mantenimiento} alt="" />
          </div>
          <div className="titleService">
            Mantenimiento
          </div>
          </Link>
         </div>
         </div>

        </div>
        <div className="contact">
        <ContactStyle>
        <div className='form'>
          <div className="title2">Contacta con nosotros</div>
          <form action="https://formsubmit.co/juancamidm@gmail.com" method="POST">
          <TextField id="nombre" name='name' label="Nombre" variant="standard" className='inputForm' />
          <br />
          <TextField type="email" id="email" name='email' label="Email" variant="standard" className='inputForm'/>
          <br />
          <TextField id="Telefono" name='tel' label="Número telefonico" variant="standard" className='inputForm'/>
          <br />
          <TextField id="ciudad" name='ciudad' label="Ciudad de contacto" variant="standard" className='inputForm'/>
          <br />
          <TextField id="text" name='text' label="¿En qué podemos ayudarte?" variant="standard" className='inputForm'/>
          <input className='submit' type="submit" value="Enviar" />
          <input type="hidden" name='_next' value="http://localhost:3000/" />
          <input type="hidden" name='_captcha' value="false" />

          </form>
        </div>
        <div className='datosContacto'>
          <span className='title'>Datos de contacto:</span>
          <div>
          <br />
            jcanonfcc@gmail.com - 324 566 0337 <br/> gdoncel@gmail.com - 300 450 8777 <br/>
             
          </div>
        </div>
      </ContactStyle>

        </div>
        <Footer/>
        <NavBar/>
      </DescriptionStyle>


      
    </>
  );
}

export default Home;
