import React, {Component} from 'react';
import NavBar from '../navbar/Navbar'
import Banner from '../banner/Banner'
import NewsFeed from '../news-feed/NewsFeed'
import Footer from '../footer/Footer'
import About from '../about/About'
import NutPortfolio from '../nut-portfolio/NutPortfolio'
import CoachPortfolio from '../coach-portfolio/CoachPortfolio'
import './style.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add( faCheckSquare, faCoffee)

class App extends Component {
  render() {
    return (<div className="App">
      <Banner/>
      <NavBar/>
      {/* <About/> */}
      {/* <NutPortfolio/> */}
      {/* <CoachPortfolio/> */}
      <NewsFeed/>
      <Footer/>

    </div>);
  }
}

export default App;
