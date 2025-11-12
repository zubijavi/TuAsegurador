import React, { useEffect } from "react";
import "./Header.css";

import logo from '../../assets/logoJz2.png'

const Header = () => {
  useEffect(() => {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");
    const submenus = document.querySelectorAll(".submenu");

    // --- Abrir/cerrar menú hamburguesa ---
    const toggleMenu = (e) => {
      e.stopPropagation();
      nav.classList.toggle("active");
      menuToggle.classList.toggle("fa-bars");
      menuToggle.classList.toggle("fa-xmark");
    };
    menuToggle?.addEventListener("click", toggleMenu);

    // --- Abrir/cerrar submenús (click en label) ---
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
      nav.classList.remove("active");
      submenus.forEach((m) => m.classList.remove("open"));
      menuToggle.classList.remove("fa-xmark");
      menuToggle.classList.add("fa-bars");
    };

    document.addEventListener("click", closeAll);

    // --- Limpieza ---
    return () => {
      menuToggle?.removeEventListener("click", toggleMenu);
      document.removeEventListener("click", closeAll);
      submenus.forEach((menu) => {
        const label = menu.querySelector(".submenu-label");
        label?.removeEventListener("click", (e) => handleSubmenuClick(e, menu));
      });
    };
  }, []);

  return (
    <header>
      <div className="logo">
        <h1>TuAsegurador</h1>
        <h4>.com.ar</h4>
        {/* <img src={logo} alt="logo" /> */}
      </div>

      {/* Icono de menú hamburguesa */}
      <i className="fas fa-bars menu-toggle"></i>

      <nav>
        <p>Inicio</p>

        <div className="submenu">
          <p className="submenu-label">Seguros ▾</p>
          <div className="submenu-content">
            <p>Autos</p>
            <p>Hogar</p>
            <p>Vida</p>
            <p>Comercio</p>
          </div>
        </div>

        <p>Siniestros</p>

        <div className="submenu">
          <p className="submenu-label">Ayuda ▾</p>
          <div className="submenu-content">
            <p>Quiénes Somos</p>
            <p>Preguntas Frecuentes</p>
          </div>
        </div>

        <p>Blog</p>
        <p>
          <a href="#info">Info</a>
        </p>
      </nav>
    </header>
  );
};

export default Header;
