import './Header.css'
import logo from '../assets/logo3.png'

const Header = () => {

  return (
    <header id="home">

      <nav className="navbar navbar-expand-md navbar-dark fixed-top no-space" id="banner">
        <div className="container-fluid no-space">
          <div className="titulo no-space">
            <img src={logo} alt="logo" className='' />  
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
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item dropdown ">
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
              <li className="nav-item"><a className="nav-link" href="#">Bio</a></li>

              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
              <li className="nav-item"><a className="nav-link" href="#"></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
