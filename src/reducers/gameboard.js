import { MARK_POINT_NOTCH, NEW_GAME } from '../actions/gameActions';

const initialState = new Array(11).map(function(row, i) {
  let gameRow = {
    value: i+2,
    count: 0,
    points: 0
  };

  switch (gameRow.value) {
    case 2: case 12:
      gameRow.points = 1000; //2.78%
    case 3: case 11:
      gameRow.points = 500;  //5.56%
    case 4: case 10:
      gameRow.points = 350;  //8.33%
    case 5: case 9:
      gameRow.points = 250;  //11.11%
    case 6: case 8:
      gameRow.points = 200;  //13.89%
    default:
      gameRow.points = 150; //16.67%
  };

  return gameRow;
});

export default function gameboard(state = initialState, action) {
  switch (action.type) {
    case MARK_POINT_NOTCH:
      return state.map((gameRow) => {
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
