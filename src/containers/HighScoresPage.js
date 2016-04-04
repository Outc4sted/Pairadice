import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HighscoreActions from '../actions/highscoreActions';

function mapStateToProps({highscores: { isFetching, highscores }}) {
  return {
    isFetching,
    highscores
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HighscoreActions, dispatch);
}

class HighScoresPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isFetching, highscores } = this.props;

    return (
      <div>
        <h2>Highscores</h2>
        <p>Here's how you and everyone else fared</p>

        <div>
          {isFetching && highscores === null &&
            <h2>Loading...</h2>
          }
          {!isFetching && highscores === null &&
            <h2>Empty.</h2>
          }
          {highscores !== null &&
            <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              {highscores.map(function(highscore) {
                return <div>Name: {highscore.name} | Score: {highscore.score}</div>;
              })}
            </div>
          }
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HighScoresPage);
