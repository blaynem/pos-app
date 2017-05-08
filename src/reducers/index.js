import { combineReducers } from 'redux';
import { addCartReducer, userSelect, getAllUsers } from './reducer_cart';

const rootReducer = combineReducers({
	cart: addCartReducer,
	user: userSelect,
	usersData: getAllUsers
});

export default rootReducer;