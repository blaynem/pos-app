import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToAddCart } from '../actions';

import Cart from './cart';
import UsersCartOverview from './users_cart_overview';
import UserSelect from './user_select';
import Items from '../data/items';
import './menu.css';

class Menu extends Component {
	// on presing an item in the menu, it will add that item to the "add to user cart"
	addToAddCart(brand, price, size) {
		this.props.addToAddCart(brand, price, size);
	}

	// runs through all of data / Items.alcohol and, assuming you didn't mess up the JSON like I did,
	// will then call pass that info down to the renderCategory.
	// If looking at data, this gives you the info of Items > Alcohol > (all categories of Alcohol (beer/liquor))
	renderAllCategories() {
		return Object.keys(Items.alcohol).map((itemType) => {
			const itemSubType = Object.keys(Items.alcohol[itemType])
			return itemSubType.map((items) => {
				return this.renderCategory(Items.alcohol[itemType][items], items)
			})
		})
	}

	// renderCategory will then go through all of Items > Alcohol > (all categories of Alcohol (beer/liquor))
	// render the type of alcohol that it is, e.g. Bottles (of beer), and then run the renderButtons function
	renderCategory(toRender, alcoholType){
		return (
			<div>
				<h4>{alcoholType}</h4>
				{this.renderButtons(toRender)}
			</div>
		)
	}

	// renderButtons goes through Items > Alcohol > categories (i.e. Beer) > subCategory (i.e. Bottles)
	// then maps through to render the subCategories as buttons to be clicked.
	renderButtons(toRender) {
		return toRender.map((item, index) => {
			// if Data/items/price has more than one price i.e. has a small/large price, it will return buttons for each
			if (Object.keys(item.price).length > 1) {
				// returns the size and price of the brands item
				return Object.keys(item.price).map((size, i) => {
					return(
						<button onClick={() => this.addToAddCart(item.brand, item.price[size], size)} className="btn btn-default" key={item.brand + item.price[size] + i}>
							<div>{item.brand}</div>
							<div>{size}: {item.price[size]}</div>
						</button>
					)
				})
			} else {
				// if it doesnt have multiple prices, will return correctly
				return(
						<button onClick={() => this.addToAddCart(item.brand, item.price, "bottle")} className="btn btn-default" key={item.brand + item.price + index}>
							<div>{item.brand}</div>
							<div>{item.price}</div>
						</button>
					)
			}
		})
	}

	render() {
		return (
			<div style={{margin:0}} className="row">
				<div className="tab-content">
					<div id="home" className="tab-pane fade">
						<h3>Home</h3>
					</div>

					<div id="drink" className="tab-pane fade in active">
						<div className="col-xs-6 col-sm-3">
							<UserSelect />
						</div>
						<div className="col-xs-6 col-sm-push-5 col-sm-4">
							<Cart />
						</div>
						<div className="col-xs-12 col-sm-pull-4 col-sm-5">
							<h3>Alcohol</h3>
							{this.renderAllCategories()}
						</div>
					</div>

					<div id="food" className="tab-pane fade">
						<div className="col-xs-6 col-sm-3">
							<UserSelect />
						</div>
						<div className="col-xs-6 col-sm-push-5 col-sm-4">
							<Cart />
						</div>
						<div className="col-xs-12 col-sm-pull-4 col-sm-5">
							<h3>Food</h3>
							{JSON.stringify(Items.food)}
						</div>
					</div>

					<div id="users" className="tab-pane fade">
						<UsersCartOverview />
					</div>
				</div>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addToAddCart }, dispatch)
}

export default connect(null, mapDispatchToProps)(Menu);