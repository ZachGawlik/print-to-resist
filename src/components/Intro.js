import React from 'react';
import { Link } from 'react-router-dom';
import GalleryContainer from '../containers/GalleryContainer';
import '../styles/Intro.css';

const Intro = () => (
  <div className="Intro">
    <div className="Intro__information">
      <p>
        Print to Resist helps activist organizations and concerned citizens get key information spread. The service aims to break the internet bubble to instruct everyone of their rights, inform about current events, and promote effective methods of resistance.
      </p>
      <p>
        Are you a college student? Use up your semester printing allowance to promote social change!
      </p>
      <p>
        Want to help? <a className="button_link" href="#gallery">Print and post</a> or <Link className="button_link" to="/create">Add a poster worth spreading</Link>
      </p>
    </div>
    <GalleryContainer />
  </div>
);

export default Intro
