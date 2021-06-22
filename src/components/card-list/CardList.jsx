import React from "react";
import "./CardList.style.css";
import Card from "../card/Card";

export default function CardList(props) {
	const newObjs = props.objs.filter((obj) =>
		obj.name.toLowerCase().includes(props.searchField.toLowerCase())
	);
	const cards = newObjs.map((obj) => {
		return <Card key={obj.id} obj={obj} />;
	});

	return <div className="card-list">{cards}</div>;
}
