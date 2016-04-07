import React, { PropTypes } from 'react';
import NavBar from './NavBar';


const Main = ({ children }) => (
  <div>
      <NavBar />
      {children}
  </div>
);

Main.propTypes = {
  children: PropTypes.any.isRequired,
};


export {Main as default};
