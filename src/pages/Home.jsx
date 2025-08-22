import './Home.css';
import agricolaVideo from '../pages/maiz.mp4';
import cebada from '../pages/cebada.mp4'

export default function Home() {
  return (
    <main className="homeContainer">
      <video autoPlay loop muted className="videoFondo">
        <source src={cebada} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      <div className="contenido">
        <div className='fondoOscuro'>
          <h1 className="text-capitalize"> Protección Inteligente para Personas y Empresas</h1>
          <p>Brindamos seguros a medida para individuos, medianas y grandes empresas, con el respaldo de compañías líderes
            del mercado.</p>
        <a
          href="https://wa.me/5493413354935?text=Hola%21%20necesito%20cotizaci%C3%B3n"
          className="banner-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cotizar
        </a>
        </div>
      </div>
    </main>
  );
}
