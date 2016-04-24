import React, { PropTypes } from 'react';
import { Row, Col } from 'react-flexbox-grid/lib';


const styles = {
  row: {
    height: '50px'
  },
  left: {
    textAlign: 'left'
  },
  right: {
    textAlign: 'right'
  }
};

const GameInfoBar = ({gameInfoBar: { round, totalPoints, groupTotals }}) => (
  <Row style={styles.row} middle="xs">
    <Col xs={4}>
      <h3 style={styles.left}>Round: {round}</h3>
    </Col>
    <Col xs={3}>
      <h2 style={styles.right}>{totalPoints} points</h2>
    </Col>
    <Col xs={5}>
      <Row>
        <Col xs>
          <div style={styles.right}>Group 1: {groupTotals[0]}</div>
        </Col>
      </Row>
      <Row>
        <Col xs>
          <div style={styles.right}>Group 2: {groupTotals[1]}</div>
        </Col>
      </Row>
    </Col>
  </Row>
);

GameInfoBar.propTypes = {
  gameInfoBar: PropTypes.shape({
    round: PropTypes.number.isRequired,
    totalPoints: PropTypes.number.isRequired,
    groupTotals: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired
};


export {GameInfoBar as default};
