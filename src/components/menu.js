import React, { Component } from 'react';

import Items from '../data/items';
import './menu.css';

class Menu extends Component {
	constructor(props){
		super(props)

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(brand, price, size) {
		console.log("brand: ", brand)
		console.log("price: ", price)
		console.log("size: ", size)
	}
	// this will go through Data/items and return the items as butons able to be clicked.
	renderButtons(toRender){
		return toRender.map((item, index) => {
			// if Data/items/price has more than one price i.e. has a small/large price, it will return buttons for each
			if (Object.keys(item.price).length > 1) {
				// returns the size and price of the brands item
				return Object.keys(item.price).map((size, i) => {
					return(
						<button onClick={() => this.handleClick(item.brand, item.price[size], size)} className="btn btn-default" key={item.brand + item.price[size] + i}>
							<div>{item.brand}</div>
							<div>{size}: {item.price[size]}</div>
						</button>
					)
				})
			} else {
				// if it doesnt have multiple prices, will return correctly
				return(
						<button onClick={() => this.handleClick(item.brand, item.price, "bottle")} className="btn btn-default" key={item.brand + item.price + index}>
							<div>{item.brand}</div>
							<div>{item.price}</div>
						</button>
					)
			}
		})
	}

	render() {
		// gets rid of needing to do 'Items.alcohol.beer.tap', simple cleanup
		const { beer, liquor } = Items.alcohol

		return (
			<div className="container">
				<div className="tab-content">
					<div id="home" className="tab-pane fade">
						<h2>Home</h2>
					</div>
					<div id="drink" className="tab-pane fade in active">
						<h2>Alcohol</h2>
						<div>
							<h4>tap</h4>
							{this.renderButtons(beer.tap)}
						</div>
						<div>
							<h4>bottle</h4>
							{this.renderButtons(beer.bottle)}
						</div>
						<div>
							<h4>vodka</h4>
							{this.renderButtons(liquor.vodka)}
						</div>
						<div>
							<h4>tequila</h4>
							{this.renderButtons(liquor.tequila)}
						</div>
					</div>
					<div id="food" className="tab-pane fade">
						<h2>Food</h2>
						{JSON.stringify(Items.food)}
					</div>
				</div>
			</div>
		)
	}
}

export default Menu;