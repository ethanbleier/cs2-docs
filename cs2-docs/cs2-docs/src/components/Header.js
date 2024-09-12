import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<h1>CS2 Console Docs</h1>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/category/general">General Commands</Link></li>
					<li><Link to="/category/gameplay">Gameplay Commands</Link></li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;