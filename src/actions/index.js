
// this will make it so when you press a button it pushes it to the "add to cart" cart,
// after that you will need to chose a persons cart that will accept this 
export const PUSH_TO_ADDCART = "PUSH_TO_ADDCART"
// removes certain item from the "add to cart" cart.
// I should really rename this.
export const REMOVE_FROM_ADDCART = "REMOVE_FROM_ADDCART"

export function addToAddCart(brand, price, size) {
	return {
		type: PUSH_TO_ADDCART,
		brand,
		price,
		size
	};
}