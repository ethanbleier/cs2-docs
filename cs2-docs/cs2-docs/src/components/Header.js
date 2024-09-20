import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Header() {
	return (
		<header className="header">
			<div className="flex-container">
				<h3 className="logo">
					<Link to="/" style={{ color: 'inherit', textDecoration: 'none', fontSize: '1.5rem' }}>
						Unofficial CS2 Console Documentation
					</Link>
				</h3>
				<div className="header-right">
					<button className="about-button">About</button>
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}

export default Header;