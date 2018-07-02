import React, {Component} from 'react';
import './style.css'

class FavoriteBox extends React.Component{

  render(){
    return(
      <div className="col-md-12 no-padding">
        <div className="row">
          <div className="favorite-box">
            <h5>Our Favorite Blogs:</h5>
            <ul className="col-md-12">
              <a href="https://www.facebook.com/roy.montoyamontoya" target="_blank">International nutrition</a><br/>
              <a href="https://www.facebook.com/roy.montoyamontoya" target="_blank">10 healthy reasons</a><br/>
              <a href="https://www.facebook.com/roy.montoyamontoya" target="_blank">Healthy recipes</a><br/>
              <a href="https://www.facebook.com/roy.montoyamontoya" target="_blank">Best body</a><br/>
              <a href="https://www.facebook.com/roy.montoyamontoya" target="_blank">JCV Supplements</a><br/>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default FavoriteBox;