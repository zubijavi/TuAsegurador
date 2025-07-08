import './Header.css' // si tenés estilos personalizados

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top " id="banner">
      <div className="container">
        <div className='titulo'>
          <h1>JAVIER ZUBILLAGA</h1>
          <h5>Productor de Seguros</h5>

        </div>
        {/* Brand */}

        {/* Toggler Button */}
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

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            {/* Dropdown */}
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
