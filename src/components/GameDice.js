import React, { PropTypes } from 'react';


const GameDice = ({ gameDice }) => (
  <div>
    {gameDice.map((dice, i) => {
      return (
        <div key={i}>
          <span>[Dice {i}]</span>
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
  })).isRequired
};


export {GameDice as default};
