import { combineReducers } from 'redux';
import { addCartReducer, userSelect, getAllUsers, addToUsersCart } from './reducer_cart';

const rootReducer = combineReducers({
	cart: addCartReducer,
	user: userSelect,
	usersData: getAllUsers,
	usersCart: addToUsersCart
});

export default rootReducer;