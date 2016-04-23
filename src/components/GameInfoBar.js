import React, { PropTypes } from 'react';
import { Row, Col } from 'react-flexbox-grid/lib';


const GameInfoBar = ({gameInfoBar: { round, totalPoints, groupTotals }}) => (
  <Row>
    <Col xs>
      <span>Round: {round}</span>
    </Col>
    <Col xs>
      <span>Group 1 Total: {groupTotals[0]}</span>
    </Col>
    <Col xs>
      <span>Group 2 Total: {groupTotals[1]}</span>
    </Col>
    <Col xs>
      <span>Total Points: {totalPoints}</span>
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
