import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseUserCart } from '../actions';

import './user_select.css';

class UserSelect extends Component {
	constructor(props){
		super(props);

		this.state = { searchTerm: '', userIndex: null }
		this.onInputChange = this.onInputChange.bind(this)
	}

	// on clicking a user, it will select that list items index, and set it to userIndex's state,
	// allowing me to render different class styles for a selected list item
	// on clicking a user, it will choose their cart for the items added in menu to be placed in.
	chooseUserCart(name, userId, i){
		this.setState({ userIndex: i })
		this.props.chooseUserCart(name, userId);
	}

	onInputChange(e){
		this.setState({ searchTerm: e.target.value })
	}

	// renders all the users inside of /data/users
	renderUsers(){
		// filters out any of the names that do not include this.state.searchTerm
		return this.props.users.filter((name) => {
			// concat first/last into full name with a space so it will not filter out names with spaces
			const full_name = (name.first_name + " " + name.last_name)
			return (full_name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
		}).map((users, i) => {
			// sets class depending on if this.state.userIndex is equal to the index or not.
			const listItemClass = (this.state.userIndex === i ? "list-group-item active" : "list-group-item")
			return (
				<li key={users + i} className={listItemClass} onClick={() => this.chooseUserCart(users.first_name, users.id, i)}>
					<h4 style={{textTransform:"capitalize"}}>{users.first_name} {users.last_name}</h4>
				</li>
			)
		})
	}

	render() {
		return (
			<div>
				<div className="col-xs-12 input-group">
					<input
						type="text"
						className="form-control"
						placeholder="Search Users"
						value={this.state.searchTerm}
						onChange={this.onInputChange}/>
				</div>
				<div id="usersScroll">
					<ul className="list-group">
						<li className="list-group-item">
							<h4 style={{display:"inline-block"}}>Add New User</h4>
							<button 
								style={{width:"15%"}}
								className="btn btn-default pull-right"
								onClick={() => alert("this don't work yet fam, soon tho.")}>+</button>
						</li>
						{this.renderUsers()}
					</ul>
				</div>
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