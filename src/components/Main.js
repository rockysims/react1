import React, { Component } from 'react'

export default class Main extends Component {
	state = {
		curNum: 10
	};

	render() {
		const { curNum } = this.state;
		return (
			<div style={mainDivStyle}>
				curNum: <strong>{curNum}</strong>
			</div>
		)
	}
}

const mainDivStyle = {
	borderRadius: '10px',
	border: '2px solid green',
	padding: '10px',
	margin: '10px'
};