import { PUSH_TO_ADDCART } from '../actions';

const INITIAL_STATE = []

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case PUSH_TO_ADDCART:
			return [ ...state, {
				brand: action.brand,
				price: action.price,
				size: action.size
			}];
		default:
			return state;
	}
}