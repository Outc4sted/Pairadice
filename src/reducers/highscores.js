import { HIGHSCORE_LIST_REQ, HIGHSCORE_LIST_SUCC, HIGHSCORE_LIST_FAIL } from '../actions/highscoreActions';

const initialState = {
  isFetching: false,
  highscores: null
};

export default function highscores(state = initialState, action) {
  switch (action.type) {
    case HIGHSCORE_LIST_REQ:
      return Object.assign({}, state, {
        isFetching: true,
        highscores: null
      });

    case HIGHSCORE_LIST_SUCC:
      return Object.assign({}, state, {
        isFetching: false,
        vehicle: action.highscores
      });

    case HIGHSCORE_LIST_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        highscores: null
      });

    default:
      return state;
  }
}
