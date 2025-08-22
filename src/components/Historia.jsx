import './Historia.css'

const Historia = () => {
  return (
    <section id="info" className="historia">
      <div>
                  {/* Bloque de Info con íconos */}
          <div className="info-icons">
            <div className="info-card">
              <i className="fa-solid fa-user-tie info-icon"></i>
              <h3>Asesoramiento Personalizado</h3>
              <p>
                Recibí la mejor atención ajustada a tus necesidades específicas.
              </p>
            </div>

            <div className="info-card">
              <i className="fa-solid fa-headset info-icon"></i>
              <h3>Atención Directa 24 hs</h3>
              <p>
                Siempre disponible para resolver tus consultas en cualquier momento.
              </p>
            </div>
          </div>
        {/* Contenido principal */}
        <div>
          {/* Texto */}
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
          </div>


        </div>
      </div>
    </section>
  );
};

export default Historia;
