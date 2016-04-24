import React, { PropTypes } from 'react';
import { Row, Col } from 'react-flexbox-grid/lib';
import RaisedButton from 'material-ui/RaisedButton';


const styles = {
  gameDiceRow: {
    marginTop: '10px',
    height: '140px'
  },
  gameDice: {
    width: '100px',
    height: '100px',
    border: '4px solid #000',
    WebkitBorderRadius: '10px',
    MozBorderRadius: '10px',
    borderRadius: '10px',
    padding: '1px'
  },
  group1: {
    border: '8px solid #F00',
    WebkitBorderRadius: '20px',
    MozBorderRadius: '20px',
    borderRadius: '20px',
    padding: '2 0'
  },
  group2: {
    border: '8px solid #0F0',
    WebkitBorderRadius: '20px',
    MozBorderRadius: '20px',
    borderRadius: '20px',
    padding: '2 0'
  }
};

const GameDice = ({ gameDice, toggleDice, gameStarted }) => (
  <Row style={styles.gameDiceRow} around="xs" middle="xs">
    {gameDice.map((dice, index) => {
      return (
        <Col xs={2} key={index}>
          <div style={dice.group ? (dice.group === 1 ? styles.group1 : styles.group2) : null}>
            <RaisedButton style={styles.gameDice} onClick={() => gameStarted && toggleDice(index)}>
              <Row>
                <Col xs>
                  <span>{dice.value}</span>
                </Col>
              </Row>
            </RaisedButton>
          </div>
        </Col>
      );
    })}
  </Row>
);

GameDice.propTypes = {
  gameDice: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    group: PropTypes.number.isRequired
  })).isRequired,
  toggleDice: PropTypes.func.isRequired,
  gameStarted: PropTypes.bool.isRequired
};


export {GameDice as default};
