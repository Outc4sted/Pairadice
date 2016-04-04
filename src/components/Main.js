import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar';


export default class Main extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  render() {
    return (
      <div>
          <NavBar />
          {/* this will render the child routes */}
          {this.props.children}
      </div>
    );
  }
}
