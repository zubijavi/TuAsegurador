import React, { useEffect } from "react";
import "./Header.css";


import logo from "../../assets/icono.png";

const Header = () => {
  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const submenus = document.querySelectorAll(".submenu");
    const navLinks = document.querySelectorAll("nav a, nav p");

    // --- Abrir/cerrar menú hamburguesa ---
    const toggleMenu = (e) => {
      e.stopPropagation();
      nav.classList.toggle("active");
      menuToggle.classList.toggle("fa-bars");
      menuToggle.classList.toggle("fa-xmark");
    };
    menuToggle?.addEventListener("click", toggleMenu);

    // --- Cerrar menú al hacer click en un enlace ---
    const closeMenuOnLinkClick = () => {
      nav.classList.remove("active");
      menuToggle.classList.remove("fa-xmark");
      menuToggle.classList.add("fa-bars");
      submenus.forEach((m) => m.classList.remove("open"));
    };
    navLinks.forEach((link) => link.addEventListener("click", closeMenuOnLinkClick));

    // --- Abrir/cerrar submenús ---
    const handleSubmenuClick = (e, menu) => {
      e.stopPropagation();
      submenus.forEach((m) => m !== menu && m.classList.remove("open"));
      menu.classList.toggle("open");
    };

    submenus.forEach((menu) => {
      const label = menu.querySelector(".submenu-label");
      label?.addEventListener("click", (e) => handleSubmenuClick(e, menu));
    });

    // --- Cerrar menú y submenús al hacer clic fuera ---
    const closeAll = (e) => {
      if (nav.contains(e.target) || menuToggle.contains(e.target)) return;
      closeMenuOnLinkClick();
    };
    document.addEventListener("click", closeAll);

    // --- Limpieza ---
    return () => {
      menuToggle?.removeEventListener("click", toggleMenu);
      document.removeEventListener("click", closeAll);
      navLinks.forEach((link) =>
        link.removeEventListener("click", closeMenuOnLinkClick)
      );
      submenus.forEach((menu) => {
        const label = menu.querySelector(".submenu-label");
        label?.removeEventListener("click", (e) => handleSubmenuClick(e, menu));
      });
    };
  }, []);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
        <div className="titulo">
          <h1>TUASEGURADOR</h1>
          <h4>.com.ar</h4>
        </div>
      </div>

      {/* Icono de menú hamburguesa */}
      <i className="fas fa-bars menu-toggle"></i>

      <nav>
        {/* <p><a href="#inicio">INICIO</a></p> */}
        {/* === SUBMENÚ NUEVO === */}
        <div className="submenu">
          <p className="submenu-label">SEGUROS <svg
            className="chevron"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          </p>
          <div className="submenu-content">
            <p><a href="#seguros">Auto</a></p>
            <p><a href="#cotizador">Moto</a></p>
            <p><a href="#sinistros">Caucion</a></p>
            <p><a href="#sinistros">Agropecuarios</a></p>

          </div>
        </div>
        {/* === FIN SUBMENÚ === */}
        <p><a href="#contacto">CONTACTO</a></p>
        <p><a href="#info">INFO</a></p>
      </nav>
    </header>
  );
};

export default Header;
