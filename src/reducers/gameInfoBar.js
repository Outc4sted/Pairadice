import { SELECT_DICE, UNSELECT_DICE, CLEAR_DICE, NEW_GAME } from '../actions/gameActions';

const initialState = {
  round: 0,
  totalPoints: 0,
  groups: [0, 0]
};

export default function gameInfoBar(state = initialState, action) {
  const {groups} = state;

  switch (action.type) {
    case SELECT_DICE:
      groups[action.group] += action.value;
      return Object.assign({}, state, {
        groups
      });

    case UNSELECT_DICE:
      groups[action.group] -= action.value;
      return Object.assign({}, state, {
        groups
      });

    case CLEAR_DICE:
      return Object.assign({}, state, {
        groups: [0, 0]
      });

    case NEW_GAME:
      return initialState;

    default:
      return state;
  }
}
