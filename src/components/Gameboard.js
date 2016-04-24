import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { Row, Col } from 'react-flexbox-grid/lib';


const gameNotchLimit = 10;
const styles = {
  gameNotch: {
    width: 40,
    height: 40,
    background: '#00F',
    border: '1px solid black'
  }
};

const Gameboard = ({ gameboard }) => (
  <Row>
    <Col xs={12}>
      <Paper>
        {gameboard.map((gameRow, index) => {
          return (
            <Row key={index} middle="xs">
              <Col xs={1}>
                <h3>{`[${gameRow.value}]`}</h3>
              </Col>

              <Col xs={10}>
                <Row middle="xs">
                  {Array.apply(null, Array(gameNotchLimit)).map((val, i) => {
                    return (
                      <Col key={`${index}${i}`} xs>
                        <div style={styles.gameNotch}></div>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
              <Col xs={1}>
                <h5>{gameRow.points * gameRow.count} pts</h5>
              </Col>
            </Row>
          );
        })}
      </Paper>
    </Col>
  </Row>
);

Gameboard.propTypes = {
  gameboard: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    points: PropTypes.number.isRequired
  })).isRequired
};


export {Gameboard as default};
