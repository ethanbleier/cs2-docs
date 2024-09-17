import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import commands from '../data/commands';

function CategoryPage() {
	const { categoryName } = useParams();
	const [copiedCommand, setCopiedCommand] = useState(null); // Change to store the copied command
	let category;

	for (const cat of commands) {
		if (cat.category.toLowerCase() === categoryName.toLowerCase()) {
			category = cat;
			break;
		}
	}

	if (!category) {
		return <div>Category not found</div>;
	}

	const handleCopy = (cmdName) => {
		navigator.clipboard.writeText(cmdName);
		setCopiedCommand(cmdName); // Set the copied command
		setTimeout(() => setCopiedCommand(null), 2000); // Reset after 2 seconds
	};

	return (
		<div>
			{/* Breadcrumb Component */}
			<nav>
				<Link to="/">Home</Link> &gt; <Link to={`/category/${category.category.toLowerCase()}`}>{category.category}</Link>
			</nav>
			<h1>{category.category} Commands</h1>
			<div>
				{category.commands.map((cmd, index) => (
					<div key={index} style={{ marginBottom: '10px' }}>
						<pre style={{ display: 'inline-block', margin: '0', padding: '5px', border: '1px solid #ccc', borderRadius: '3px' }}>
							{cmd.name}
						</pre>
						<span
							onClick={() => handleCopy(cmd.name)}
							style={{ cursor: 'pointer', marginLeft: '10px', fontSize: '0.8em', color: '#007BFF' }}
						>
							(click to copy)
						</span>
						{copiedCommand === cmd.name && ( // Show "Copied!" only for the copied command
							<span
								style={{
									backgroundColor: '#4CAF50',
									color: 'white',
									padding: '5px',
									borderRadius: '3px',
									fontSize: '0.8em',
									marginLeft: '10px',
								}}
							>
								Copied!
							</span>
						)}
						<p style={{ marginLeft: '10px', display: 'inline' }}>{cmd.description}</p>
						<Link to={`/command/${encodeURIComponent(cmd.name)}`} style={{ marginLeft: '10px' }}>
							More
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default CategoryPage;