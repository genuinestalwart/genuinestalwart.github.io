import React from "react";
import picture from "../../assets/images/my-picture.jpg";

const Profile = () => {
	return (
		<section>
			<div className='flex h-[75vh] hero items-center justify-center'>
				<div className='hero-content space-x-12 w-3/4'>
					<img
						src={picture}
						className='mask mask-squircle shadow-2xl w-2/5'
					/>

					<div className='space-y-6'>
						<h1 className='font-bold text-5xl text-primary'>
							Nasif Rahman
						</h1>
						<h2 className='font-semibold text-3xl text-secondary'>
							Full Stack Developer
						</h2>
						<p>
							A college student with a goal of becoming an
							entrepreneur, looking for a part-time job to stand
							up on his own feet and to gain more knowledge and
							experience about the chances and challenges of the
							IT field.
						</p>
						<a
							className='btn btn-primary font-black'
							href='https://drive.google.com/file/d/16IdpoIOfWhEZ6-Oc_kkPP8d_67j6muxN/view?usp=sharing'
							rel='noreferrer'
							target='_blank'>
							See My Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
