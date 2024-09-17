import React from 'react';
import {useTheme} from '../contexts/ThemeContext';
import '../styles/Documentation.css';

function ThemeToggle() {
	const {isDarkMode, toggleTheme} = useTheme();

	return (
		<label className="switch">
			<input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
			<span className="slider round"></span>
		</label>
	);
}

export default ThemeToggle;