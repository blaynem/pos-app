import React, { Component } from 'react';
import { connect } from 'react-redux';


			// {users.cart.map((item, i) => {return <p key={item + i}>{i}. {item.brand}</p>})}
class UsersCartOverview extends Component {
	getTotal(cart) {
		let total= 0;

		// need to update with AWS
		// cart.forEach((cartItem) => {
		// 	return total += cartItem.price
		// })

		return total
	}

	FindSelectedUser() {
		// console.log(this.props.users.data)
		const { users, user } = this.props;
		if (user === null) {
			return <div><h3>Please select a User</h3></div>
		}
		// runs through all users in store, when it finds the users.id that matches the selected userId,
		// will set that value to selectedUser.
		const selectedUser = users.data.Items.find((singleUser) => {
			return singleUser.userid === user.userId
		})

		return (
			<div>
				<h3>{selectedUser.first} {selectedUser.last}</h3>
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
		console.log("need to update with aws")
		// return thing.cart.map((cartItem, i) => {
		// 	return (
		// 		<li className="list-group-item" key={i}>
		// 			<div className="row">
		// 				<div className="col-xs-4">Price: {cartItem.price}</div>
		// 				<div className="col-xs-4">Size: {cartItem.size}</div>
		// 				<div className="col-xs-4">Brand: {cartItem.brand}</div>
		// 			</div>
		// 		</li>
		// 	)
		// })
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
	return { user: state.user, users: state.allUsersData }
}

export default connect(mapStateToProps, { })(UsersCartOverview);