import { combineReducers } from 'redux';
import addCartReducer from './reducer_cart';
import allUsersData from './reducer_user';
import userSelect from './reducer_select_user';

const rootReducer = combineReducers({
	cart: addCartReducer,
	user: userSelect,
	allUsersData
});

export default rootReducer;