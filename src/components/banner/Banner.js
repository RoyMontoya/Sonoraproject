import React, {Component} from 'react';
import banner from '../../img/banner.jpg'
import './style.css'

class Banner extends React.Component{
  render(){
    return (
      <div>
        <img src={banner} alt="banner" className="banner-img"/>
      </div>
    );
  }
}

export default Banner;
