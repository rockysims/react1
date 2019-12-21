import React from 'react';
import './Board.css';

export default function Board({ board }) {
	return (
		<div className='board'>{
			board.map((row, r) =>
				<div className='row' key={r}>{
			row.map((cellValue, c) =>
				<div className={`cell ${cellValue}`} key={`${r},${c}`}>
					{cellValue[0]}
				</div>)
			}</div>)
		}</div>
	);
}