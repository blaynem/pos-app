import { 
	GET_ALL_USERS,
	CREATE_NEW_USER,
	ADD_TO_USERS_CART
} from '../actions';

// gets all users data - i.e. cart information
// state in here are all users and their carts.
export default function allUsersData(state = [], action){
	switch(action.type) {
		// actions: usersData
		case GET_ALL_USERS:
			return action.payload;
		// actions: firstName, lastName, id (to be changed)
		// need to include an empty cart array
		case CREATE_NEW_USER:
			return state
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