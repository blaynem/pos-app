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
			sortByState: "first_name",
			addUserFirstNameInput: "",
			addUserLastNameInput: "",
			emptyFirstNameErrorDisplay: "none",
			emptyLastNameErrorDisplay: "none"
		}
		this.onInputChange = this.onInputChange.bind(this)
	}

	// on clicking a user, it will select that list items index, and set it to userIndex's state,
	// allowing me to render different class styles for a selected list item
	// on clicking a user, it will choose their cart for the items added in menu to be placed in.
	chooseUserCart(name, userId){
		this.setState({ userIndex: userId })
		this.props.chooseUserCart(name, userId);
	}

	// refactored to allow multiple inputs to be handled depends on the targets name attribute
	onInputChange(e){
		const target = e.target
		const name = target.name

		// regex of everything that is not a-zA-z or -
		const letters = /[^a-zA-Z-]/;
		// checks if they're trying to input anything that is not alphabetic or a dash
		if (target.value.match(letters)) {
			return
		}

		// this removes the error message upon text being input into the first name box
		// will only be triggered if emptyFirstNameErrorDisplay is set to show, that way it isn't triggered multiple times.
		if (name === "addUserFirstNameInput" && this.state.emptyFirstNameErrorDisplay === "") {
			this.setState({ emptyFirstNameErrorDisplay: "none" })
		}
		// this removes the error message upon text being input into the last name box
		// will only be triggered if emptyLastNameErrorDisplay is set to show, that way it isn't triggered multiple times.
		if (name === "addUserLastNameInput" && this.state.emptyLastNameErrorDisplay === "") {
			this.setState({ emptyLastNameErrorDisplay: "none" })
		}

		this.setState({ [name]: target.value })
	}

	// renders all the users inside of /data/users
	renderUsers(){
		const { sortByState, userSearchInput } = this.state
		// allows you to choose what you're sorting by
		// will work on first_name or last_name
		const sortBy = sortByState

		// sorts alphabetically by either first or last name
		function sortFirstName(a, b) {
			if ( a[sortBy].toLowerCase() < b[sortBy].toLowerCase() )
				return -1
			if ( a[sortBy].toLowerCase() > b[sortBy].toLowerCase() )
				return 1
			return 0
		}

		// filters out any of the names that do not include this.state.userSearchInput,
		return this.props.users.filter((name) => {
			// concat first/last into full name with a space so it will not filter out names with spaces
			const full_name = (name.first_name + " " + name.last_name)
			return (full_name.toLowerCase().includes(userSearchInput.toLowerCase()));
		})
		// then sorts alphabetically
		.sort(sortFirstName)
		// then maps over them to return list items
		.map((users, i) => {

			// sets class of list for initialization
			let listItemClass = "list-group-item"
			// if selectedUser != null, it will check if the selected user is = to the users id, if so, will add the active class
			if (this.props.selectedUser != null){
				listItemClass = (this.props.selectedUser.userId === users.id ? "list-group-item active" : "list-group-item")
			}

			return (
				<li key={users + i} className={listItemClass} onClick={() => this.chooseUserCart(users.first_name, users.id)}>
					<h4 style={{textTransform:"capitalize"}}>{users.first_name} {users.last_name}</h4>
				</li>
			)
		})
	}

	// opens the new user modal
	newUserButton() {
		const { addUserFirstNameInput, addUserLastNameInput } = this.state

		// checks if first name field has data - if it doesn't sets error message to display
		if (addUserFirstNameInput !== "") {
			// then checks to see if last name field has data - if it doesn't, sets error message to display.
			if (addUserLastNameInput !== "") {
				// if both are displayed, then it will submit
				this.props.createNewUser(addUserFirstNameInput, addUserLastNameInput)
				// resets both back to empty
				this.setState({ addUserFirstNameInput: "", addUserLastNameInput: ""})
				return
			}
			// if last name is empty, displays error message
			this.setState({ emptyLastNameErrorDisplay: "" })
			return 
		} else if (addUserLastNameInput !== "") {
			// if first name is empty, displays error message
			this.setState({ emptyFirstNameErrorDisplay: "" })
			return
		}
		// if both first/last name are empty, displays error message
		this.setState({ emptyFirstNameErrorDisplay: "", emptyLastNameErrorDisplay: "" })
	}

	render() {
		const { addUserFirstNameInput, addUserLastNameInput, emptyFirstNameErrorDisplay, emptyLastNameErrorDisplay, userSearchInput } = this.state;
		// error message display for first name
		const emptyFirstNameError = {
			color: "red",
			display: emptyFirstNameErrorDisplay
		}
		// error message display for last name
		const emptyLastNameError = {
			color: "red",
			display: emptyLastNameErrorDisplay
		}

		// will change the "Add User" button to dismiss the modal if both
		// a first and last name are entered.
		// Will definitely need to change this once I add erorrs for there being a user with that name
		let dismissOrNah = ""
		if (addUserFirstNameInput !== "" && addUserLastNameInput !== "") {
			dismissOrNah = "modal"
		}

		return (
			<div>
				<h3 style={{display:"inline-block"}}>Users</h3>
				<div style={{marginTop:"20px"}} className="btn-group pull-right">
					<button
						className={this.state.sortByState === "first_name" ? "btn btn-primary" : "btn btn-default"}
						onClick={() => this.setState({ sortByState: "first_name" })}>First</button>
					<button
						className={this.state.sortByState === "last_name" ? "btn btn-primary" : "btn btn-default"}
						onClick={() => this.setState({ sortByState: "last_name" })}>Last</button>
				</div>
				<div className="col-xs-12 input-group">
					<input
						type="text"
						name="userSearchInput"
						className="form-control"
						placeholder="Search Users"
						value={userSearchInput}
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
												value={addUserFirstNameInput}
												onChange={this.onInputChange}
												/>
											<label style={emptyFirstNameError}>Enter First Name</label>
										</div>
										<div className="col-xs-6">
											<label>Last Name</label>
											<input 
												type="text"
												name="addUserLastNameInput"
												className="form-control"
												placeholder="Last Name"
												value={addUserLastNameInput}
												onChange={this.onInputChange}
												/>
											<label style={emptyLastNameError}>Enter Last Name</label>
										</div>
									</div>
								</div>
							</div>
							<div className="modal-footer">
				        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
				        <button type="button" className="btn btn-primary" data-dismiss={dismissOrNah} onClick={() => this.newUserButton()}>Add User</button>
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
	return { users: state.allUsersData, selectedUser: state.user }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ chooseUserCart, createNewUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSelect);