import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameInfoBar from '../components/GameInfoBar';
import DeathRow from '../components/DeathRow';
import GameDice from '../components/GameDice';
import Gameboard from '../components/Gameboard';
import * as GameActions from '../actions/gameActions';


function mapStateToProps({gameInfoBar, deathboard, gameDice, gameboard}) {
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

    return (
      <div>
        <GameInfoBar gameInfoBar={gameInfoBar} />
        {deathboard.map((deathRow, i) => <DeathRow key={i} deathRow={deathRow} /> )}
        <GameDice gameDice={gameDice} />
        <Gameboard gameboard={gameboard} />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pairadice);
