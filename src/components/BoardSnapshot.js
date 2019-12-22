import React from 'react';
import './BoardSnapshot.css';

export default function BoardSnapshot({ board, listeners }) {
	const { onLeaveBoard, onEnterCell, onMouseDown, onMouseUp } = listeners;
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