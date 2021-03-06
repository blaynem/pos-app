import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToAddCart } from '../actions';

import Cart from './cart';
import UsersCartOverview from './users_cart_overview';
import Items from '../data/items';
import './menu.css';

class Menu extends Component {
	// on presing an item in the menu, it will add that item to the "add to user cart"
	addToAddCart(brand, price, size, id) {
		this.props.addToAddCart(brand, price, size, id);
	}

	// runs through all of data / Items.alcohol and, assuming you didn't mess up the JSON like I did,
	// will then call pass that info down to the renderCategory.
	// If looking at data, this gives you the info of Items > Alcohol > (all categories of Alcohol (beer/liquor))
	renderAllCategories() {
		if (this.props.items === undefined){
			return
		}
		const { Items } = this.props.items
		return Items.sort((a, b) => a.itemid > b.itemid)
		.map((item, i) => {
			const category = item.category
			return (<div key={category + i}>
				<h4>{category}</h4>
				{this.renderButtons(item, category)}
			</div>)

		})
	}

	// renderButtons goes through Items > Alcohol > categories (i.e. Beer) > subCategory (i.e. Bottles)
	// then maps through to render the subCategories as buttons to be clicked.
	renderButtons(alcoholType, category) {
		return alcoholType[category].map((item, index) => {
			if (typeof item.price === "object") {
				// returns the size and price of the brands item
				return Object.keys(item.price).map((size, i) => {
					return(
						<button onClick={() => this.addToAddCart(item.brand, item.price[size], size, item.id)} className="btn btn-default" key={item.brand + item.price[size] + i}>
							<div>{item.brand}</div>
							<div>{size}: {item.price[size]}</div>
						</button>
					)
				})
			} else {
				// if it doesnt have multiple prices, will return correctly
				return(
						<button onClick={() => this.addToAddCart(item.brand, item.price, "bottle", item.id)} className="btn btn-default" key={item.brand + item.price + index}>
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
						<div className="col-xs-12 col-sm-push-8 col-sm-4">
							<Cart />
						</div>
						<div className="col-xs-12 col-sm-pull-4 col-sm-8">
							<h3>Alcohol</h3>
							{this.renderAllCategories()}
						</div>
					</div>

					<div id="food" className="tab-pane fade">
						<div className="col-xs-12 col-sm-push-8 col-sm-4">
							<Cart />
						</div>
						<div className="col-xs-12 col-sm-pull-4 col-sm-8">
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

// maps the state of all items to the prop users.
function mapStateToProps(state){
	return { items: state.allItems.data }
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addToAddCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);