import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameInfoBar from '../components/GameInfoBar';
import DeathRow from '../components/DeathRow';
import GameDice from '../components/GameDice';
import Gameboard from '../components/Gameboard';
import * as GameActions from '../actions/gameActions';


function mapStateToProps({ gameInfoBar, deathboard, gameDice, gameboard }) {
  return {
    gameInfoBar,
    deathboard,
    gameDice,
    gameboard
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
    const gameStarted = gameInfoBar.round > 0;

    return (
      <div>
        <GameInfoBar gameInfoBar={gameInfoBar} />

        {deathboard.map((deathRow, i) => <DeathRow key={i} deathRow={deathRow} /> )}

        <GameDice gameDice={gameDice} toggleDice={this.props.toggleDice} />

        <Gameboard gameboard={gameboard} />

        <div>
          <input type="button" value={gameStarted ? "Roll!" : "New Game"} onClick={() => gameStarted ? this.props.nextTurn() : this.props.newGame()} />
        </div>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pairadice);
