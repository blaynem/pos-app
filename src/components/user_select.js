import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseUserCart, createNewUser } from '../actions';

import './user_select.css';

class UserSelect extends Component {
	constructor(props){
		super(props);

		this.state = {
			userSearchInput:'',
			userIndex: null,
			addUserFirstNameInput: "",
			addUserLastNameInput: ""
		}
		this.onInputChange = this.onInputChange.bind(this)
	}

	// on clicking a user, it will select that list items index, and set it to userIndex's state,
	// allowing me to render different class styles for a selected list item
	// on clicking a user, it will choose their cart for the items added in menu to be placed in.
	chooseUserCart(name, userId, i){
		this.setState({ userIndex: i })
		this.props.chooseUserCart(name, userId);
	}

	// refactored to allow multiple inputs to be handled depends on the targets name attribute
	onInputChange(e){
		const target = e.target
		const name = target.name
		this.setState({ [name]: target.value })
	}

	// renders all the users inside of /data/users
	renderUsers(){
		// filters out any of the names that do not include this.state.userSearchInput
		return this.props.users.filter((name) => {
			// concat first/last into full name with a space so it will not filter out names with spaces
			const full_name = (name.first_name + " " + name.last_name)
			return (full_name.toLowerCase().includes(this.state.userSearchInput.toLowerCase()));
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

	// opens the new user modal
	newUserButton() {
		const { addUserFirstNameInput, addUserLastNameInput } = this.state
		this.props.createNewUser(addUserFirstNameInput, addUserLastNameInput)
	}

	render() {
		return (
			<div>
				<div className="col-xs-12 input-group">
					<input
						type="text"
						name="userSearchInput"
						className="form-control"
						placeholder="Search Users"
						value={this.state.userSearchInput}
						onChange={this.onInputChange}/>
				</div>
				<div id="usersScroll">
					<ul className="list-group">
						<li className="list-group-item">
							<h4 style={{display:"inline-block"}}>Add New User</h4>
							<button 
								style={{width:"15%"}}
								className="btn btn-default pull-right"
								data-toggle="modal"
								data-target="#newUserModal">+</button>
						</li>
						{this.renderUsers()}
					</ul>
				</div>
				<div className="modal fade" id="newUserModal" tabIndex="-1" role="dialog" aria-hidden="true">
					<div className="modal-dialog" role="document">
				    <div className="modal-content">
				      <div className="modal-header">
				        <h4 className="modal-title" id="exampleModalLabel">Add New User</h4>
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
							<div className="modal-body">
								<div className="container-fluid">
									<div className="row">
										<div className="col-xs-6">
											<label>First Name</label>
											<input
												type="text"
												name="addUserFirstNameInput"
												className="form-control"
												placeholder="First Name"
												value={this.state.addUserFirstNameInput}
												onChange={this.onInputChange}
												/>
										</div>
										<div className="col-xs-6">
											<label>Last Name</label>
											<input 
												type="text"
												name="addUserLastNameInput"
												className="form-control"
												placeholder="Last Name"
												value={this.state.addUserLastNameInput}
												onChange={this.onInputChange}
												/>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
				        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				        <button type="button" className="btn btn-primary" onClick={() => this.newUserButton()}>Add User</button>
							</div>
						</div>
					</div>
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
	return bindActionCreators({ chooseUserCart, createNewUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSelect);