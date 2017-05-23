import { 
	GET_ALL_ITEMS
} from '../actions';

// gets all users data - i.e. cart information
// state in here are all users and their carts.
export default function allItems(state = [], action){
	switch(action.type) {
		// actions: usersData
		case GET_ALL_ITEMS:
			return action.payload;
		default:
			return state
	}
}