import { 
	PUSH_TO_ADDCART,
	REMOVE_FROM_ADDCART,
	INCREMENT_ITEM_QUANTITY,
	DECREMENT_ITEM_QUANTITY
} from '../actions';

// adds items that are selected into the side cart
export default function addCartReducer(state = [] , action) {
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
				let amount = state[itemIndex].quantity
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
			// if the amount will be reduced to 0, remove it from cart
			if (amount === 0) {
				return [ ...state.slice(0, action.index),
					...state.slice(action.index + 1)
				]
			} else {
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
			}
		// actions: index
		case REMOVE_FROM_ADDCART:
			return state.filter((item, index) => index !== action.index);
		default:
			return state;
	}
}

