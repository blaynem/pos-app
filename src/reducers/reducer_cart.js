import { PUSH_TO_ADDCART, REMOVE_FROM_ADDCART, CHOOSE_USER_CART, GET_ALL_USERS, ADD_TO_USERS_CART } from '../actions';

// gets all users data - i.e. cart information
export function allUsersData(state = [], action){
	switch(action.type) {
		case GET_ALL_USERS:
			return action.usersData;
		case ADD_TO_USERS_CART:
			console.log("pressing add button", "user: ", action.userId, "items: ", action.items)
			console.log("state: ", state)
			state.map((item) => {
				if (item.id === action.userId){
					console.log("yes", item.id, item.cart)
				}
			})
			return [ ...state, {
				userId: action.userId,
				items: action.items
			}
		];
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
			return { userName: action.userName, userId: action.userId }
		default:
			return state
	}
}
