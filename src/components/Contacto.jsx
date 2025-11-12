import React from "react";
import "./Contacto.css";

const Contacto = () => {
  return (
    <section id="contacto" className="contacto">
      <h2>CONTACTO</h2>

      <form className="contacto-form">
        {/* Nombre */}
        <div className="campo">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" />
        </div>

        {/* Apellido */}
        <div className="campo">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" />
        </div>

        {/* Email */}
        <div className="campo">
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required />
        </div>

        {/* Asunto */}
        <div className="campo">
          <label htmlFor="asunto">Asunto</label>
          <input type="text" id="asunto" name="asunto" />
        </div>

        {/* Mensaje */}
        <div className="campo campo-mensaje">
          <label htmlFor="mensaje">Mensaje *</label>
          <textarea id="mensaje" name="mensaje" required rows="4"></textarea>
        </div>

        {/* Botón */}
        <div className="boton-container">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </section>
  );
};

export default Contacto;
