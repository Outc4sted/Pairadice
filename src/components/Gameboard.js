import React, { PropTypes } from 'react';


const Gameboard = ({ gameboard }) => (
  <div>
    <h2>Gameboard</h2>

    {gameboard.map((row, i) => {
      return (
        <div key={i}>
          <span>[Game Row {row.value}]</span>
          <div>
            <span>count: {row.count}</span>
            &nbsp;
            <span>points: {row.points}</span>
          </div>
        </div>
      );
    })}
  </div>
);

Gameboard.propTypes = {
  gameboard: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired
  })).isRequired
};


export {Gameboard as default};
