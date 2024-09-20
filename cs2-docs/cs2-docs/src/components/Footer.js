import React from 'react';

function Footer() {
	return (
		<footer style={{ fontSize: '0.33rem', padding: '5px', textAlign: 'center' }}>
			<p>Ex populo, pro populo</p>
			<p>Last updated on {new Date().toLocaleDateString()}</p>
			<p>&copy; 2024 CS2 Console Docs. All rights reserved.</p>
			<p>Powered by React</p>

		</footer>
	);
}

export default Footer;