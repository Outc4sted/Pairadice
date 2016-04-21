import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ActionHome from 'material-ui/svg-icons/action/home';


const GameButtons = ({ gameStarted, turnStarted, groupsSelected, newGame, nextTurn, finishRound }) => (
  <div>
    <h2>GameButtons</h2>

    <div>
      {!gameStarted &&
        <RaisedButton label="New Game" onClick={() => newGame()} />
      }
      {gameStarted && !turnStarted &&
        <RaisedButton label="Roll!" onClick={() => nextTurn()} />
      }
      {gameStarted && turnStarted &&
        <RaisedButton label="End Turn" disabled={!groupsSelected} onClick={() => finishRound()} />
      }
    </div>
  </div>
);

GameButtons.propTypes = {
  gameStarted: PropTypes.bool,
  turnStarted: PropTypes.bool,
  groupsSelected: PropTypes.bool,
  newGame: PropTypes.func,
  nextTurn: PropTypes.func,
  finishRound: PropTypes.func
};


export {GameButtons as default};
