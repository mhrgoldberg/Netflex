import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import movies from './movies_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    movies
});

export default RootReducer;