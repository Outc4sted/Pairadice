import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameInfoBar from '../components/GameInfoBar';
import DeathRow from '../components/DeathRow';
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
    const { gameInfoBar, deathboard, markDeathNotch } = this.props;

    return (
      <div>
        <GameInfoBar gameInfoBar={gameInfoBar} />
        {deathboard.map((deathRow) => { <DeathRow deathRow={deathRow} /> })}
        <input type="button" onClick={() => markDeathNotch(1)} />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pairadice);
