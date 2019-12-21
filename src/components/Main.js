import React, { Component } from 'react'
import Board from './Board';

export default class Main extends Component {
	state = {
		board: []
	}

	componentDidMount() {
		const size = 10;
		
		//board[][] = 'blank'
		const { board } = this.state;
		for (let r = 0; r < size; r++) {
			for (let c = 0; c < size; c++) {
				board[r] = board[r] || [];
				board[r][c] = 'blank';
			}
		}

		//set start/end cells
		const mid = Math.floor(size / 2);
		const midMinus = mid - Math.floor(mid / 2);
		const midPlus = mid + Math.floor(mid / 2);
		board[mid][midMinus] = 'start';
		board[mid][midPlus] = 'end';

		this.setState({board}); //render
	}

	render() {
		const { board } = this.state;
		return (
			<Board board={board} />
		);
	}
}