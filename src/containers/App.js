import React, { Component } from 'react';
import Header from '../components/header'
import Menu from '../components/menu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from '../actions';

import Users from '../data/users';

class App extends Component {
	constructor(props){
		super(props)
		
		this.props.getUsers(Users);
	}

  render() {
    return (
      <div style={{paddingLeft: 0, paddingRight: 0}} className="container-fluid">
        <Header />
        <Menu />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getUsers }, dispatch)
}

export default connect(null, mapDispatchToProps)(App);