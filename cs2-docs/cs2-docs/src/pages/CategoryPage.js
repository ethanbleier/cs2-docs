import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import commands from '../data/commands';
import { FiCopy, FiCheck } from 'react-icons/fi';

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
		<div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
			{/* Breadcrumb Component */}
			<nav style={{
				marginBottom: '20px',
				fontFamily: "'Arial', sans-serif",
				fontSize: '14px',
				paddingTop: '20px'
			}}>
				<Link to="/">Home</Link>
				<span style={{ margin: '0 8px' }}>&gt;</span>
				<Link to={`/category/${category.category.toLowerCase()}`}>{category.category}</Link>
			</nav>
			<h1>{category.category} Commands</h1>
			<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
				{category.commands.map((cmd, index) => (
					<div key={index} style={{ 
						padding: '20px', 
						border: '1px solid #e0e0e0', 
						borderRadius: '8px',
						backgroundColor: 'var(--sidebar-bg)',
						color: 'var(--text-color)',
						boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
					}}>
						<div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', position: 'relative' }}>
							<pre 
								style={{ 
									display: 'inline-block', 
									margin: '0', 
									padding: '5px 30px 5px 10px', // Increased right padding
									border: '1px solid #ccc', 
									borderRadius: '3px',
									position: 'relative',
									fontFamily: "'Fira Code', 'JetBrains Mono', 'Cascadia Code', 'Source Code Pro', monospace",
									fontSize: '14px',
									fontWeight: '500',
								}}
							>
								{cmd.name}
								<button
									onClick={() => handleCopy(cmd.name)}
									style={{
										position: 'absolute',
										right: '8px',
										top: '50%',
										transform: 'translateY(-50%)',
										background: 'none',
										border: 'none',
										cursor: 'pointer',
										display: 'flex',
										alignItems: 'center',
										color: copiedCommand === cmd.name ? '#4CAF50' : 'inherit',
										padding: '2px',
									}}
								>
									{copiedCommand === cmd.name ? <FiCheck /> : <FiCopy />}
								</button>
								{copiedCommand === cmd.name && (
									<div style={{
										position: 'absolute',
										top: '-30px',
										left: '50%',
										transform: 'translateX(-50%)',
										background: '#4CAF50',
										color: 'white',
										padding: '5px 10px',
										borderRadius: '4px',
										fontSize: '12px',
										boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
										zIndex: 1,
									}}>
										Copied!
									</div>
								)}
							</pre>
						</div>
						<p style={{ margin: '10px 0' }}>{cmd.description}</p>
						<Link to={`/command/${encodeURIComponent(cmd.name)}`} style={{ 
							display: 'inline-block',
							padding: '5px 10px',
							backgroundColor: '#007bff',
							color: 'white',
							textDecoration: 'none',
							borderRadius: '3px',
							fontSize: '0.9em'
						}}>
							More
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default CategoryPage;