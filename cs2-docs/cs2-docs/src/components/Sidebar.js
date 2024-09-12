import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<aside className="sidebar">
			<h2>Categories</h2>
			<ul>
				<li><Link to="/category/admin">Admin</Link></li>
				<li><Link to="/category/bot">Bot</Link></li>
				<li><Link to="/category/cheat">Cheat</Link></li>
				<li><Link to="/category/general">General</Link></li>
				<li><Link to="/category/grenade">Grenade</Link></li>
				<li><Link to="/category/hudUI">HUD/UI</Link></li>
				<li><Link to="/category/knife">Knife</Link></li>
				<li><Link to="/category/match">Match</Link></li>
				<li><Link to="/category/training">Training</Link></li>
				<li><Link to="/category/weapon">Weapon</Link></li>
			</ul>
		</aside>
	);
}

export default Sidebar;