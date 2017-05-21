import { 
	PUSH_TO_ADDCART,
	REMOVE_FROM_ADDCART,
	CHOOSE_USER_CART,
	REMOVE_CURRENT_USER_FROM_CART,
	GET_ALL_USERS,
	ADD_TO_USERS_CART,
	CREATE_NEW_USER,
	INCREMENT_ITEM_QUANTITY,
	DECREMENT_ITEM_QUANTITY
} from '../actions';

// gets all users data - i.e. cart information
// state in here are all users and their carts.
export function allUsersData(state = [], action){
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

// adds items that are selected into the side cart
export function addCartReducer(state = [] , action) {
	switch(action.type) {
		// actions: brand, price, size
		case PUSH_TO_ADDCART:
			// searches through current state to see if the item is already in cart, if it is, returns the index
			const itemIndex = state.findIndex(item => item.id === action.id && item.size === action.size)
			// if items is not in cart, will add it to cart
			if (itemIndex === -1){
				return [ ...state, {
					brand: action.brand,
					price: action.price,
					size: action.size,
					id: action.id,
					quantity: action.quantity
				}]
			} else {
			// if item is in cart, will increase it's quantity by 1
				const amount = state[itemIndex].quantity
				amount++
				return [ ...state.slice(0, itemIndex),
					{
						brand: action.brand,
						price: action.price,
						size: action.size,
						id: action.id,
						quantity: amount
					},
					...state.slice(itemIndex + 1)
				]
			}
		// grabs the items index in the cart, and then increments it's quantity by 1
		case INCREMENT_ITEM_QUANTITY:
			let item = state[action.index]
			let amount = state[action.index].quantity
			amount++
			return [ ...state.slice(0, action.index),
				{
					brand: item.brand,
					price: item.price,
					size: item.size,
					id: item.id,
					quantity: amount
				},
				...state.slice(action.index + 1)
			]
		// grabs the items index in the cart, and then decrements it's quantity by 1
		case DECREMENT_ITEM_QUANTITY:
			item = state[action.index]
			amount = state[action.index].quantity
			amount--
			return [ ...state.slice(0, action.index),
				{
					brand: item.brand,
					price: item.price,
					size: item.size,
					id: item.id,
					quantity: amount
				},
				...state.slice(action.index + 1)
			]
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
