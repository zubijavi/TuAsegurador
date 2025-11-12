import './Historia.css'
import video from '../assets/cebada.mp4'
import Companias from './Companias';

const Historia = () => {
  return (
    <section id="info" className="historia">
      <h2>Nosotros</h2>
      <div className='nosotros'>
        <div>
          <p>
            Desde 2013, ayudamos a personas y empresas a proteger lo que más valoran.
            Nuestra experiencia nos permite ofrecer coberturas diseñadas a medida,
            adaptadas a cada necesidad y presupuesto. Brindamos un asesoramiento cercano,
            claro y de confianza, acompañándote en cada etapa para que siempre tengas
            la tranquilidad de estar protegido.
          </p>
          <p>
            En <strong>Tu Asegurador</strong> creemos en la importancia de
            escuchar al cliente, entender sus necesidades y ofrecerle la
            cobertura justa, sin sorpresas ni letras chicas.
          </p>
          <p>
            Trabajamos con las principales compañías del mercado, garantizando
            respaldo y tranquilidad en cada póliza.
          </p>
      <Companias/>
        </div>
        <video autoPlay muted loop controls width="100%">
          <source src={video} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>


    </section >
  );
};

export default Historia;
