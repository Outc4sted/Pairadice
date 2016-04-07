import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import gameInfoBar from './gameInfoBar';
import highscores from './highscores';
import deathboard from './deathboard';
import gameDice from './gameDice';


const rootReducer = combineReducers({
  gameInfoBar,
  highscores,
  deathboard,
  gameDice,
  routing,
});


export default rootReducer;
