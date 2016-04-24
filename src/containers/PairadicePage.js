import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameInfoBar from '../components/GameInfoBar';
import DeathBoard from '../components/DeathBoard';
import GameDice from '../components/GameDice';
import Gameboard from '../components/Gameboard';
import GameButtons from '../components/GameButtons';
import * as GameActions from '../actions/gameActions';
import { Row, Col } from 'react-flexbox-grid/lib';


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
    const {
      gameInfoBar, deathboard, gameDice, gameboard,
      gameStarted, groupsSelected, toggleDice, newGame, nextTurn, finishRound
    } = this.props;

    return (
      <Row>
        <Col xs>
          <GameInfoBar gameInfoBar={gameInfoBar} />

          <DeathBoard deathboard={deathboard} />

          <GameDice gameDice={gameDice} toggleDice={toggleDice} gameStarted={gameStarted} />

          <Gameboard gameboard={gameboard} />

          <GameButtons gameStarted={gameStarted} turnStarted={gameInfoBar.turnStarted} groupsSelected={groupsSelected} newGame={newGame} nextTurn={nextTurn} finishRound={finishRound} />
        </Col>
      </Row>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Pairadice);
