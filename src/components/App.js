import React, { Component } from 'react';
import { Route } from 'react-router';
import logo from '../print-to-resist-logo.svg';
import '../styles/App.css';
import ListingFormContainer from '../containers/ListingFormContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Print to Resist</h2>
        </div>
        <p className="App-intro">
          Updates coming shortly...
        </p>
        <Route path="/create" component={ListingFormContainer} />
      </div>
    );
  }
}

export default App;
