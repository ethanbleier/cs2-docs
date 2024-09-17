import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Header() {
	return (
		<header>
			<div className="header-content">
				<h3 className="logo">
					<Link to="/" style={{ color: 'inherit', textDecoration: 'none', fontSize: '1.5rem' }}>
						Unofficial CS2 Console Documentation
					</Link>
				</h3>
				<button className="about-button">About</button>
				<div className="theme-toggle-container">
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}

export default Header;