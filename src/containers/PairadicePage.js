import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameInfoBar from '../components/GameInfoBar';
import DeathBoard from '../components/DeathBoard';
import GameDice from '../components/GameDice';
import Gameboard from '../components/Gameboard';
import * as GameActions from '../actions/gameActions';


function mapStateToProps({ gameInfoBar, deathboard, gameDice, gameboard }) {
  return {
    gameInfoBar,
    deathboard,
    gameDice,
    gameboard,
    gameStarted: gameInfoBar.round > 0,
    groupsSelected: gameDice.filter(dice => dice.group > 0).length === 4
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GameActions, dispatch);
}

class Pairadice extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { gameInfoBar, deathboard, gameDice, gameboard } = this.props;
    const { gameStarted, groupsSelected, toggleDice, newGame, nextTurn, finishRound } = this.props;

    return (
      <div>
        <GameInfoBar gameInfoBar={gameInfoBar} />

        <DeathBoard deathboard={deathboard} />

        <GameDice gameDice={gameDice} toggleDice={toggleDice} gameStarted={gameStarted} />

        <Gameboard gameboard={gameboard} />

        <div>
          {!gameStarted &&
            <input type="button" value="New Game" onClick={() => newGame()} />
          }
          {gameStarted && !gameInfoBar.turnStarted &&
            <input type="button" value="Roll!" onClick={() => nextTurn()} />
          }
          {gameStarted && gameInfoBar.turnStarted &&
            <input type="button" value="End Turn" disabled={!groupsSelected} onClick={() => finishRound()} />
          }
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pairadice);
