import React, {Component} from 'react';
import './style.css'

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
                  <img src={this.props.image} alt=""/>
                </div>
                <div className="col-sm-9 text-container">
                  <h4>{this.props.title}</h4>
                  <p id="first-paragraph">{this.props.content}<a href="#">...read more</a></p>
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