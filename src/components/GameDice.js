import React, { PropTypes } from 'react';


const GameDice = ({ gameDice, toggleDice, gameStarted }) => (
  <div>
    <h2>Game Dice</h2>

    {gameDice.map((dice, index) => {
      return (
        <div key={index} onClick={() => gameStarted && toggleDice(index)}>
          <span>[Dice {index}]</span>
          <div>
            <span>val: {dice.value}</span>
            &nbsp;
            <span>group: {dice.group}</span>
          </div>
          <br />
        </div>
      );
    })}
  </div>
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
