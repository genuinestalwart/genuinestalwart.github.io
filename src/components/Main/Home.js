import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "../Home/Profile";
import Tabs from "../Home/Tabs";

const Home = () => {
	return (
		<>
			<Profile></Profile>
			<Tabs></Tabs>

			<div className='flex justify-center mb-20'>
				<div className='bg-accent border-2 border-secondary p-6 rounded-2xl w-4/5'>
					<Outlet></Outlet>
				</div>
			</div>
		</>
	);
};

export default Home;
