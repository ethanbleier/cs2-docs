import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';

function Header() {
	const { isDarkMode } = useTheme();
	return (
		<header style={{ padding: '15px'}}>
			<h3 class="link" style={{marginRight: '10px'}}>
				<Link to="/"> Unofficial CS2 Console Documentation </Link>
			</h3>
			<ThemeToggle />
			<nav>
				<ul style={{ display: 'flex', listStyleType: 'none', padding: 0, margin: 0 }}>
					<li style={{ marginRight: '10px' }}>
						<Link to="/" style={{color: '#000', textDecoration: 'none' }}></Link>
					</li>

				</ul>
				
			</nav>
			
		</header>
		
	);
}

export default Header;