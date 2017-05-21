import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseUserCart, createNewUser } from '../actions';

import './user_select.css';

import axios from 'axios';
const ROOT_URL = 'https://1vfqaxaq34.execute-api.us-west-2.amazonaws.com/prod'

class UserSelect extends Component {
	constructor(props){
		super(props);

		this.state = {
			userSearchInput:'',
			userIndex: null,
			sortByState: "first",
			addUserFirstNameInput: "",
			addUserLastNameInput: "",
			emptyFirstNameErrorDisplay: "none",
			emptyLastNameErrorDisplay: "none",
			userExistsErrorDisplay: "none",
			dismissModal: "",
			newUserAddedFirstName: "",
			newUserAddedLastName: ""
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
		let letters = /[^a-zA-Z-]/;
		
		// if the targets name is userSearchInput, it will also include spaces
		if (target.name === "userSearchInput"){
			letters = /[^a-zA-Z-]\d/;
		}

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

		// checks if the error message is currently set to viewable, if it is, will remove it on text being entered
		if (this.state.userExistsErrorDisplay === ""){
			this.setState({ userExistsErrorDisplay: "none"})
		}

		this.setState({ [name]: target.value })
	}

	// renders all the users inside of /data/users
	renderUsers(){
		const { sortByState, userSearchInput } = this.state
		// allows you to choose what you're sorting by
		// will work on first(name) or last(name)
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
		if (this.props.users.data === undefined){
			return <li>fetching</li>
		}

		return this.props.users.data.Items.filter((name) => {
			// concat first/last into full name with a space so it will not filter out names with spaces
			const full_name = (name.first + " " + name.last)
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
				listItemClass = (this.props.selectedUser.userId === users.userid ? "list-group-item active" : "list-group-item")
			}
			return (
				<li key={users + i} className={listItemClass} onClick={() => this.chooseUserCart(users.first, users.userid)}>
					<h4 style={{textTransform:"capitalize"}}>{users.first} {users.last}</h4>
				</li>
			)
		})
	}

	// this is the button inside new user modal
	newUserButton() {
		const { addUserFirstNameInput, addUserLastNameInput } = this.state

		function findName(name) {
			if (name.first.toLowerCase() === addUserFirstNameInput.toLowerCase() && name.last.toLowerCase() === addUserLastNameInput.toLowerCase()){
				return true
			}
		}

		// checks if first name field has data - if it doesn't sets error message to display
		if (addUserFirstNameInput !== "") {
			// then checks to see if last name field has data - if it doesn't, sets error message to display.
			if (addUserLastNameInput !== "") {
				// checks to see if both the first and last name are already from one user
				// if so, will present error
				if (this.props.users.data.Items.find(findName)){
					this.setState({ userExistsErrorDisplay: "" })
					return
				}

				// if both are displayed, then it will submit
				this.props.createNewUser(addUserFirstNameInput, addUserLastNameInput)
				// resets both back to empty
				this.setState({ newUserAddedFirstName: addUserFirstNameInput, newUserAddedLastName: addUserLastNameInput, addUserFirstNameInput: "", addUserLastNameInput: ""})
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

	// renders the modal for adding new user
	renderModal() {
		const { addUserFirstNameInput, addUserLastNameInput, emptyFirstNameErrorDisplay,
						emptyLastNameErrorDisplay, userExistsErrorDisplay, newUserAddedFirstName,
						newUserAddedLastName } = this.state;
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
		// error message for already created user
		const userExistsError = {
			color: "red",
			display: userExistsErrorDisplay
		}

		// assigns the modals view to the add a new user screen
		let modalView = (
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
				<div className="col-xs-12">
					<label style={userExistsError}>User already exists</label>
				</div>
			</div>
		)
		// if a new user is succesfully added, it will render the new modal view
		// saying "Added new user FirstName LastName"
		if (newUserAddedFirstName !== "" && newUserAddedLastName !== ""){
			modalView = (
				<div className="row">
					<h2 style={{textTransform:"capitalize"}}>User <span style={{color:"#337ab7", fontWeight:"bold"}}>{newUserAddedFirstName} {newUserAddedLastName}</span> added!</h2>
				</div>
			)
		}

		// assigns modalFooter to have both the close and Add User button
		let modalFooter = (
			<div className="modal-footer">
      	<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      	<button type="button" className="btn btn-primary" onClick={() => this.newUserButton()}>Add User</button>
      </div>
		)
		// if a new user is succesfully add, it will render with only the close button
		if (newUserAddedFirstName !== "" && newUserAddedLastName !== ""){
			modalFooter = (
				<div className="modal-footer">
        	<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
			)
		}

		return (
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
								{modalView}
							</div>
						</div>
						{modalFooter}
					</div>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div>
				<h3 style={{display:"inline-block"}}>Users</h3>
				<div style={{marginTop:"20px"}} className="btn-group pull-right">
					<button
						className={this.state.sortByState === "first" ? "btn btn-primary" : "btn btn-default"}
						onClick={() => this.setState({ sortByState: "first" })}>First</button>
					<button
						className={this.state.sortByState === "last" ? "btn btn-primary" : "btn btn-default"}
						onClick={() => this.setState({ sortByState: "last" })}>Last</button>
				</div>
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
								data-target="#newUserModal"
								onClick={() => this.setState({ newUserAddedFirstName: "", newUserAddedLastName: ""})}>+</button>
						</li>
						{this.renderUsers()}
					</ul>
				</div>
				{this.renderModal()}
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