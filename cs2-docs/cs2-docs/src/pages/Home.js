import React from 'react';
import { Link } from 'react-router-dom';
import commands from '../data/commands';

function Home() {
	return (
		<div>
			<h1>Welcome to CS2 Console Docs</h1>
			<p>This site provides documentation for Counter-Strike 2 console commands.</p>
			<h2>Categories</h2>
			<ul>
				{commands.map((category, index) => (
					<li key={index}>
						<Link to={`/category/${category.category.toLowerCase()}`}>
							{category.category}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Home;