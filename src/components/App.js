import React, {Component} from 'react';
import logo from '../logo.svg';
import NavBar from './Navbar'
import Banner from './Banner'
import NewsFeed from './NewsFeed'
import '../styles/App.css';

class App extends Component {
  render() {
    return (<div className="App">
      <NavBar/>
      <Banner/>
      <NewsFeed/>


    </div>);
  }
}

export default App;
