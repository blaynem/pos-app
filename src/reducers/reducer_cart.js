import { PUSH_TO_ADDCART, REMOVE_FROM_ADDCART, CHOOSE_USER_CART, GET_ALL_USERS, ADD_TO_USERS_CART } from '../actions';

// gets all users data - i.e. cart information
export function getAllUsers(state = [], action){
	switch(action.type) {
		case GET_ALL_USERS:
			return action.usersData
		default:
			return state
	}
}

// adds items that are selected into the side cart
export function addCartReducer(state = [] , action) {
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
		default:
			return state;
	}
}

// changes selected user for the addCart
export function userSelect(state = null , action) {
	switch(action.type){
		case CHOOSE_USER_CART:
			return action.user
		default:
			return state
	}
}

// will add items in cart to specific users cart
export function addToUsersCart(state = [], action) {
	switch(action.type){
		case ADD_TO_USERS_CART:
			console.log("user: ", action.user, "items: ", action.items)
			return [ ...state, {
				user: action.user,
				items: action.items
			}
		];
		default:
			return state
	}
}