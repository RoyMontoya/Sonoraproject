import React, {Component} from 'react';
import logo from '../../img/avocado.png'
import './style.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends React.Component {
  render(){
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark navbar-default">

          <a className="navbar-brand" href="#">
            <img role="presentation" src={logo} alt="Avocado" title="Avocado"/>Nutricion Sonora</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" >
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link to="/nutricion">Nutricion</Link>
              </li>
              <li className="nav-item">
                <Link to="/instructores">Instructores</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
