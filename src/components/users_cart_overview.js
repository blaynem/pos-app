import React, { Component } from 'react';
import { connect } from 'react-redux';

class UsersCartOverview extends Component {
	getTotal(selectedUser) {
		let total= 0;

		const selectedUsersCart = this.props.userCarts.find(cart => {
			return cart.userid === selectedUser.userid
		})

		if (selectedUsersCart === undefined){ return }
		// need to update with AWS
		selectedUsersCart.cartItems.forEach((cartItem) => {
			cartItem.lineItems.forEach((singleItem) =>{
				const cartItemTotalPrice = parseInt(singleItem.price, 10) * parseInt(singleItem.quantity, 10)
				return total += cartItemTotalPrice
			})
		})

		if (total === 0) {return}
		return (
			<div>
				<p>Total Price: ${total}</p>
			</div>
		)
	}

	FindSelectedUser() {
		const { users, user } = this.props;
		if (user === null) {
			return <div><h3>Please select a User</h3></div>
		}
		// runs through all users in store, when it finds the users.id that matches the selected userId,
		// will set that value to selectedUser.
		const selectedUser = users.data.Items.find((singleUser) => {
			return singleUser.userid === user.userId
		})
		// console.log(selectedUser)
		return (
			<div>
				<h3 style={{textTransform: "capitalize"}}>{selectedUser.first} {selectedUser.last}</h3>
				<ul className="list-group">
					{this.RenderCartItems(selectedUser)}
				</ul>
				{this.getTotal(selectedUser)}
			</div>
		)	
	}

	RenderCartItems(selectedUser) {
		const { userCarts } = this.props

		const selectedUsersCart = userCarts.find(cart => {
			return cart.userid === selectedUser.userid
		})

		if (selectedUsersCart === undefined){ return }
		if (!selectedUsersCart.cartItems.length > 0) {
			return <li className="list-group-item"><h4>No items in cart.</h4></li>
		}

		return selectedUsersCart.cartItems.map((cartItem, i) => {
			return cartItem.lineItems.map((item, i) => {
				return (
					<li className="list-group-item" key={item.size + i}>
						<div className="row">
							<div className="col-xs-3">Price: {item.price}</div>
							<div className="col-xs-3">Size: {item.size}</div>
							<div className="col-xs-3">Quantity: {item.quantity}</div>
							<div className="col-xs-3">Brand: {item.brand}</div>
						</div>
					</li>
				)
			})
		})
	}

	render() {
		return (
			<div>
				<div className="col-xs-12 col-sm-offset-2 col-sm-8">
					{this.FindSelectedUser()}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { user: state.user, users: state.allUsersData, userCarts: state.downloadedCarts }
}

export default connect(mapStateToProps, { })(UsersCartOverview);