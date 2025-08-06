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
        {/* <h2>Página En Construcción</h2> */}
        {/* Otros componentes o contenido */}
      </div>
    </main>
  );
}
