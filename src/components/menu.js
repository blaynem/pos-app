import React, { Component } from 'react';

import Items from '../data/items';

				
				
			


class Menu extends Component {
	renderButtons(toRender){
		return toRender.map((item, index) => {
			if (Object.keys(item.price).length > 1) {
				return Object.keys(item.price).map((size, i) => {
					return(
						<button key={item.brand + item.price[size] + i}>
							<div>{item.brand}</div>
							<div>{size}: {item.price[size]}</div>
						</button>
					)
				})
			} else {
				return(
						<button key={item.brand + item.price + index}>
							<div>{item.brand}</div>
							<div>{item.price}</div>
						</button>
					)
			}
		})
	}

	render() {
		return (
			<div className="container">
				<div className="tab-content">
					<div id="home" className="tab-pane fade in active">
						<h2>Home</h2>
					</div>
					<div id="drink" className="tab-pane fade">
						<h2>Alcohol</h2>
						<div>
							<h4>tap</h4>
							{this.renderButtons(Items.alcohol.beer.tap)}
						</div>
						<div>
							<h4>bottle</h4>
							{this.renderButtons(Items.alcohol.beer.bottle)}
						</div>
						<div>
							<h4>vodka</h4>
							{this.renderButtons(Items.alcohol.liquor.vodka)}
						</div>
						<div>
							<h4>tequila</h4>
							{this.renderButtons(Items.alcohol.liquor.tequila)}
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