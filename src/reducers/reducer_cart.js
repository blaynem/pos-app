import { 
	PUSH_TO_ADDCART,
	REMOVE_FROM_ADDCART,
	CHOOSE_USER_CART,
	REMOVE_CURRENT_USER_FROM_CART,
	GET_ALL_USERS,
	ADD_TO_USERS_CART,
	CREATE_NEW_USER
} from '../actions';

// gets all users data - i.e. cart information
// state in here are all users and their carts.
export function allUsersData(state = [], action){
	switch(action.type) {
		// actions: usersData
		case GET_ALL_USERS:
			return action.usersData;
		// actions: firstName, lastName
		// need to include an empty cart array and and id
		case CREATE_NEW_USER:
			return [ ...state, { first_name: action.firstName, last_name: action.lastName, cart: [], id: state.length + 1 } ]
		// actions: userId, items
		case ADD_TO_USERS_CART:
			return [ ...state.map(item => {
				if (item.id === action.userId) {
					item = { ...item, cart: item.cart.concat(action.items)}
				}
				return item;
			})]
		default:
			return state
	}
}

// adds items that are selected into the side cart
export function addCartReducer(state = [] , action) {
	switch(action.type) {
		// actions: brand, price, size
		case PUSH_TO_ADDCART:
			return [ ...state, {
				brand: action.brand,
				price: action.price,
				size: action.size
			}
		];
		// actions: index
		case REMOVE_FROM_ADDCART:
			return state.filter((item, index) => index !== action.index);
		default:
			return state;
	}
}

// changes selected user for the addCart
export function userSelect(state = null , action) {
	switch(action.type){
		// actions: userName, userId
		case CHOOSE_USER_CART:
			return { userName: action.userName, userId: action.userId }
		// does not recieve any actions, simply returns null to remove selected user
		case REMOVE_CURRENT_USER_FROM_CART:
			return null
		default:
			return state
	}
}
