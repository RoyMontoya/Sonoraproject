import React, {Component} from 'react';
import logo from '../img/avocado.png'
import '../styles/Navbar.css';

class NavBar extends React.Component {
  render(){
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark navbar-default">

          <a className="navbar-brand" href="#">
            <img className="logo-avodado" role="presentation" src={logo} alt="Avocado" title="Avocado"/>Nutricion Sonora</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" >
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Inicio
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nutricion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Instructores</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
