import { combineReducers } from 'redux';
import CartReducer from './reducer_cart';

const rootReducer = combineReducers({
	cart: CartReducer
});

export default rootReducer;