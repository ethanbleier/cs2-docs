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
				<h3>CS2 console command docs page</h3>
				<p>
					Welcome! This is the unofficial documentation for Counter-Strike
					2 console commands accessible to players. We hope you enjoy the
					simplicity.
				</p>
			</div>
		</div>
	);
}

export default Home;
