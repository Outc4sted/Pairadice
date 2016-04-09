import { TOGGLE_DICE, CLEAR_DICE_GROUPS, NEXT_TURN, NEW_GAME } from '../actions/gameActions';

const initialState = [
  {value: 0, group: 0},
  {value: 0, group: 0},
  {value: 0, group: 0},
  {value: 0, group: 0},
  {value: 0, group: 0}
];

export default function gameDice(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_DICE:
      return state.map((dice, index) => {
        if (index === action.index)
          if (dice.group > 0)
            dice.group = 0
          else {
            let groupFilter = state.filter(dice => dice.group === 1);
            if (groupFilter.length < 2)
              dice.group = 1
            else {
              groupFilter = state.filter(dice => dice.group === 2);
              if (groupFilter.length < 2)
                dice.group = 2
            }
          }

        return dice;
      });

    case CLEAR_DICE_GROUPS:
      return state.map(dice => {
        dice.group = 0;
        return dice;
      });

    case NEW_GAME:
    case NEXT_TURN:
      return state.map(dice => {
        dice.group = 0;
        dice.value = Math.floor(Math.random() * 6 + 1);
        return dice;
      });

    default:
      return state;
  }
}
