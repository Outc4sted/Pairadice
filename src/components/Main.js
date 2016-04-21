import React, { Component, PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import NavBar from './NavBar';

const muiTheme = getMuiTheme();

export default class Main extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  render() {
    const style = {
      height: 1000,
      width: 800,
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    };

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Paper style={style} zDepth={1}>
          <div>
            <NavBar />
            {this.props.children}
          </div>
        </Paper>
      </MuiThemeProvider>
    );
  }
}
