import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseUserCart } from '../actions';

import Users from '../data/users';

class UserSelect extends Component {
	handleClicker(name){
		this.props.chooseUserCart(name);
	}

	renderUsers(){
		return Users.map((users, i) => {
			return (
				<li key={users + i} className="list-group-item" onClick={() => this.handleClicker(users.first_name)}>
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
	// return { cart: state.cart.all }

// export default connect(mapStateToProps, { addToAddCart })(Menu);
export default connect(null, mapDispatchToProps)(UserSelect);