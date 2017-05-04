import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFromAddCart } from '../actions';

class Cart extends Component {
	RemoveFromAddCartButton(index){
		this.props.removeFromAddCart(index);
	}

	RenderUsersName(){
		if (this.props.user == null){
			return "<Select a Users name to Add to Cart>"
		} else {
			return `Add To ${this.props.user}'s Cart`
		}
	}
	// this renders the 'addToAddCart' cart.. need to rename this stuff.
	// for some reason I could no longer get just the 'this.props.cart', so i needed to do the Object.values.
	RenderAddCart() {
		// console.log("this.props.cart", this.props.cart)
		// console.log("this.props.cart[0]", this.props.cart[0])
		// console.log("this.props.cart[1]", this.props.cart[1])
		// console.log("this.props.cart[2]", this.props.cart[2])
		// console.log("object.values", Object.values(this.props.cart))
		return Object.values(this.props.cart).map((items, i) => {
			// if you dont check that items != null, it will break
			if (items != null){
				// if you don't check that items.whatever == null, it will throw up an empty list item
				if (items.brand == null){
					return null
				}
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
			}
		})
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
			</div>
		)
	}
}

function mapStateToProps(state) {
	// return bindActionCreators({ addToAddCart }, dispatch)
	// im really not sure why I need to do state.cart.user_chosen, I shouldn't need to get the user from cart.
	return { cart: state.cart, user: state.cart.user_chosen }
}

export default connect(mapStateToProps, { removeFromAddCart })(Cart);