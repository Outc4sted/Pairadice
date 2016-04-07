import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameInfoBar from '../components/GameInfoBar';
import DeathRow from '../components/DeathRow';
import GameDice from '../components/GameDice';
import * as GameActions from '../actions/gameActions';


function mapStateToProps({gameInfoBar, deathboard}) {
  return {
    gameInfoBar,
    deathboard
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
    const { gameInfoBar, deathboard } = this.props;

    return (
      <div>
        <GameInfoBar gameInfoBar={gameInfoBar} />
        {deathboard.map((deathRow, i) => <DeathRow key={i} deathRow={deathRow} /> )}
        <GameDice gameDice={gameDice} />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pairadice);
