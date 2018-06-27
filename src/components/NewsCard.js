import React, {Component} from 'react';
import logo from '../img/news.jpg';
import '../styles/NewsCard.css'

class NewsCard extends React.Component {
  render() {
    return (<div>
      <div>
        <div className="container">
          <div className="news-card">
          <div className="row">
            <div id="about" className="col-md-12">
              <div className="row">
                <div className="col-sm-3 xs-center">
                  <img src={logo} alt=""/>
                </div>
                <div className="col-sm-9">
                  <h4>Test of about page, redeem your self</h4>
                  <p id="first-paragraph">this is a simple paragraph that is meant to be nice and easy to type which is why there will be mommas no periods or any capital letters so i guess this means that it cannot really   <a href="#">...read more</a></p>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </div>
    </div>);
  }
}

export default NewsCard;
