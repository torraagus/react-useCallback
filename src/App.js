import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Parent from "./components/Parent";

function App() {
	console.log("Rendering App component");
	return (
		<div className="App">
			<Parent />
		</div>
	);
}

export default App;
