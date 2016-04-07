export function getHighscores() {
  return dispatch => {
    dispatch(highscoreListRequest());
    // request from db
    // dispatch(highscoreListSuccess(highscores));
    // dispatch(highscoreListFail());
  }
}

export const HIGHSCORE_LIST_REQ = 'HIGHSCORE_LIST_REQ';
export function highscoreListRequest() {
  return {
    type: HIGHSCORE_LIST_REQ
  };
}

export const HIGHSCORE_LIST_SUCC = 'HIGHSCORE_LIST_SUCC';
export function highscoreListSuccess(highscores) {
  return {
    type: HIGHSCORE_LIST_SUCC,
    highscores
  };
}

export const HIGHSCORE_LIST_FAIL = 'HIGHSCORE_LIST_FAIL';
export function highscoreListFail(error = 'fffffuuuuuuuu') {
  return {
    type: HIGHSCORE_LIST_FAIL,
    error
  };
}

export function saveScore(gameInfo) {
  return dispatch => {
    dispatch(saveScoreRequest());
    // save to db
    // dispatch(saveScoreSuccess(gameInfo));
    // dispatch(saveScoreFail());

    dispatch(endGame());
  }
}

export const SAVE_SCORE_REQ = 'SAVE_SCORE_REQ';
export function saveScoreRequest() {
  return {
    type: SAVE_SCORE_REQ
  };
}

export const SAVE_SCORE_SUCC = 'SAVE_SCORE_SUCC';
export function saveScoreSuccess(gameInfo) {
  return {
    type: SAVE_SCORE_SUCC,
    gameInfo
  };
}

export const SAVE_SCORE_FAIL = 'SAVE_SCORE_FAIL';
export function saveScoreFail(error = 'fffffuuuuuuuu') {
  return {
    type: SAVE_SCORE_FAIL,
    error
  };
}
