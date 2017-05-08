import { combineReducers } from 'redux';
import { addCartReducer, userSelect } from './reducer_cart';

const rootReducer = combineReducers({
	cart: addCartReducer,
	user: userSelect
});

export default rootReducer;