import React, { Component } from 'react'
import Board from './Board';

export default class Main extends Component {
	state = {
		board: []
	}

	// onDrag(oldCell, newCell, srcCell) {
	// 	this.swapCells(oldCell, srcCell);
	// 	this.swapCells(srcCell, newCell);
	// }

	// onDrag(sourceCell, targetCell, prevTargetCell) {
	// 	// prevTargetCell = prevTargetCell || ?;

	// 	if (sourceCell && targetCell) {
	// 		this.swapCells(sourceCell, targetCell);
	// 	}
	// }

	// onDragCellChanged(dragCell, oldDragCell) {
	// 	//*
	// 	if (oldDragCell && dragCell) {
	// 		this.swapCells(oldDragCell, dragCell);
	// 	}
	// 	/*/
	// 	const drag = this.state.drag;

	// 	if (oldDragCell === null) {
	// 		//start drag
	// 		drag.sourceCell = dragCell;
	// 		drag.sourceCell.classList.add('dragSource');
	// 	} else if (dragCell === null) {
	// 		//end drag
	// 		drag.targetCell = drag.targetCell || drag.sourceCell;
	// 		this.swapCells(drag.sourceCell, drag.targetCell);
	// 		drag.sourceCell.classList.remove('dragSource');
	// 		drag.sourceCell = null;
	// 		drag.targetCell = null;

	// 	} else {
	// 		//continue drag
	// 		drag.targetCell = dragCell;
	// 	}
	// 	//*/
	// }

	// swapCells(a, b) {
	// 	const rA = +a.getAttribute('r');
	// 	const cA = +a.getAttribute('c');
	// 	const rB = +b.getAttribute('r');
	// 	const cB = +b.getAttribute('c');
	// 	const { board } = this.state;
	// 	this.setState({
	// 		board:
	// 			board.map((row, r) => row.map((cell, c) => {
	// 				if (r === rA && c === cA) return board[rB][cB];
	// 				if (r === rB && c === cB) return board[rA][cA];
	// 				return cell;
	// 			}))
	// 	});
	// }

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

		this.setState({ board }); //render
	}

	render() {
		const mutableBoard = {
			data: this.state.board,
			set: newData => this.setState({
				board: newData
			})
		};

		return (
			<Board mutableBoard={mutableBoard} />
		);
	}
}