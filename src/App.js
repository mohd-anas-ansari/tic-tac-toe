import React, { Component } from "react";
import logo from "./logo.svg";
import "./TicTacToe.css";
import Game from "./Game.js";

class App extends Component {
	render() {
		return (
			<div>
				<div className="App"></div>
				<p className="App-intro">
					<Game></Game>
				</p>
			</div>
		);
	}
}

export default App;
