export const NEW_GAME = 'NEW_GAME';
export function newGame() {
  return {
    type: NEW_GAME
  };
}

export function finishRound() {
  return dispatch => {
    dispatch(markPointNotch(0));
    dispatch(markPointNotch(1));
    dispatch(markDeathNotch());
    dispatch(updateTotalPoints());
    dispatch(clearDiceGroups());
    dispatch(checkIfGameEnded());
    dispatch(endTurn());
  };
}

export const END_TURN = 'END_TURN';
export function endTurn() {
  return {
    type: END_TURN
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
    const {deathboard} = getState();
    const loseCondition = deathboard.find((deathRow) => deathRow.count === 8)

    if (loseCondition)
      dispatch(endGame());
  };
}

export const END_GAME = 'END_GAME';
export function endGame() {
  return {
    type: END_GAME
  };
}

export const UPDATE_DICE_GROUP_TOTALS = 'UPDATE_DICE_GROUP_TOTALS';
export function updateDiceGroupTotals(gameDice) {
  return {
    type: UPDATE_DICE_GROUP_TOTALS,
    gameDice
  };
}

export const UPDATE_TOTAL_POINTS = 'UPDATE_TOTAL_POINTS';
export function updateTotalPoints() {
  return (dispatch, getState) => {
    const {gameboard} = getState();
    const points = gameboard.reduce((total, {count, points}) => {
      if (count > 0 && count < 5)
        return total -= 200;
      else if (count > 5)
        return total += (count - 5) * points;
      return total;
    }, 0);

    dispatch({
      type: UPDATE_TOTAL_POINTS,
      points
    });
  }
}

export const TOGGLE_DICE = 'TOGGLE_DICE';
export function toggleDice(index) {
  return (dispatch, getState) => {
    dispatch({
      type: TOGGLE_DICE,
      index
    });

    const {gameDice} = getState();
    dispatch(updateDiceGroupTotals(gameDice));
  }
}

export const CLEAR_DICE_GROUPS = 'CLEAR_DICE_GROUPS';
export function clearDiceGroups() {
  return {
    type: CLEAR_DICE_GROUPS
  };
}

export const MARK_DEATH_NOTCH = 'MARK_DEATH_NOTCH';
export function markDeathNotch() {
  return (dispatch, getState) => {
    const {gameDice} = getState();
    const deathDice = gameDice.find(dice => dice.group === 0);

    dispatch({
      type: MARK_DEATH_NOTCH,
      deathDice
    });
  }
}

export const MARK_POINT_NOTCH = 'MARK_POINT_NOTCH';
export function markPointNotch(group) {
  return (dispatch, getState) => {
    const {gameInfoBar} = getState();
    const groupValue = gameInfoBar.groupTotals[group];

    dispatch({
      type: MARK_POINT_NOTCH,
      groupValue
    });
  }
}

export const CLEAR_DICE_PAIRS = 'CLEAR_DICE_PAIRS';
export function clearDicePairs() {
  return {
    type: CLEAR_DICE_PAIRS
  };
}
