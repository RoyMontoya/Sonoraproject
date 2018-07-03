import React, {Component} from 'react';
import NavBar from '../navbar/Navbar'
import Banner from '../banner/Banner'
import NewsFeed from '../news-feed/NewsFeed'
import Footer from '../footer/Footer'
import About from '../about/About'
import NutPortfolio from '../nut-portfolio/NutPortfolio'
import CoachPortfolio from '../coach-portfolio/CoachPortfolio'
import './style.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

library.add(faCheckSquare, faCoffee)

class App extends Component {
  render() {
    const newsFeedComponent = () => (<NewsFeed/>);
    const nutritionComponent = () => (<NutPortfolio/>);
    const coachComponent = () => (<CoachPortfolio/>);
    const aboutComponent = () => (<About/>);

    return (<div className="App">
      <Banner/>
      <Router>
        <div>
          <NavBar/>
          <Route exact="exact" path="/" component={newsFeedComponent}/>
          <Route path="/nutricion" component={nutritionComponent}/>
          <Route path="/instructores" component={coachComponent}/>
          <Route path="/about" component={aboutComponent}/>
        </div>
      </Router>

      <Footer/>
    </div>);
  }
}

export default App;
