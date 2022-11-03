import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import TextField from '@mui/material/TextField';
import { ContactStyle } from '../styles/Styles'

const Contact = () => {
  return (
    <>
      <Header/>
      <ContactStyle>
        <div className='form'>
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
      <Footer/>
    
    </>
  )
}

export default Contact