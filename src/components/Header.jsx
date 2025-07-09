import './Header.css'
import lauburu from '../assets/laubu.png'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top no-space" id="banner">
      <div className="container-fluid no-space">
        <div className="titulo no-space">
          <div className="no-space">
            <h1 className="no-space">JAVIER ZUBILLAGA</h1>
            <h5 className="no-space">Productor de Seguros</h5>
          </div>
          <img src={lauburu} alt="" />
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

        <div className="collapse navbar-collapse bg-dark no-space" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto no-space">
            <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Link</a></li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbardrop"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Link 1</a></li>
                <li><a className="dropdown-item" href="#">Link 2</a></li>
                <li><a className="dropdown-item" href="#">Link 3</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
