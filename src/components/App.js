import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from '../print-to-resist-logo.svg';
import '../styles/App.css';
import ListingFormContainer from '../containers/ListingFormContainer';
import GalleryContainer from '../containers/GalleryContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h2>Welcome to Print to Resist</h2>
        </div>
        <p className="App-intro">
          Updates coming shortly...
        </p>
        <Route exact path="/" component={GalleryContainer} />
        <Route path="/create" component={ListingFormContainer} />
      </div>
    );
  }
}

export default App;
