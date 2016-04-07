export const NEW_GAME = 'NEW_GAME';
export function newGame() {
  return {
    type: NEW_GAME
  };
}

export const END_TURN = 'END_TURN';
export function endTurn({groups, deathDice}) {
  return dispatch => {
    dispatch(markPointNotch(groups[0]));
    dispatch(markPointNotch(groups[1]));
    dispatch(markDeathNotch(deathDice));
    dispatch(clearDiceGroups());
    dispatch(checkIfGameEnded());
  };
}

export const NEXT_TURN = 'NEXT_TURN';
export function nextTurn() {
  return {
    type: NEXT_TURN
  };
}

export const CHECK_IF_GAME_ENDED = 'CHECK_IF_GAME_ENDED';
export function checkIfGameEnded() {
  return (dispatch, getState) => {
    const {deathboard} = getState().entities;
    const loseCondition = deathboard.find((deathRow) => deathRow.count === 8)

    loseCondition ? dispatch(endGame()) : dispatch(nextTurn());
  };
}

export const END_GAME = 'END_GAME';
export function endGame() {
  return {
    type: END_GAME
  };
}

export const TOGGLE_DICE = 'TOGGLE_DICE';
export function toggleDice({index}) {
  return {
    type: TOGGLE_DICE,
    index
  };
}

export const CLEAR_DICE_GROUPS = 'CLEAR_DICE_GROUPS';
export function clearDiceGroups() {
  return {
    type: CLEAR_DICE_GROUPS
  };
}

export const MARK_DEATH_NOTCH = 'MARK_DEATH_NOTCH';
export function markDeathNotch(diceValue) {
  return {
    type: MARK_DEATH_NOTCH,
    diceValue
  };
}

export const MARK_POINT_NOTCH = 'MARK_POINT_NOTCH';
export function markPointNotch(groupValue) {
  return {
    type: MARK_POINT_NOTCH,
    groupValue
  };
}

export const CLEAR_DICE_PAIRS = 'CLEAR_DICE_PAIRS';
export function clearDicePairs() {
  return {
    type: CLEAR_DICE_PAIRS
  };
}
