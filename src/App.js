import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./components/Home/AboutMe";
import ContactMe from "./components/Home/ContactMe";
import MyProjects from "./components/Home/MyProjects";
import MySkills from "./components/Home/MySkills";
import Home from "./components/Main/Home";

function App() {
	return (
		<>
			<main>
				<Routes>
					<Route path='/' element={<Home></Home>}>
						<Route path='/' element={<AboutMe></AboutMe>}></Route>
						<Route
							path='skills'
							element={<MySkills></MySkills>}></Route>
						<Route
							path='projects'
							element={<MyProjects></MyProjects>}></Route>
						<Route
							path='contact'
							element={<ContactMe></ContactMe>}></Route>
					</Route>
				</Routes>
			</main>
		</>
	);
}

export default App;
