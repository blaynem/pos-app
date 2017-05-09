import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFromAddCart, addToUsersCart, removeCurrentUserFromCart } from '../actions';

class Cart extends Component {
	constructor(props){
		super(props)

		this.state = { userErrorDisplay: "none", emptyCartErrorDisplay: "none" }
	}

	// removes an item in the "add Cart"
	RemoveFromAddCartButton(index){
		this.props.removeFromAddCart(index);
		this.setState({ emptyCartErrorDisplay: "none" })
	}

	// on add to users cart button press, will do just that - neat.
	AddToUsersCartButton(userId, items) {
		const { user, addToUsersCart, cart } = this.props
		if (cart.length <= 0 ){
			this.setState({ emptyCartErrorDisplay: "" })
			return;
		}
		if (user == null) {
			// if no user is selected, will allow the error message to be shown.
			this.setState({ userErrorDisplay: "" })
			return;
		}
		// This runs the addtoUsersCart action which adds all items in the addCart to the users cart.
		addToUsersCart(user.userId, cart)
		this.props.removeCurrentUserFromCart()
		this.setState({ userErrorDisplay: "none" })
		// This takes the length of the cart, and then runs the RemoveFromAddCartButton function on the zeroth index
		// for every item in the cart. Might be better way for doing this, but why create another action if this works.
		cart.forEach((item) => {this.RemoveFromAddCartButton(0)})
	}

	// renders username inside of the cart
	RenderUsersName(){
		const { user } = this.props;
		if (user == null){
			return "<Select a Users name to Add to their Cart>"
		} else {
			return `Adding Items To ${user.userName}'s Cart`
		}
	}
	// this renders the 'addToAddCart' cart.. need to rename this stuff.
	RenderAddCart() {
		return this.props.cart.map((items, i) => {
				return (
					<li key={items + i} className="list-group-item">
						<div className="row">
							<div className="col-xs-4">
								<h4>{items.brand}</h4>
							</div>
							<div className="col-xs-3">
								<h4>{items.size}</h4>
							</div>
							<div className="col-xs-3">
								<h4>{items.price}</h4>
							</div>
							<div className="col-xs-2">
								<button className="btn" onClick={() => this.RemoveFromAddCartButton(i)}>X</button>
							</div>
						</div>
					</li>
				)
		})
	}

	// renders the add to user cart button, only if there are items in the cart.
	renderAddToCartButton() {
		const emptyCartError = {
			color:"red",
			textAlign:"center",
			display: this.state.emptyCartErrorDisplay
		}

		if (this.props.cart.length >= 0){
			return (
				<div>
					<button className="btn" onClick={() => this.AddToUsersCartButton(this.props.cart)}>Add all to Cart</button>
					{!this.props.cart.length > 0 && <p style={emptyCartError}>Nothing In Cart</p>}
				</div>
			)
		}
	}

	render() {

		const noUserError = {
			color:"red",
			textAlign:"center",
			display: this.state.userErrorDisplay
		}

		return (
			<div>
				<div>
					<h3>{this.RenderUsersName()}</h3>
				</div>
				<div>
					<ul className="list-group">
						{this.RenderAddCart()}
					</ul>
				</div>
				<div style={{textAlign: "center"}}>
					{this.renderAddToCartButton()}
				</div>
				<div>
					{!this.props.user && <p style={noUserError}>No User Selected</p>}
				</div>
			</div>
		)
	}
}

// maps the state of state.cart and state.user to props of just cart and user.
function mapStateToProps(state) {
	return { cart: state.cart, user: state.user }
}

export default connect(mapStateToProps, { removeFromAddCart, addToUsersCart, removeCurrentUserFromCart })(Cart);