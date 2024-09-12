import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function ThemeToggle() {
	const { isDarkMode, toggleTheme } = useTheme();

	return (
		<button onClick={toggleTheme} className="theme-toggle">
			{isDarkMode ? '☀️' : '🌙'}
		</button>
	);
}

export default ThemeToggle;