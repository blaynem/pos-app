import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseUserCart } from '../actions';

class UserSelect extends Component {
	// on clicking a user, it will choose their cart for the items added in menu to be placed in.
	chooseUserCart(name, userId){
		this.props.chooseUserCart(name, userId);
	}

	// renders all the users inside of /data/users
	renderUsers(){
		return this.props.users.map((users, i) => {
			return (
				<li key={users + i} className="list-group-item" onClick={() => this.chooseUserCart(users.first_name, users.id)}>
					<h4>{users.first_name} {users.last_name}</h4>
				</li>
			)
		});
	}

	render() {
		return (
			<div>
				<ul className="list-group">
					<li className="list-group-item">
						<h4 style={{display:"inline-block"}}>Add New User</h4>
						<button style={{width:"15%"}} className="btn btn-default pull-right" onClick={() => alert("this don't work yet fam, soon tho.")}>+</button>
					</li>
					{this.renderUsers()}
				</ul>
			</div>
		)
	}
}

// maps the state of all usersData to the prop users.
function mapStateToProps(state){
	return { users: state.allUsersData }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ chooseUserCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSelect);