import React from 'react';

function Navbar_LM() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/ruta/al/logo.png" // Reemplaza "/ruta/al/logo.png" con la ruta de tu logo
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Mi Aplicación
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Documentos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nosotros
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar_LM;
