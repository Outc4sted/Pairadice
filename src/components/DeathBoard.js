import React, { PropTypes } from 'react';


const DeathBoard = ({ deathboard }) => (
  <div>
    <h2>Deathboard</h2>

    {deathboard.map((deathRow, index) => {
      return (
        <div key={index}>
          <span>Value: {deathRow.value || 'x'}</span>
          &nbsp;
          <span>Count: {deathRow.count}</span>
        </div>
      );
    })}
  </div>
);

DeathBoard.propTypes = {
  deathboard: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    count: PropTypes.number.isRequired
  }))
};


export {DeathBoard as default};
