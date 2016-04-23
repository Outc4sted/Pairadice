import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { GridList, GridTile } from 'material-ui/GridList';

const deathNotchLimit = 8;
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 120,
    overflowY: 'auto',
    marginBottom: 24,
  },
  deathNotch: {
    width: 50,
    height: 50,
    background: 'red'
  }
};

const DeathBoard = ({ deathboard }) => (
  <div style={styles.root}>
    <Paper>
      <h2>Deathboard</h2>

        {deathboard.map((deathRow, index) => {
          return (
            <div key={index}>
              <span>Value: {deathRow.value || 'x'}</span>
              <GridList cols={deathNotchLimit} cellHeight={100} padding={1} style={styles.gridList}>
                {Array.apply(null, Array(deathNotchLimit)).map((val, i) => {
                  return (
                    <GridTile key={`${index}${i}`}>
                      <span style={styles.deathNotch}>x</span>
                    </GridTile>
                  );
                })}
              </GridList>
            </div>
          );
        })}
    </Paper>
  </div>
);

DeathBoard.propTypes = {
  deathboard: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    count: PropTypes.number.isRequired
  }))
};


export {DeathBoard as default};
