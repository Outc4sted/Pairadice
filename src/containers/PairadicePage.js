import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameInfoBar from '../components/GameInfoBar';
import * as GameActions from '../actions/gameActions';


function mapStateToProps({gameInfoBar: { round, totalPoints, groups }}) {
  return {
    round,
    totalPoints,
    groups
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
    const { round, totalPoints, groups } = this.props;

    return (
      <div>
        <GameInfoBar round={round} totalPoints={totalPoints} groups={groups} />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pairadice);
