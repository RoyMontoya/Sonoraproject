import React, {Component} from 'react';
import './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Footer extends React.Component {

  render() {
    return (<div className="custom-footer">
      <div className="container">
        <div className="row footer-content">
          <FontAwesomeIcon className="awesome-icon" icon="coffee"/>
          <p>Made for practice. Roy Montoya Montoya &#169; 2018</p>
          <FontAwesomeIcon className="awesome-icon" icon="coffee"/>
        </div>
      </div>
    </div>);
  }
}

export default Footer;
