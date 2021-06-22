import React from "react";
import "./Card.style.css";

export default function Card(props) {
	return (
		<div className="card">
			<img
				src={`https://robohash.org/${props.obj.id}?set=set3`}
				alt="monster"
			/>
			<h3>{props.obj.name}</h3>
			<h4>{props.obj.username}</h4>
			<p>{props.obj.email}</p>
		</div>
	);
}
