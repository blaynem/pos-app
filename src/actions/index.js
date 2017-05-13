
// this gets all users from my mock api
export const GET_ALL_USERS = "GET_ALL_USERS";
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
// this will allow you to create a new user
export const CREATE_NEW_USER = "CREATE_NEW_USER";

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

export function addToUsersCart(userId, items) {
	return {
		type: ADD_TO_USERS_CART,
		userId,
		items
	}
}

export function createNewUser(firstName, lastName) {
	return {
		type: CREATE_NEW_USER,
		firstName,
		lastName
	}
}