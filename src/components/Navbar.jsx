import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
return(

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">SE BUSCA</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to='/Home' className="py-4  d-flex text-align-center mt-1 px-4"> Home </Link>
       
      </li>
      <li className="nav-item">
      <Link to='/nuevoregistro' className="py-4  d-flex text-align-center mt-1 px-4"> Nuevo Registro </Link>
       
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle mt-4" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Información
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Busqueda</a>
          <a className="dropdown-item" href="#">Lugares</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Lo Encontraste?</a>
        </div>
      </li>
     
    </ul>
 
  </div>
</nav>
)

}
export default Navbar;