import { SELECT_DICE, UNSELECT_DICE, CLEAR_DICE_GROUPS, NEW_GAME } from '../actions/gameActions';

const initialState = [
  { value: null, group: null },
  { value: null, group: null },
  { value: null, group: null },
  { value: null, group: null },
  { value: null, group: null }
];

export default function deathboard(state = initialState, action) {
  switch (action.type) {
    case SELECT_DICE:
      return state;

    case UNSELECT_DICE:
      return state;

    case CLEAR_DICE_GROUPS:
      return state.map(dice => {
        dice.group = null;
        return dice;
      });

    case NEW_GAME:
      return initialState;

    default:
      return state;
  }
}
