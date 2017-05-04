import { PUSH_TO_ADDCART, REMOVE_FROM_ADDCART, CHOOSE_USER_CART } from '../actions';

const INITIAL_STATE = { cart: [], user_chosen: null}

export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
		case PUSH_TO_ADDCART:
			return [ ...state, {
				brand: action.brand,
				price: action.price,
				size: action.size
			}
		];
		case REMOVE_FROM_ADDCART:
			return state.filter((item, index) => index !== action.index);
		case CHOOSE_USER_CART:
			return { ...state, user_chosen: action.user}
		default:
			return state;
	}
}