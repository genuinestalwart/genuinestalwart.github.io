import React from "react";

const MySkills = () => {
	return (
		<section className='gap-4 grid grid-cols-4 leading-relaxed'>
			<div className='space-y-2'>
				<h3 className='font-bold text-3xl text-secondary'>Frontend:</h3>
				<ul className='list-disc list-inside ml-6'>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>Bootstrap</li>
					<li>TailwindCSS</li>
					<li>JavaScript</li>
					<li>React.js</li>
					<li>Firebase</li>
				</ul>
			</div>

			<div className='space-y-2'>
				<h3 className='font-bold text-3xl text-secondary'>
					Libraries:
				</h3>
				<ul className='list-disc list-inside ml-6'>
					<li>React Router</li>
					<li>React Bootstrap</li>
					<li>React Firebase Hooks</li>
					<li>React Day Picker</li>
					<li>DaisyUI</li>
					<li>Animate.css</li>
				</ul>
			</div>

			<div className='space-y-2'>
				<h3 className='font-bold text-3xl text-secondary'>Backend:</h3>
				<ul className='list-disc list-inside ml-6'>
					<li>Node.js</li>
					<li>Express.js</li>
					<li>MongoDB</li>
					<li>Heroku</li>
				</ul>
			</div>

			<div className='space-y-2'>
				<h3 className='font-bold text-3xl text-secondary'>Others:</h3>
				<ul className='list-disc list-inside ml-6'>
					<li>Git and GitHub</li>
					<li>Chrome Devtool</li>
					<li>Netlify</li>
					<li>JSON Web Token</li>
					<li>Dotenv</li>
					<li>Font Awesome</li>
				</ul>
			</div>
		</section>
	);
};

export default MySkills;
