import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">
          Pairadice
        </Link>
      </li>
      <li>
        <Link to="highscores">
          Highscores
        </Link>
      </li>
    </ul>
  </nav>
);


export {NavBar as default};
