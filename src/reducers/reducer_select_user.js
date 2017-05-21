import { 
	CHOOSE_USER_CART,
	REMOVE_CURRENT_USER_FROM_CART,
} from '../actions';

// changes selected user for the addCart
export default function userSelect(state = null , action) {
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
