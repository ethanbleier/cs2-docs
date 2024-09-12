import React from 'react';
import { Link } from 'react-router-dom';
import commands from '../data/commands';
import ThemeToggle from '../components/ThemeToggle';
import img from '../assets/place.webp';

function Home() {
	return (
		<div style={{ position: 'relative'}}>
			<img
			src={img}
			alt=":)"
			style={{ position: 'absolute', top: '5px', right: '100px', width: '150px', height: 'auto'}}
			/>
		<div className="home">
			<h1>Welcome to the unofficial console documentation for CS2</h1>
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