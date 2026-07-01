import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo7.png"; // Ajustá la ruta según tu proyecto

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false); // Submenu móvil

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-[#101a22]/90 backdrop-blur-md border-b border-[#f0f3f4] dark:border-[#2a3b47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-4">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-35" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {/* Submenu Desktop */}
            <div className="relative group">
              <a
                className="flex items-center gap-1 text-[#2f363b] dark:text-gray-200 text-sm font-medium hover:text-[#234d6d] transition-colors"
                href="#"
              >
                Coberturas
                {/* <span className="material-symbols-outlined text-sm">
                  expand_more
                </span> */}
              </a>

              <div className="absolute left-0 top-full mt-2 w-48 bg-white dark:bg-[#101a22] rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Autos
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Motos
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Cultivos
                </a>
              </div>
            </div>

            <a
              className="text-[#2f363b] dark:text-gray-200 text-sm font-medium hover:text-[#234d6d] transition-colors"
              href="#"
            >
              Ayuda
            </a>
            <a
              className="text-[#2f363b] dark:text-gray-200 text-sm font-medium hover:text-[#234d6d] transition-colors"
              href="#"
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
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#101a22] border-t border-[#f0f3f4] dark:border-[#2a3b47] shadow-md">
          {/* Sobre Nosotros con submenú */}
          <div>
            <button
              onClick={() => setSubmenuOpen(!submenuOpen)}
              className="w-full flex justify-between items-center px-6 py-3 text-[#111518] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium"
            >
              Coberturas
              <span className="material-symbols-outlined">
                {submenuOpen ? "expand_less" : "expand_more"}
              </span>
            </button>
            {submenuOpen && (
              <div className="bg-gray-50 dark:bg-[#1a2a38]">
                <a
                  href="#"
                  className="block px-8 py-2 text-[#111518] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Autos
                </a>
                <a
                  href="#"
                  className="block px-8 py-2 text-[#111518] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Motos
                </a>
                <a
                  href="#"
                  className="block px-8 py-2 text-[#111518] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  Cultivo
                </a>
              </div>
            )}
          </div>

          {/* <a
            href="#"
            className="block px-6 py-3 text-[#111518] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Coberturas
          </a> */}
          <a
            href="#"
            className="block px-6 py-3 text-[#111518] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Ayuda
          </a>
          <a
            href="#"
            className="block px-6 py-3 text-[#111518] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Contacto
          </a>
          {/* <button className="w-full text-left px-6 py-3 bg-blue-950 hover:bg-blue-900 text-white font-bold rounded-b-lg transition-all">
            Cotizá Ahora
          </button> */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;