import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseUserCart } from '../actions';

import Users from '../data/users';

class UserSelect extends Component {
	// on clicking a user, it will choose their cart for the items added in menu to be placed in.
	chooseUserCart(name){
		this.props.chooseUserCart(name);
	}

	// renders all the users inside of /data/users
	renderUsers(){
		return Users.map((users, i) => {
			return (
				<li key={users + i} className="list-group-item" onClick={() => this.chooseUserCart(users.first_name)}>
					<h4>#{users.id} {users.first_name} {users.last_name}</h4>
					{users.cart.map((item, i) => {return <p key={item + i}>{i}. {item.brand}</p>})}
				</li>
			)
		});
	}

	render() {
		return (
			<div>
				<h2>Users</h2>
				<ul className="list-group">
					{this.renderUsers()}
				</ul>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ chooseUserCart }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserSelect);