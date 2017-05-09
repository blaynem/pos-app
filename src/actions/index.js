
// this gets all users from my mock api
export const GET_ALL_USERS = "GET_ALL_USERS"
// this will make it so when you press a button it pushes it to the "add to cart" cart,
// after that you will need to chose a persons cart that will accept this 
export const PUSH_TO_ADDCART = "PUSH_TO_ADDCART"
// removes certain item from the "add to cart" cart.
// I should really rename this.
export const REMOVE_FROM_ADDCART = "REMOVE_FROM_ADDCART"
// this will chose the user who's cart you'll be adding to.
export const CHOOSE_USER_CART = "CHOOSE_USER_CART";
// this will add all items in the cart to the selected users cart.
export const ADD_TO_USERS_CART = "ADD_TO_USERS_CART"

export function getUsers(usersData) {
	return {
		type: GET_ALL_USERS,
		usersData
	}
}

export function addToAddCart(brand, price, size) {
	return {
		type: PUSH_TO_ADDCART,
		brand,
		price,
		size
	};
}

export function removeFromAddCart(index) {
	return {
		type: REMOVE_FROM_ADDCART,
		index
	};
}

export function chooseUserCart(user) {
	return {
		type: CHOOSE_USER_CART,
		user
	};
}

export function addToUsersCart(user, items) {
	return {
		type: ADD_TO_USERS_CART,
		user,
		items
	}
}