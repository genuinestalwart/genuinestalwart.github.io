import React from "react";
import "hover.css";
import picture from "../../assets/images/my-picture.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
	return (
		<section>
			<div className='flex h-[80vh] hero items-center justify-center'>
				<div className='hero-content space-x-12 w-3/4'>
					<img
						src={picture}
						className='hvr-grow outline outline-secondary hover:outline-primary rounded-full w-2/5'
						alt='nasif rahman'
					/>

					<div className='space-y-6'>
						<h1 className='font-bold text-5xl text-primary'>
							Nasif Rahman
						</h1>
						<h2 className='font-bold text-3xl text-secondary'>
							Full Stack Developer
						</h2>
						<p>
							A college student with a goal of becoming an
							entrepreneur, trying to stand up on his own feet and
							to gain more knowledge and experience about the
							chances and challenges of the IT field.
						</p>
						<div className='space-x-4'>
							<a
								className='bg-gradient-to-r border-0 btn btn-primary font-extrabold from-secondary hover:from-secondary-focus shadow-md text-[#1A2238] to-primary hover:to-primary-focus'
								href='https://tinyurl.com/nasifrahman-resume'
								rel='noreferrer'
								target='_blank'>
								<FontAwesomeIcon
									className='bg-[#1A2238] mr-2 rounded-md text-xl text-red-500'
									icon={faFilePdf}></FontAwesomeIcon>{" "}
								Resume
							</a>
							<a
								className='bg-gradient-to-r border-0 btn btn-primary font-extrabold from-secondary hover:from-secondary-focus shadow-md text-[#1A2238] to-primary hover:to-primary-focus'
								href='https://github.com/genuinestalwart'
								rel='noreferrer'
								target='_blank'>
								<FontAwesomeIcon
									className='mr-2 text-xl text-[#1A2238]'
									icon={faGithub}></FontAwesomeIcon>{" "}
								GitHub
							</a>
							<a
								className='bg-gradient-to-r border-0 btn btn-primary font-extrabold from-secondary hover:from-secondary-focus shadow-md text-[#1A2238] to-primary hover:to-primary-focus'
								href='https://www.linkedin.com/in/genuinestalwart/'
								rel='noreferrer'
								target='_blank'>
								<FontAwesomeIcon
									className='mr-2 text-xl text-blue-800'
									icon={faLinkedin}></FontAwesomeIcon>{" "}
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
