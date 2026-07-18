import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/taaa.png"; // Ajustá la ruta según tu proyecto

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false); // Submenu móvil

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#f0f3f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-1">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          {/* <Link to="/"> */}
          <a
            href="/"
          >
            <img src={logo} alt="Logo" className="h-4 lg:h-8" />
          </a>
          {/* </Link> */}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Submenu Desktop */}
            <div className="relative group ">
              <a
                className="flex items-center gap-1 uppercase text-sm font-medium hover:text-[#234d6d] transition-colors cursor-pointer"

              >
                Coberturas
                {/* <span className="material-symbols-outlined text-sm">
                  expand_more
                </span> */}
              </a>

              <div className="absolute left-0 top-full mt-2 w-48 bg-white dark:bg-[#101a22] rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                <Link
                  to="/seguro-automotor"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Autos
                </Link>
                <Link
                  to="/seguro-agro"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Cultivos
                </Link>
              </div>
            </div>

            {/* <a
              className="flex items-center gap-1 uppercase text-sm font-medium hover:text-[#234d6d] transition-colors"

              href="#"
            >
              Ayuda
            </a> */}
            <a
              href="#footer"
              className="flex items-center gap-1 uppercase text-sm font-medium hover:text-[#234d6d] transition-colors"
            >
              Contacto
            </a>
          </div>

          {/* CTA */}
          {/* <div className="hidden md:flex items-center gap-4">
            <button className="bg-blue-950 hover:bg-blue-900 text-white text-sm font-bold h-10 px-6 rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Cotizá Ahora
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 dark:text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined text-3xl!">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        onClick={() => {
          setMenuOpen(false);
          setSubmenuOpen(false);
        }}
        className={`fixed inset-0 z-40 duration-300 md:hidden 
          ${menuOpen ? "visible" : "invisible"}`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-12 right-0 z-50 w-[30%] bg-white
        shadow-xl border-l border-[#f0f3f4] 
        transform transition-transform duration-300 ease-in-out
        md:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}


        {/* Coberturas */}
        <button
          onClick={() => setSubmenuOpen(!submenuOpen)}
          className="w-full flex justify-between items-center px-4 py-3 text-[#111518] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
        >
          Coberturas

          <span className="material-symbols-outlined">
            {submenuOpen ? "expand_less" : "expand_more"}
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${submenuOpen ? "max-h-40" : "max-h-0"
            }`}
        >
          <div className="flex flex-col gap-2 ml-2">
            <Link
              to="/seguro-automotor"
              onClick={() => {
                setMenuOpen(false);
                setSubmenuOpen(false);
              }}
            >
              Autos
            </Link>


            <Link
              to="/seguro-agro  "
              onClick={() => {
                setMenuOpen(false);
                setSubmenuOpen(false);
              }}
            >
              Granizo
            </Link>
          </div>
        </div>
        <a
          href="#footer"
          className="w-full flex justify-between items-center px-4 py-3 text-[#111518] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
          onClick={() => {
            setMenuOpen(false);
            setSubmenuOpen(false);
          }}
        >
          Contacto
        </a>
        <Link
          to="/cotizador"
          className="w-full flex justify-between items-center px-4 py-3 text-[#111518] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"

          onClick={() => {
            setMenuOpen(false);
            setSubmenuOpen(false);
          }}
        >
          Cotizar Seguro Auto
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;