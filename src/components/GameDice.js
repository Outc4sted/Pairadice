import React, { PropTypes } from 'react';


const GameDice = ({ gameDice, toggleDice }) => (
  <div>
    {gameDice.map((dice, index) => {
      return (
        <div key={index} onClick={() => toggleDice(index)}>
          <span>[Dice {index}]</span>
          <div>
            <span>val: {dice.value}</span>
            <span>group: {dice.group}</span>
          </div>
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
  toggleDice: PropTypes.func.isRequired
};


export {GameDice as default};
