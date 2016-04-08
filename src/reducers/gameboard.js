import { MARK_POINT_NOTCH, NEW_GAME } from '../actions/gameActions';

const pts = {
  highest:  1000,
  veryhigh: 500,
  high:     350,
  decent:   250,
  okay:     200,
  notbad:   150
};

const initialState = [
  {value: 2,  points: pts.highest,  count: 0},
  {value: 3,  points: pts.veryhigh, count: 0},
  {value: 4,  points: pts.high,     count: 0},
  {value: 5,  points: pts.decent,   count: 0},
  {value: 6,  points: pts.okay,     count: 0},
  {value: 7,  points: pts.notbad,   count: 0},
  {value: 8,  points: pts.okay,     count: 0},
  {value: 9,  points: pts.decent,   count: 0},
  {value: 10, points: pts.high,     count: 0},
  {value: 11, points: pts.veryhigh, count: 0},
  {value: 12, points: pts.highest,  count: 0}
];

export default function gameboard(state = initialState, action) {
  switch (action.type) {
    case MARK_POINT_NOTCH:
      return state.map(gameRow => {
        if (action.groupValue === gameRow.value)
          ++gameRow.count;
        return gameRow;
      });

    case NEW_GAME:
      return initialState;

    default:
      return state;
  }
}
