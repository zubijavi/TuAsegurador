import React from "react";
import bds from "../../assets/companias/bds.png";
import integrity from "../../assets/companias/integrity.png";
import sancor from "../../assets/companias/sancor.svg";
import prevencion from "../../assets/companias/prevencion.svg";



function UnderConst() {
  const logos = [sancor, prevencion, bds, integrity];

  return (
    <div className="relative min-h-[80vh] md:min-h-[20vh] py-12 flex flex-col items-center justify-center bg-gray-100 text-gray-900 px-4">
    {/* <div className="borde min-h-screen flex flex-col items-center justify-center bg-gray-100  text-gray-900 px-4"> */}
      <h1 className="text-xl font-bold mb-4 text-center">🚧 Sitio en Construcción 🚧</h1>
      <p className="text-lg mb-10 text-center">
        Estamos trabajando para ofrecerte la mejor experiencia. Mientras tanto, conoce nuestras compañías asociadas:
      </p>

      {/* Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-white dark:bg-[#1a2a38] rounded-lg shadow hover:scale-105 transition-transform"
          >
            <img src={logo} alt={`Logo ${index + 1}`} className="max-h-16 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UnderConst;