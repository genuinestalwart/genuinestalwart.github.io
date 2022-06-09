import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Main/Home";

function App() {
	return (
		<>
			<main>
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
				</Routes>
			</main>
		</>
	);
}

export default App;
