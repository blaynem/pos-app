// this reducer allows me to cache already downloaded carts from AWS, and store them in a sort of offline cache

import { 
	GET_USER_CART_ITEMS_AWS
} from '../actions';

// changes selected user for the addCart
export default function downloadedCarts(state = [] , action) {
	switch(action.type){
		// actions: userName, userId
		case GET_USER_CART_ITEMS_AWS:
			const userIndex = state.findIndex(user => user.userid === action.meta.userid)
			// if items is not in cart, will add it to cart
			if (userIndex === -1){
				return [ ...state, {userid: action.meta.userid, cartItems: action.payload.data.Items}]
			}
			return [ ...state.slice(0, userIndex),
				{
					userid: action.meta.userid,
					cartItems: action.payload.data.Items
				},
				...state.slice(userIndex + 1)]
		default:
			return state
	}
}
