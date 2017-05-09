import { combineReducers } from 'redux';
import { addCartReducer, userSelect, allUsersData } from './reducer_cart';

const rootReducer = combineReducers({
	cart: addCartReducer,
	user: userSelect,
	allUsersData
});

export default rootReducer;