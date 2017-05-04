import { PUSH_TO_ADDCART, REMOVE_FROM_ADDCART } from '../actions';

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case PUSH_TO_ADDCART:
			return [ ...state, {
				brand: action.brand,
				price: action.price,
				size: action.size
			}];
		case REMOVE_FROM_ADDCART:
			return state.filter((item, index) => index !== action.index);
		default:
			return state;
	}
}