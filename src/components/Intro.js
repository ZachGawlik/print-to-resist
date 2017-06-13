import React from 'react';
import { Link } from 'react-router-dom';
import GalleryContainer from '../containers/GalleryContainer';
import '../styles/Intro.css';

const Intro = () =>
  <div className="Intro">
    <div className="Intro__information">
      <p>
        Are you a college student? Use your printing allowance to promote social
        change!
      </p>
      <p>
        Print to Resist helps activist organizations and concerned citizens
        spread key information related to the anti-Trump movement. This site
        aims to break the internet bubble to help unite the wide movement, to
        help instruct people of their rights, and to help promote effective
        methods of resistance.
      </p>
      <p>
        Want to help?{' '}
        <a className="button_link" href="#gallery">Print and post</a> or{' '}
        <Link className="button_link" to="/create">
          Add a poster worth spreading
        </Link>
      </p>
    </div>
    <GalleryContainer />
  </div>;

export default Intro;
