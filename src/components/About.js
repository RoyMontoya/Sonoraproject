import React, {Component} from 'react';
import '../styles/About.css';
import banner from '../img/about-background.jpeg';
import separator from '../img/healthy.jpg';

class About extends React.Component {

  render() {
    return (
      <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 about-body">
          <h2 className="over-image-title">¿Quienes somos?</h2>
          <p className="over-image-text">Somos personas como tu que buscamos generar un cambio en la comunidad, promiviendo estilos de vida saludables
          y proporcionando las herramientas para que cualquier persona pueda adquirir un estilo de vida saludable.<br/><br/>
          Creemos que vivir al máximo es la unica forma de vivir y que solo podemos lograrlo a traves de estilos de vida saludables como los que encontraras en esta pagina.</p>
          <div className="image-wrapper"><img className="separator" src={separator}/></div>

          <h2></h2>

          </div>
        </div>
      </div>

    </div>);
  }
}

export default About;
