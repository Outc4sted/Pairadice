import { MARK_DEATH_NOTCH, NEW_GAME } from '../actions/gameActions';

const initialState = [
  { value: null, count: 0 },
  { value: null, count: 0 },
  { value: null, count: 0 }
];

export default function deathboard(state = initialState, action) {
  switch (action.type) {
    case MARK_DEATH_NOTCH:
      let notchExists = state.find(deathNotch => deathNotch.value === action.deathDice.value);

      return state.map(deathNotch => {
        let newDeathNotch = !notchExists && deathNotch.value === null;

        if (newDeathNotch) {
          deathNotch.value = action.deathDice.value;
          notchExists = true;
        }

        if (deathNotch.value === action.deathDice.value)
          ++deathNotch.count;

        return deathNotch;
      });

    case NEW_GAME:
      return initialState;

    default:
      return state;
  }
}
