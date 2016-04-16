import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';

const muiTheme = getMuiTheme();

const Main = ({ children }) => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <div>
      <NavBar />
      {children}
    </div>
  </MuiThemeProvider>
);

Main.propTypes = {
  children: PropTypes.any.isRequired,
};


export {Main as default};
