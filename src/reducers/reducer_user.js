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
		// just returns state, since we created a new user on aws,
		// need to figure out best way to behave in redux after adding a new user
		case CREATE_NEW_USER:
			return state
		// just returns state, since we added it to a users cart on aws,
		// need to figure out best way to behave in redux after posting something to a users cart
		case ADD_TO_USERS_CART:
			return state
		default:
			return state
	}
}