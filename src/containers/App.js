import React, { Component } from 'react';
import Header from '../components/header'
import Menu from '../components/menu';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers, getItems, getUserCartItems } from '../actions';

import UserSelect from '../components/user_select';

class App extends Component {
	constructor(props){
		super(props)
		
		this.props.getUsers()
    this.props.getItems()
  }

  render() {
    const madeByStyles = {
      textAlign:"center",
      background: "#eee",
      margin:"0"
    }
    
    return (
      <div style={{paddingLeft: 0, paddingRight: 0}} className="container-fluid">
        <div>
          <h4 style={madeByStyles}>Application created by: <a href="http://blaynemarjama.surge.sh" target="_blank">Blayne Marjama</a></h4>
          <h4 style={madeByStyles}>Source Code Available on <a href="https://github.com/blaynem/pos-app" target="_blank">Github</a></h4>
        </div>
        <Header />
        <div className="col-xs-6 col-sm-3">
          <UserSelect />
        </div>
        <div className="col-xs-6 col-sm-9">
          <Menu />
        </div>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ getUsers, getItems, getUserCartItems }, dispatch)
}

export default connect(null, mapDispatchToProps)(App);