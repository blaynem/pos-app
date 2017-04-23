import React from 'react';
import './header.css';

const Header = () => (
	<div className="jumbotron">
		<div className="container">
			<h1>POS App</h1>
			<ul className="nav nav-tabs">
				<li className="active"><a data-toggle="tab" href="#home">Home</a></li>
				<li><a data-toggle="tab" href="#drink">Alcohol</a></li>
				<li><a data-toggle="tab" href="#food">Food</a></li>
			</ul>
		</div>
	</div>
)

export default Header;