import React from "react";
import "./Cotizador.css";

const Cotizador = () => {
  return (
    <main>
      {/* SECTION: Por qué elegirnos */}
      <section className="why-us" aria-labelledby="why-us-title">
        <div className="container">
          <h2 id="why-us-title">¿Por qué elegirnos?</h2>

          <div className="features">
            <article className="feature" aria-labelledby="f1-title">
              <div className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="48" height="48" role="img">
                  <path d="M3 3h18v18H3z" fill="none"></path>
                  <path
                    d="M7 7h4v4H7zM13 13h4v4h-4zM13 7h4v4h-4zM7 13h4v4H7z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 id="f1-title">Descuentos de hasta 40%</h3>
              <p>
                Ahorrá tiempo y dinero con nuestro multicotizador online. Encontrá la opción
                que mejor se adapta a vos.
              </p>
            </article>

            <article className="feature" aria-labelledby="f2-title">
              <div className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="48" height="48" role="img">
                  <path d="M2 3h20v14H6l-4 4z" fill="currentColor" />
                </svg>
              </div>
              <h3 id="f2-title">Estamos siempre</h3>
              <p>
                Atención por redes, teléfono y asesoramiento 24/7 por WhatsApp para lo que
                necesites.
              </p>
            </article>

            <article className="feature" aria-labelledby="f3-title">
              <div className="icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="48" height="48" role="img">
                  <path
                    d="M12 2l2.6 6.6L21 10l-5 3.6L17 21l-5-3.2L7 21l1-7.4L3 10l6.4-1.4z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 id="f3-title">Servicio post venta de excelencia</h3>
              <p>
                Durante toda la vigencia de tu póliza te asesoramos y te asistimos ante
                cualquier inconveniente.
              </p>
            </article>
          </div>

          {/* Estadísticas */}
          <div className="stats" role="region" aria-label="estadísticas de la empresa">
            <div className="stat">
              <div className="num">24.000+</div>
              <div className="label">Consultas resueltas/año</div>
            </div>
            <div className="stat">
              <div className="num">9.000+</div>
              <div className="label">Clientes</div>
            </div>
            <div className="stat">
              <div className="num">4.7/5</div>
              <div className="label">Valoración promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO COTIZADOR */}
      <div className="form-container">
        <h2>
          Compara y ahorrá
          <br />
          hasta un 40% en tu seguro
        </h2>

        <form action="#" method="POST">
          <div className="form-group">
            <label htmlFor="marca">Marca</label>
            <input type="text" id="marca" name="marca" placeholder="Ej: Toyota" required />
          </div>

          <div className="form-group">
            <label htmlFor="modelo">Modelo</label>
            <input type="text" id="modelo" name="modelo" placeholder="Ej: Corolla" required />
          </div>

          <div className="form-group">
            <label htmlFor="anio">Año</label>
            <input
              type="number"
              id="anio"
              name="anio"
              placeholder="Ej: 2020"
              min="1990"
              max="2025"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="codigoPostal">Código Postal</label>
            <input
              type="text"
              id="codigoPostal"
              name="codigoPostal"
              placeholder="Ej: 2000"
              required
            />
          </div>

          <button type="submit">Cotizar</button>
        </form>
      </div>
    </main>
  );
};

export default Cotizador;
