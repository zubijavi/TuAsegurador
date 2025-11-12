import './Footer.css'
import ssn from '../assets/ssn.png'

export default function Footer() {
  return (
    <footer id="info">
      <div className='footerIzq'>
        <p className='titulo'>TU ASEGURADOR</p>
        <p className='direccion'>Calle 81 Nº 981</p>
        <p className='direccion'>7630 Necochea, Buenos Aires, Argentina</p>
        <p className='mail'>Mail: <a href="mailto:info@seguros.com">info@tuasegurador.com.ar</a></p>
        <p className='telefono'><a href="https://wa.me/5493413354935" target="_blank">+54-341-3354935</a></p>
      </div>
      
      <div className='footerMedio'>
        <div>
          <p className='titulo'>MENÚ</p>
          <p><a href="#inicio">Inicio</a></p>
          <p>Seguros</p>
          <p>Siniestros</p>
          <p>Ayuda</p>
          <p>Blog</p>
          <p>Info</p>
        </div>
      </div>
      <div className='footerDer'>
        <div className='arriba'>
            <p className='titulo'>REDES</p>
          <div>
            <a href="https://facebook.com/tuperfil" aria-label="Facebook" target="_blank" rel="noopener">
              <i class="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a href="https://instagram.com/tuperfil" aria-label="Instagram" target="_blank" rel="noopener">
              <i class="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="https://linkedin.com/in/tuperfil" aria-label="LinkedIn" target="_blank" rel="noopener">
              <i class="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className='abajo'>
          <img src={ssn} alt="" />
          <p>0800-666-8400</p>
        </div>
      </div>
    </footer >
  );
}
