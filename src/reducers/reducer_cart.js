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
		// actions: firstName, lastName, id (to be changed)
		// need to include an empty cart array
		case CREATE_NEW_USER:
			return [ ...state, { first_name: action.firstName, last_name: action.lastName, id: action.id, cart: [] } ]
		// actions: userId, items
		case ADD_TO_USERS_CART:
			return [ ...state.map(user => {
				if (user.id === action.userId) {
					user = { ...user, cart: user.cart.concat(action.items)}
				}
				return user;
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
			state.map((items) => {
				if (items.id === action.id && items.size === action.size){
					console.log("has simiar")
				}
			})
			return [ ...state, {
				brand: action.brand,
				price: action.price,
				size: action.size,
				id: action.id,
				quantity: action.quantity
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
