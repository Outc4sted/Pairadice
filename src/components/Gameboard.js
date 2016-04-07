import React, { PropTypes } from 'react';


const Gameboard = ({ gameboard }) => (
  <div>
    {gameboard.map((row) => {
      return (
        <div key={row.value}>
          <span>[Game Row {row.value}]</span>
          <div>
            <span>count: {row.count}</span>
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
