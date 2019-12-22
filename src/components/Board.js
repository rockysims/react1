import React from 'react';
import './Board.css';

export default function Board({ board, onDragCellChanged }) {
	//call setDragCell() as appropriate
	let mouseDown = false;
	function onEnterCell(e) {
		if (mouseDown) setDragCell(e.target);
	}
	function onMouseDown(e) {
		if (e.target && e.target.classList.contains('cell')) {
			setDragCell(e.target);
		}
		mouseDown = true;
	}
	function onMouseUp(e) {
		setDragCell(null);
		mouseDown = false;
	}
	function onLeaveBoard(e) {
		setDragCell(null);
	}
	function onLeaveBoard() {
		setDragCell(null);
	}

	let dragCell = null;
	function setDragCell(newDragCell) {
		if (newDragCell && !newDragCell.classList) return; //elements only (or falsy)

		if (dragCell) dragCell.classList.remove('dragTarget');
		if (newDragCell) newDragCell.classList.add('dragTarget');
		if (onDragCellChanged && newDragCell !== dragCell)
			onDragCellChanged(newDragCell, dragCell);
		dragCell = newDragCell;
	}

	return (
		<div className='board' onMouseLeave={onLeaveBoard}>{
			board.map((row, r) =>
				<div className='row' key={r}>{
					row.map((cellValue, c) =>
						<div className={`cell ${cellValue}`}
							r={r}
							c={c}
							key={`${r},${c}`}
							onMouseEnter={onEnterCell}
							onMouseDown={onMouseDown}
							onMouseUp={onMouseUp}
						>
							{cellValue[0]}
						</div>)
				}</div>)
		}</div>
	);
}