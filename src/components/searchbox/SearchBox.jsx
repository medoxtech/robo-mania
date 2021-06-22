import React from "react";
import "./SearchBox.style.css";

export default function SearchBox(props) {
	return (
		<div className="search-box">
			<input
				type="search"
				placeholder="Search"
				onChange={(e) => props.searchObj(e)}
			/>
		</div>
	);
}
