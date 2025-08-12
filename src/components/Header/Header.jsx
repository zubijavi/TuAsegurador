import './Header.css'
import lauburu from '../../assets/laubu.png'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50) // o cualquier cantidad de px que quieras
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header id="home">
      <nav className={`navbar navbar-expand-md navbar-dark fixed-top no-space ${isScrolled ? 'scrolled' : ''}`} id="banner">

  <div className="container-fluid no-space d-flex justify-content-between align-items-center">
    
    <div className="caja">
      <div className="cajaArriba">TuAsegurador.com.ar</div>
      <div className="cajaAbajo">
        <div>Javier Zubillaga</div>
        <img src={lauburu} alt="Lauburu" />
        <div>Productor de Seguros</div>
      </div>
    </div>

    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavbar"
      aria-controls="collapsibleNavbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse no-space" id="collapsibleNavbar">
      <ul className="navbar-nav ms-auto no-space">
                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbardrop"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Cotiza YA!
                  </a>
                  <ul className="dropdown-menu bg-dark">
                    <li><a className="dropdown-item" href="#">Auto</a></li>
                    <li><a className="dropdown-item" href="#">Moto</a></li>
                    <li><a className="dropdown-item" href="#">Hogar</a></li>
                    <li><a className="dropdown-item" href="#">Comercio</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#info">Info</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacto">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Header
