import { MARK_DEATH_NOTCH, NEW_GAME } from '../actions/gameActions';

const initialState = [
  { value: null, count: 0 },
  { value: null, count: 0 },
  { value: null, count: 0 }
];

export default function deathboard(state = initialState, action) {
  switch (action.type) {
    case MARK_DEATH_NOTCH:
      const notchExists = state.find(deathNotch => deathNotch.value === action.diceValue);

      return state.map(deathNotch => {
        let newDeathNotch = !notchExists && deathNotch.value === null;

        if (newDeathNotch)
          deathNotch.value = action.diceValue;

        if (deathNotch.value === action.diceValue)
          ++deathNotch.count;

        return deathNotch;
      });

    case NEW_GAME:
      return initialState;

    default:
      return state;
  }
}
