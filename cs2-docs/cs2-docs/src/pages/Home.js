import React from 'react';

import img from '../assets/place.webp';

function Home() {
	return (
		<div className="home-container">
			<img
				src={img}
				alt="Counter-Strike 2 logo"
				className="cs2-logo"
			/>
			<div className="home-content">
				<h1>Welcome to the unofficial CS2 console docs</h1>
				<p>We provide clean documentation for Counter-Strike 2 console commands</p>
			</div>
		</div>
	);
}

export default Home;

/*
Welcome to the Unofficial documentation for Counter-Strike 2
We provide clean documentation for Counter-Strike 2 console commands
*/