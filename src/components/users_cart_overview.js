import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserSelect from './user_select';

			// {users.cart.map((item, i) => {return <p key={item + i}>{i}. {item.brand}</p>})}
class UsersCartOverview extends Component {
	getTotal(cart) {
		let total= 0;

		cart.forEach((cartItem) => {
			return total += cartItem.price
		})

		return total
	}

	FindSelectedUser() {
		const { users, user } = this.props;
		if (user === null) {
			return <div><h3>Please select a User</h3></div>
		}
		// runs through all users in store, when it finds the users.id that matches the selected userId,
		// will set that value to selectedUser.
		const selectedUser = users.find((singleUser) => {
			return singleUser.id === user.userId
		})

		return (
			<div>
				<h3>{selectedUser.first_name} {selectedUser.last_name}</h3>
				<ul className="list-group">
					{this.RenderCartItems(selectedUser)}
				</ul>
				<div>
					<p>Total Price: ${this.getTotal(selectedUser.cart).toFixed(2)}</p>
				</div>
			</div>
		)	
	}

	RenderCartItems(thing) {
		return thing.cart.map((cartItem, i) => {
			return (
				<li className="list-group-item" key={i}>
					<div className="row">
						<div className="col-xs-4">Price: {cartItem.price}</div>
						<div className="col-xs-4">Size: {cartItem.size}</div>
						<div className="col-xs-4">Brand: {cartItem.brand}</div>
					</div>
				</li>
			)
		})
	}

	render() {
		return (
			<div>
				<div className="col-xs-3">
					<h2>All Users</h2>
					<UserSelect />
				</div>
				<div className="col-xs-offset-2 col-xs-6">
					{this.FindSelectedUser()}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return { user: state.user, users: state.allUsersData }
}

export default connect(mapStateToProps, { })(UsersCartOverview);