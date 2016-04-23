import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';


const NavBar = () => (
  <nav>
    <Toolbar>
      <ToolbarGroup>
        <Link to="/">
          <ToolbarTitle text="Pairadice" />
        </Link>
      </ToolbarGroup>

      <ToolbarGroup float="right">
        <Link to="highscores">
          <ToolbarTitle text="Highscores" />
        </Link>
      </ToolbarGroup>
    </Toolbar>
  </nav>
);


export {NavBar as default};
