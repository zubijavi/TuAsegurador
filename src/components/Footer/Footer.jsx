import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../../assets/logo7.png";

const Footer = () => {
  return (
    <footer className="bg-[#0d141b] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-10">

        {/* Grid Superior */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">

          {/* Marca */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="flex items-center text-primary">
              <img src={logo} alt="Logo TuAsegurador" className="h-20 w-30" />
              {/* <span className="material-symbols-outlined text-4xl">verified_user</span> */}
              <span className="text-l font-bold tracking-tight">TuAsegurador.com.ar</span>
            </div>

            <p className="text-slate-400 text-base leading-relaxed max-w-xs">
              Protegiendo tu día a día con coberturas integrales y atención personalizada desde 2013. Tu tranquilidad es nuestra prioridad.
            </p>

            <div className="flex gap-5">
              {[
                { Icon: FaInstagram, link: "https://instagram.com" },
                { Icon: FaFacebookF, link: "https://facebook.com" },
                { Icon: FaLinkedinIn, link: "https://linkedin.com" }
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary transition"
                >
                  <Icon className="text-white text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-2">
            <h3 className="font-bold mb-6 uppercase tracking-wider text-sm">Servicios</h3>
            <ul className="flex flex-col gap-4 text-slate-400">
              {["Seguro Automotor", "Seguro del Hogar", "Seguro de Vida", "Seguro para Empresas"].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div className="lg:col-span-2">
            <h3 className="font-bold mb-6 uppercase tracking-wider text-sm">Recursos</h3>
            <ul className="flex flex-col gap-4 text-slate-400">
              {["Centro de Siniestros", "Blog y Noticias", "Preguntas Frecuentes", "Documentos de Póliza"].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div className="lg:col-span-2">
            <h3 className="font-bold mb-6 uppercase tracking-wider text-sm">Empresa</h3>
            <ul className="flex flex-col gap-4 text-slate-400">
              {["Quiénes Somos", "Trabajá con Nosotros", "Novedades", "Contacto"].map(item => (
                <li key={item}>
                  <a href="#" className="hover:text-primary transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="font-bold mb-6 uppercase tracking-wider text-sm">Atención al Cliente</h3>

              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">0800-SEGUROS</span>
                <span className="bg-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                  24/7
                </span>
              </div>

              <p className="text-slate-400 text-sm">Siempre disponibles para siniestros.</p>
            </div>

            <div>
              <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Oficina</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Av. Seguros 123,<br />
                Rosario, Santa Fe
              </p>
            </div>
          </div>

        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-slate-500 text-sm">
            © 2024 InsuranceCo. Todos los derechos reservados.
          </div>

          <div className="flex gap-8 text-sm text-slate-500">
            {["Política de Privacidad", "Términos del Servicio", "Configuración de Cookies"].map(item => (
              <a key={item} href="#" className="hover:text-slate-300 transition">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span className="material-symbols-outlined text-sm">language</span>
            <span>Español (AR)</span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;