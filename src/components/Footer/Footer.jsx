import logo from "../../assets/logo7.png";

const Footer = () => {
  return (
    <footer className="bg-[#0d141b] text-white py-12">

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

        {/* LOGO */}



        {/* MENSAJE */}
        {/* <h2 className="text-2xl text-slate-200 mb-3">
          Sitio en desarrollo
        </h2>

        <p className="text-slate-400 max-w-xl leading-relaxed mb-8">
          Estamos trabajando para ofrecerte una nueva experiencia.
          Muy pronto vas a poder acceder a todos nuestros servicios,
          cotizaciones y herramientas online.
        </p> */}


        {/* ESTADO */}
        <div className="bg-slate-800 px-2 py-3 rounded-lg mb-8">
          <span className="text-green-400">
            ●
          </span>

          <span className="text-slate-300 ml-2">
            Sitio en desarrollo
          </span>
        </div>


        {/* CONTACTO */}
        <div className="text-slate-400 text-sm flex flex-col gap-2">

          <span>
            📍 Rosario, Santa Fe |  Necochea, Buenos Aires
          </span>

          {/* <span>
            📍 Necochea, Buenos Aires
          </span> */}

          <span>
            ✉ contacto@tuasegurador.com.ar
          </span>

        </div>


        {/* BARRA INFERIOR */}
        <div className="w-full border-t border-slate-800 mt-10 pt-6 text-slate-500 text-sm">

          © {new Date().getFullYear()} TuAsegurador.com.ar -
          Todos los derechos reservados.

        </div>


      </div>

    </footer>
  );
};

export default Footer;