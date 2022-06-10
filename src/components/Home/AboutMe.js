import React from "react";

const AboutMe = () => {
	return (
		<section className='leading-relaxed space-y-4'>
			<h3 className='font-bold text-3xl text-secondary'>Hello world!</h3>
			<p>
				My name is{" "}
				<strong className='text-primary'>Nasif Rahman</strong> aka{" "}
				<strong className='text-neutral'>Genuine Stalwart</strong>. I am
				a MERN stack web developer and I live in Bangladesh. Currently,
				I am studying in a college from Dhaka and also volunteering
				online at <em>Programming Hero</em>.
			</p>
			<p>
				Many people have only one goal in their life. Some people
				don&apos;t even know what they want to do. But I fall in none of
				these categories. Although I have a destiny. I also have some
				other major goals in my life.
			</p>

			<h3 className='font-bold text-3xl text-secondary'>
				Genuine Stalwart
			</h3>
			<p>
				This is not a regular pseudonym that people use to remain
				anonymous on the internet. I chose the words for a special
				reason.{" "}
				<span className='bg-base-100 px-2 py-1 rounded-md'>
					Genuine
				</span>{" "}
				means pure, real, original, authentic etc. On the other hand,{" "}
				<span className='bg-base-100 px-2 py-1 rounded-md'>
					Stalwart
				</span>{" "}
				means loyal, hardworking, trustworthy, lionhearted etc.
			</p>
			<p>
				And the reason is, all those meanings are 100% applicable for
				me. Which means,{" "}
				<span className='bg-base-100 px-2 py-1 rounded-md'>
					Genuine Stalwart
				</span>{" "}
				is more than just a name. Indeed, It reflects my personality and
				states who I truly am.
			</p>

			<h3 className='font-bold text-3xl text-secondary'>Dream Destiny</h3>
			<p>
				My dream destiny is{" "}
				<em>
					to be an honest and faithful leader that the world has never
					seen before
				</em>
				. I know, it won&apos;t be so easy. But I can at least try it
				out. And before that, I want to be:
			</p>
			<ul className='ml-6 steps steps-vertical'>
				<li className='after:font-bold step step-secondary'>
					a content creator, then
				</li>
				<li className='after:font-bold step step-secondary'>
					an entrepreneur, then
				</li>
				<li className='after:font-bold step step-secondary'>
					a businessman and finally
				</li>
				<li className='after:font-bold step step-secondary'>
					a peacemaker.
				</li>
			</ul>
		</section>
	);
};

export default AboutMe;
