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
