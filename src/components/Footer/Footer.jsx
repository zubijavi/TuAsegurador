import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/logo7.png";

const Footer = () => {
  return (
    <footer className="bg-[#0d141b] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* =========================
              FORMULARIO
          ========================= */}
          <div>
            <h2 className="text-3xl text-slate-200 mb-4">
              ¿Necesitás asesoramiento?
            </h2>
            <p className="text-slate-400 mb-8">
              Dejanos tus datos y te contactamos a la brevedad.
            </p>

            <form className="flex flex-col gap-5">

              <input
                type="text"
                placeholder="Nombre y Apellido"
                className="bg-slate-800 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="email"
                placeholder="Correo electrónico"
                className="bg-slate-800 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <input
                type="tel"
                placeholder="Teléfono"
                className="bg-slate-800 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />

              <textarea
                rows="4"
                placeholder="¿Qué tipo de seguro te interesa?"
                className="bg-slate-800 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              ></textarea>

              <button
                type="submit"
                className="bg-gray-700 hover:bg-blue-950 w-60 py-3 rounded-lg cursor-pointer mx-auto block"
              >
                Solicitar asesoramiento
              </button>

            </form>
          </div>

          {/* =========================
              INFO / MARCA
          ========================= */}
          <div className="flex flex-col justify-evenly">

            {/* Marca */}
            <div>
              <div className="flex items-center justify-center gap-4 mb-6">
                <img src={logo} alt="Logo TuAsegurador" className="h-36" />

              </div>

              <p className="text-slate-400 max-w-md leading-relaxed mb-8">
                Más de 10 años brindando respaldo y tranquilidad.
                Coberturas integrales, atención personalizada y
                acompañamiento en cada momento importante.
              </p>

              {/* Redes */}
              <div className="flex justify-center gap-8 mb-10">
                {[FaInstagram, FaFacebookF, FaLinkedinIn].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-11 h-11 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary transition cursor-pointer"
                  >
                    <Icon className="text-white" />
                  </div>
                ))}
              </div>
            </div>

            {/* Contacto */}
            <div className="border-t border-slate-800 pt-6">
              <div className="flex flex-col gap-2 text-slate-400 text-sm">
                <span>📞 0800-SEGUROS (24/7)</span>
                <span>📍 Rosario, Santa Fe</span>
                <span>📍 Necochea, Buenos Aires</span>

                <span>✉ contacto@tuasegurador.com.ar</span>
              </div>
            </div>

          </div>

        </div>

        {/* BARRA INFERIOR */}
        <div className="border-t border-slate-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">

          <div>
            © {new Date().getFullYear()} TuAsegurador.com.ar – Todos los derechos reservados.
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-slate-300 transition">
              Términos y Condiciones
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;