import React from 'react';

const About = () => {
	console.log(process.env.NEXT_PUBLIC_NAVER_CLIENT_ID);
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<h1 className="text-4xl font-bold text-gray-800">Welcome to the Index Page</h1>
			<p className="mt-4 text-lg text-gray-600">This page is styled with Tailwind CSS.</p>
		</div>
	);
};

export default About;
