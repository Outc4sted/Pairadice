import React, { PropTypes } from 'react';


const DeathRow = ({deathRow: { value, count }}) => (
  <div>
    <p>WTF</p>
    <span>Value: {value}</span>
    <span>Count: {count}</span>
  </div>
);

DeathRow.propTypes = {
  deathRow: PropTypes.shape({
    value: PropTypes.number,
    count: PropTypes.number.isRequired
  })
};


export {DeathRow as default};
