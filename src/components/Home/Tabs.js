import React from "react";
import { NavLink } from "react-router-dom";

const Tabs = () => {
	return (
		<section>
			<div className='flex justify-center'>
				<div className='-mb-0.5 tabs'>
					<NavLink
						to='/'
						className={({ isActive }) =>
							`font-bold rounded-t-2xl tab tab-lg tab-lifted ${
								isActive ? "tab-active" : ""
							} text-primary`
						}>
						About Me
					</NavLink>
					<NavLink
						to='/skills'
						className={({ isActive }) =>
							`font-bold rounded-t-2xl tab tab-lg tab-lifted ${
								isActive ? "tab-active" : ""
							} text-primary`
						}>
						My Skills
					</NavLink>
					<NavLink
						to='/projects'
						className={({ isActive }) =>
							`font-bold rounded-t-2xl tab tab-lg tab-lifted ${
								isActive ? "tab-active" : ""
							} text-primary`
						}>
						My Projects
					</NavLink>
					<NavLink
						to='/contact'
						className={({ isActive }) =>
							`font-bold rounded-t-2xl tab tab-lg tab-lifted ${
								isActive ? "tab-active" : ""
							} text-primary`
						}>
						Contact Me
					</NavLink>
				</div>
			</div>
		</section>
	);
};

export default Tabs;
