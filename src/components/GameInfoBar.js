import React, { PropTypes } from 'react';


const GameInfoBar = ({gameInfoBar: { round, totalPoints, groupTotals }}) => (
  <div>
    <span>Round: {round}</span>
    <br />

    <span>
      <span>Group 1 Total: {groupTotals[0]}</span>
      <span>&nbsp;&nbsp;</span>
      <span>Group 2 Total: {groupTotals[1]}</span>
    </span>

    <br />
    <span>Total Points: {totalPoints}</span>
  </div>
);

GameInfoBar.propTypes = {
  deathRow: PropTypes.shape({
    round: PropTypes.number.isRequired,
    totalPoints: PropTypes.number.isRequired,
    groupTotals: PropTypes.arrayOf(PropTypes.number).isRequired
  })
};


export {GameInfoBar as default};
