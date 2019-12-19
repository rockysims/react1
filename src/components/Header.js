import React, { Component } from 'react'
import logo from './../images/logo.svg';

export default class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" style={logoStyle} alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		)
	}
}

const logoStyle = {
	height: '200px'
};