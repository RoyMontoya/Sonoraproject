import React, {Component} from 'react';
import '../styles/NewsFeed.css'
import NewsCard from './NewsCard'
import SocialBox from './SocialBox'
import FavoriteBox from './FavoriteBox'
import SubscribeBox from './SubscribeBox'
import data from '../controllers/FirebaseController'

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }

  componentWillMount() {
    let self = this;
    data.firestore.collection("news").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        self.setState({news: [...self.state.news, doc.data()]});
      });
    });
  }

  cutContent(content){
    if(content.length > 250){
      return content.slice(0,250);
    }
    return content;
  }

  render() {
    let newsDiv = this.state.news.map((news) =>{
      return (<NewsCard title={news.title} content={this.cutContent(news.content)} image={news.image}/>)
    });

    return (<div className="container">
      <div className="row">
        <div className="col-md-9 news-trail">
          <ul className="col-md-12">
            {newsDiv}
          </ul>
        </div>
        <div className="col-md-3 right-side-box">
          <ul className="col-md-12">
            <li><SocialBox/></li>
            <li><FavoriteBox/></li>
            <li><SubscribeBox/></li>
          </ul>

        </div>
      </div>
    </div>);
  }
}

export default NewsFeed
