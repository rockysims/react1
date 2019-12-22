import React, { Component } from 'react'
import BoardSnapshot from './BoardSnapshot';

export default class Board extends Component {
	state = {
		// sourceCell
	};

	// constructor() {
	// 	super();
	// 	console.log('Board created');
	// }

	mouseDown = false;
	listeners = {
		onEnterCell: e => {
			if (this.mouseDown) this.setDragCell(e.target);
		},
		onMouseDown: e => {
			if (e.target && e.target.classList.contains('cell')) {
				this.setDragCell(e.target);
			}
			this.mouseDown = true;
		},
		onMouseUp: e => {
			this.setDragCell(null);
			this.mouseDown = false;
		},
		onLeaveBoard: e => {
			this.setDragCell(null);
		},
	}

	//update drag indicators and fire this.onDrag()
	sourceCell = null;
	oldDragCell = null;
	setDragCell(newDragCell) {
		if (newDragCell && !newDragCell.classList) return; //elements only (or falsy)

		//manage .dragTarget indicator
		if (this.oldDragCell) this.oldDragCell.classList.remove('dragTarget');
		if (newDragCell) newDragCell.classList.add('dragTarget');

		//manage .dragSource indicator
		if (this.oldDragCell === null && newDragCell === null) {
			throw 'both null?!';
		} else if (this.oldDragCell === null) {
			//start drag
			console.log('start');
			this.sourceCell = newDragCell;
			this.sourceCell.classList.add('dragSource');
			this.onDrag(this.oldDragCell, newDragCell, this.sourceCell);
		} else if (newDragCell === null) {
			//end drag
			console.log('end');
			this.sourceCell.classList.remove('dragSource');
		} else {
			//continue drag
			console.log('continue');
			this.onDrag(this.oldDragCell, newDragCell, this.sourceCell);
		}

		this.oldDragCell = newDragCell;
	}

	rc(cell) {
		if (!cell) return null;
		return {
			r: +cell.getAttribute('r'),
			c: +cell.getAttribute('c')
		};
	}

	onDrag(oldCell, newCell, srcCell) {
		const { rc } = this;
		console.log('onDrag()', { oldCell: rc(oldCell), newCell: rc(newCell), srcCell: rc(srcCell) });
		if (oldCell) this.swapCells(oldCell, srcCell);
		this.swapCells(srcCell, newCell);
	}

	swapCells(a, b) {
		const rA = +a.getAttribute('r');
		const cA = +a.getAttribute('c');
		const rB = +b.getAttribute('r');
		const cB = +b.getAttribute('c');
		const { mutableBoard } = this.props;
		mutableBoard.set(
			mutableBoard.data.map((row, r) =>
				row.map((cell, c) => {
					if (r === rA && c === cA) return mutableBoard.data[rB][cB];
					if (r === rB && c === cB) return mutableBoard.data[rA][cA];
					return cell;
				})
			)
		);
	}

	render() {
		return (
			<BoardSnapshot board={this.props.mutableBoard.data} listeners={this.listeners} />
		);
	}
}
