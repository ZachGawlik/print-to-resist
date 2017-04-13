import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from '../print-to-resist-logo.svg';
import '../styles/App.css';
import ListingDetailContainer from '../containers/ListingDetailContainer';
import ListingFormContainer from '../containers/ListingFormContainer';
import Intro from './Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__header">
          <Link to="/">
            <img
              alt="logo"
              className="App__logo"
              src={logo}
            />
          </Link>
          <h1 className="App__title">Print to Resist</h1>
          <p className="App__subtitle">Crowdsourced activist outreach</p>
        </div>
        <Route exact path="/" component={Intro} />
        <Route path="/create" component={ListingFormContainer} />
        <Route path="/poster/:listingId" component={ListingDetailContainer} />
      </div>
    );
  }
}

export default App;
