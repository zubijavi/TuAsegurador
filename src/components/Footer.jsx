import './Footer.css'
import ssn from '../assets/ssn.png'

export default function Footer() {
  return (
    <footer id="contacto">
      <div className='footerIzq'>
        <div>
          <p>Javier Zubillaga</p>
          <p>Productor Asesor de Seguro (Mat 81915)</p>
          <p>
            <a href="mailto:info@seguros.com">javierzubillaga@outlook.com.ar</a>
          </p>
          <p>
            <a href="https://wa.me/5493411234567" target="_blank">Necochea</a> - <a href="https://wa.me/5493417654321" target="_blank">Rosario</a>
          </p>
        </div>

      </div >
      <div className='footerMedio'>
       <img src={ssn} alt="" />
      </div>
    </footer >
  );
}
