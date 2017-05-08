import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFromAddCart } from '../actions';

class Cart extends Component {
	// removes an item in the "add Cart"
	RemoveFromAddCartButton(index){
		this.props.removeFromAddCart(index);
	}

	// on add to users cart button press, will do just that - neat.
	AddToUsersCart(items) {
		if (this.props.user == null) {
			console.log("no")
		} else {
			console.log(this.props.user)
			console.log(items)
		}
	}

	// renders username inside of the cart
	RenderUsersName(){
		if (this.props.user == null){
			return "<Select a Users name to Add to their Cart>"
		} else {
			return `Adding Items To ${this.props.user}'s Cart`
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
		if (this.props.cart.length >= 0){
			return <button className="btn" onClick={() => this.AddToUsersCart(this.props.cart)}>Add all to Cart</button>
		}
	}

	render() {
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
			</div>
		)
	}
}

// maps the state of state.cart and state.user to props of just cart and user.
function mapStateToProps(state) {
	return { cart: state.cart, user: state.user }
}

export default connect(mapStateToProps, { removeFromAddCart })(Cart);