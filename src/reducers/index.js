import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import gameInfoBar from './gameInfoBar';
import highscores from './highscores';


const rootReducer = combineReducers({
  gameInfoBar,
  highscores,
  routing,
});


export default rootReducer;
