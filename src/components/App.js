import React, {Component} from 'react';
import logo from '../logo.svg';
import NavBar from './Navbar'
import Banner from './Banner'
import NewsFeed from './NewsFeed'
import Footer from './Footer'
import '../styles/App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add( faCheckSquare, faCoffee)

class App extends Component {
  render() {
    return (<div className="App">
      <NavBar/>
      <Banner/>
      <NewsFeed/>
      <Footer/>

    </div>);
  }
}

export default App;
