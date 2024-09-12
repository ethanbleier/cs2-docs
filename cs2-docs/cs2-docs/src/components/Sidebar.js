import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<aside className="sidebar">
			<h2>Categories</h2>
			<ul>
				<li><Link to="/category/general">General</Link></li>
				<li><Link to="/category/gameplay">Gameplay</Link></li>
				<li><Link to="/category/graphics">Graphics</Link></li>
			</ul>
		</aside>
	);
}

export default Sidebar;