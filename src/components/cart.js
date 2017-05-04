import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeFromAddCart } from '../actions';

class Cart extends Component {
	RemoveFromAddCartButton(index){
		this.props.removeFromAddCart(index);
	}

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

	render() {
		return (
			<div>
				<div>
					<h3>Add To (Insert Name) Cart</h3>
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
	return { cart: state.cart }
}

export default connect(mapStateToProps, { removeFromAddCart })(Cart);