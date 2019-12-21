import React, { Component } from 'react'
import logo from './../images/logo.svg';

export default class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" style={logoStyle} alt="logo" />
			</header>
		)
	}
}

const logoStyle = {
	height: '200px'
};