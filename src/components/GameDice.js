import React, { PropTypes } from 'react';


const GameDice = ({ gameDice }) => (
  <div>
    {gameDice.map((dice, i) => {
      return (
        <div key={i}>
          <span>[Dice {i}]</span>
          <div>
            <span>val: {dice.val}</span>
            <span>group: {dice.group}</span>
          </div>
        </div>
      );
    })}
  </div>
);

GameInfoBar.propTypes = {
  gameDice: PropTypes.arrayOf(PropTypes.number)
};


export {GameInfoBar as default};
