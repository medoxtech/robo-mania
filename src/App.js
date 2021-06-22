import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/searchbox/SearchBox";
class App extends Component {
	constructor() {
		super();
		this.state = {
			objs: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					objs: data,
				})
			);
	}

	searchObj = (e) => {
		this.setState({
			searchField: e.target.value,
		});
	};

	render() {
		return (
			<div className="App">
				<h1>Robots</h1>
				<SearchBox searchObj={this.searchObj} />
				<CardList objs={this.state.objs} searchField={this.state.searchField} />
			</div>
		);
	}
}

export default App;
