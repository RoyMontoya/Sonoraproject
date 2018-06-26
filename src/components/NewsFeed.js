import React, {Component} from 'react';
import '../styles/NewsFeed.css'
import NewsCard from './NewsCard'

class NewsFeed extends React.Component {
  render() {
    return (<div className="container">
      <div className="row">
        <div className="col-md-9 news-trail">
          <ul className="col-md-12">
            <li><NewsCard/></li>
            <li><NewsCard/></li>
            <li><NewsCard/></li>
          </ul>
        </div>
        <div className="col-md-3 right-side-box"></div>
      </div>
    </div>);
  }
}

export default NewsFeed
