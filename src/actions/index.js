import axios from 'axios';
// this gets all users from the dynamoDB
export const GET_ALL_USERS = "GET_ALL_USERS";
// this gets all items from the dynamoDB
export const GET_ALL_ITEMS = "GET_ALL_ITEMS";
// this will make it so when you press a button it pushes it to the "add to cart" cart,
// after that you will need to chose a persons cart that will accept this 
export const PUSH_TO_ADDCART = "PUSH_TO_ADDCART";
// removes certain item from the "add to cart" cart.
// I should really rename this.
export const REMOVE_FROM_ADDCART = "REMOVE_FROM_ADDCART";
// this will chose the user who's cart you'll be adding to.
export const CHOOSE_USER_CART = "CHOOSE_USER_CART";
// this will remove the currently selected user from the cart once items are pushed into the users cart
export const REMOVE_CURRENT_USER_FROM_CART = "REMOVE_CURRENT_USER_FROM_CART";
// this will add all items in the cart to the selected users cart.
export const ADD_TO_USERS_CART = "ADD_TO_USERS_CART";
// this will INCREMENT the items quantity in the cart
export const INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY";
// this will DECREMENT the items quantity in the cart
export const DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY";
// this will allow you to create a new user
export const CREATE_NEW_USER = "CREATE_NEW_USER";
// this will grab a users cart from AWS and store it in a cache.
export const GET_USER_CART_ITEMS_AWS = "GET_USER_CART_ITEMS_AWS"

const ROOT_URL = 'https://1vfqaxaq34.execute-api.us-west-2.amazonaws.com/prod'

export function getUsers() {
	const request = axios.get(`${ROOT_URL}/users`)
	
	return {
		type: GET_ALL_USERS,
		payload: request
	}
}

export function getItems() {
	const request = axios.get(`${ROOT_URL}/items`)
	
	return {
		type: GET_ALL_ITEMS,
		payload: request
	}
}

export function addToAddCart(brand, price, size, id) {
	return {
		type: PUSH_TO_ADDCART,
		brand,
		price,
		size,
		id,
		quantity: 1
	};
}

export function removeFromAddCart(index) {
	return {
		type: REMOVE_FROM_ADDCART,
		index
	};
}

export function chooseUserCart(userName, userId) {
	return {
		type: CHOOSE_USER_CART,
		userName,
		userId
	};
}

export function removeCurrentUserFromCart() {
	return {
		type: REMOVE_CURRENT_USER_FROM_CART
	}
}

export function addToUsersCart(userid, lineItems) {
	axios.post(`${ROOT_URL}/carts`, {
    userid,
    lineItems
	}) 

	return {
		type: ADD_TO_USERS_CART
	}
}

export function incrementItemQuantity(index){
	return {
		type: INCREMENT_ITEM_QUANTITY,
		index
	}
}

export function decrementItemQuantity(index){
	return {
		type: DECREMENT_ITEM_QUANTITY,
		index
	}
}

export function createNewUser(first, last) {
	axios.post(`${ROOT_URL}/users`, {
		first,
		last
	}) 

	return {
		type: CREATE_NEW_USER
	}
}

export function getUserCartItemsAWS(userid) {
	const request = axios.get(`${ROOT_URL}/carts?userid=${userid}`)

	return {
		type: GET_USER_CART_ITEMS_AWS,
		payload: request,
		meta: {userid}
	}
}