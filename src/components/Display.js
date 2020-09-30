import React from 'react';

export default function Display(props) {
	return (
		<div id={props.id}>{props.value}</div>
	);
}