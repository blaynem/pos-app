import React from 'react';
import './header.css';

import Menu from './menu';

const Header = () => (
	<div className="jumbotron">
		<div className="container">
			<h1>POS App</h1>
			<ul className="nav nav-tabs">
				<li className="active"><a data-toggle="tab" href="#home">Home</a></li>
				<li><a data-toggle="tab" href="#drink">Alcohol</a></li>
				<li><a data-toggle="tab" href="#food">Food</a></li>
			</ul>
			<div className="tab-content">
				<div id="home" className="tab-pane fade in active">
					<h2>hi</h2>
					<Menu />
				</div>
				<div id="drink" className="tab-pane fade">
					<h2>Alcohol</h2>
				</div>
				<div id="food" className="tab-pane fade">
					<h2>Food</h2>
				</div>
			</div>
		</div>
	</div>
)

export default Header;