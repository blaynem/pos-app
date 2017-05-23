import { combineReducers } from 'redux';
import addCartReducer from './reducer_cart';
import allUsersData from './reducer_user';
import userSelect from './reducer_select_user';
import allItems from './reducer_items'

const rootReducer = combineReducers({
	cart: addCartReducer,
	user: userSelect,
	allUsersData,
	allItems
});

export default rootReducer;