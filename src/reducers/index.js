import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import gameInfoBar from './gameInfoBar';
import highscores from './highscores';
import deathboard from './deathboard';


const rootReducer = combineReducers({
  gameInfoBar,
  highscores,
  deathboard,
  routing,
});


export default rootReducer;
