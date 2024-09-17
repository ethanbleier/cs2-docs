import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({isCollapsed, toggleSidebar}) {
	return (
		<>

			<div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
				{!isCollapsed && (
					<>
						<h2>Command Categories</h2>
						<ul style={{ listStyleType: 'square' }}>
							<li><Link to="/category/admin">Admin</Link></li>
							<li><Link to="/category/bot">Bot</Link></li>
							<li><Link to="/category/cheat">Cheat</Link></li>
							<li><Link to="/category/general">General</Link></li>
							<li><Link to="/category/grenade">Grenade</Link></li>
							<li><Link to="/category/hud">HUD/UI</Link></li>
							<li><Link to="/category/knife">Knife</Link></li>
							<li><Link to="/category/match">Match</Link></li>
							<li><Link to="/category/training">Training</Link></li>
							<li><Link to="/category/weapon">Weapon</Link></li>
						</ul>
					</>
				)}
			</div>

			<button
				onClick={toggleSidebar}
				className={`collapse-button ${isCollapsed ? 'collapsed' : ''}`}
			>
				{isCollapsed ? '>' : '<'}
			</button>


		</>
	);
}

export default Sidebar;