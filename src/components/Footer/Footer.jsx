import whatsApp from "../../assets/wp.png";

const Footer = () => {
  return (
    <footer className="bg-[#0d141b] text-white py-12" id="footer">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID DE DOS COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* COLUMNA IZQUIERDA */}
          <div className="flex flex-col items-center text-center">
            {/* ESTADO */}
            <div className="bg-slate-800 px-2 py-3 rounded-lg mb-2">
              <span className="text-green-400">●</span>
              <span className="text-slate-300 ml-2">Sitio en desarrollo</span>
            </div>

            {/* CONTACTO */}
            <div className="text-slate-400 text-sm flex flex-col items-center gap-2">
              <a
                href="https://wa.me/5493413354935"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={whatsApp}
                  alt="WhatsApp"
                  className="w-30 h-auto rounded-md shadow-sm"
                />
              </a>
              <span>📍 Rosario, Santa Fe | Necochea, Buenos Aires</span>
              <span>✉ javierzubillaga@outlook.com.ar</span>
            </div>


          </div>

          {/* COLUMNA DERECHA */}
          <div className="flex text-gray-300 flex-col gap-4 raleway uppercase items-center justify-center">
            <h2 className="text-3xl">
              Tu Asegurador
            </h2>
            <p className="text-xs">Javier Zubillaga - Productor de Seguros</p>
          </div>
        </div>

        {/* BARRA INFERIOR (FUERA DEL GRID) */}
        <div className="w-full border-t border-slate-800 mt-10 pt-6 text-slate-500 text-sm text-center">
          © {new Date().getFullYear()} TuAsegurador.com.ar - Todos los derechos reservados.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
