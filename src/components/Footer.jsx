import './Footer.css'
import ssn from '../assets/ssn.png'

export default function Footer() {
  return (
    <footer id="contacto">
      <div className='footerIzq'>
        <div className='nombre'>
          <h1>JAVIER ZUBILLAGA</h1>
          <h6>Productor de Seguros Mat 81915</h6>
        </div>
        <div className='mail'>
          <a href="mailto:info@seguros.com"><i class="fa-solid fa-envelope"></i> javierzubillaga@outlook.com.ar</a>
        </div>
        <div className='whatsApp'>
          <div>
            <span><a href="https://wa.me/5493413354935" target="_blank"><i class="fa-brands fa-whatsapp">  </i> 3413354935</a></span>
          </div>
        </div>
        <div className='direcciones'>
          <div>
            <span><i class="fa-solid fa-location-dot"></i> Mitre 208, Rosario (Santa Fe)</span>
          </div>
          <div>
            <span><i class="fa-solid fa-location-dot"></i> 81 nº 981, Necochea (Bs As)</span>
          </div>
        </div>
      </div>
      <div className='footerMedio'>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-whatsapp"></i>
        <i class="fa-solid fa-envelope"></i>
      </div>
      <div className='footerDer'>
        <img src={ssn} alt="" />
        <p>0800-666-8400</p>
      </div>
    </footer >
  );
}
