import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { Row, Col } from 'react-flexbox-grid/lib';


const deathNotchLimit = 8;
const styles = {
  deathNotch: {
    width: 40,
    height: 40,
    background: 'red',
    border: '1px solid black'
  }
};

const DeathBoard = ({ deathboard }) => (
  <Row>
    <Col xs={12}>
      <Paper>
        {deathboard.map((deathRow, index) => {
          return (
            <Row key={index} middle="xs">
              <Col xs={2}>
                {deathRow.value &&
                  <h4>{`Dice ${deathRow.value}`}</h4>
                }
                {!deathRow.value &&
                  <h4>{`Deathrow #${index+1}`}</h4>
                }
              </Col>

              <Col xs={10}>
                <Row middle="xs">
                  {Array.apply(null, Array(deathNotchLimit)).map((val, i) => {
                    return (
                      <Col key={`${index}${i}`} xs>
                        <div style={styles.deathNotch}></div>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          );
        })}
      </Paper>
    </Col>
  </Row>
);

DeathBoard.propTypes = {
  deathboard: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    count: PropTypes.number.isRequired
  }))
};


export {DeathBoard as default};
