import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import commands from '../data/commands';

function CommandPage() {
	const { commandName } = useParams();
	const [copied, setCopied] = useState(false);
	let command, category;

	for (const cat of commands) {
		const foundCommand = cat.commands.find(cmd => cmd.name === decodeURIComponent(commandName));
		if (foundCommand) {
			command = foundCommand;
			category = cat.category;
			break;
		}
	}

	if (!command) {
		return <div>Command not found</div>;
	}

	const handleCopy = () => {
		navigator.clipboard.writeText(command.name);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div>
			{/* Breadcrumb Component */}
			<nav>
				<Link to="/">Home</Link> &gt; <Link to={`/category/${category.toLowerCase()}`}>{category}</Link> &gt; {command.name}
			</nav>
			<h1>
				<span
					onClick={handleCopy}
					style={{ cursor: 'pointer', position: 'relative' }}
				>
					{command.name}
					{copied && (
						<span
							style={{
								position: 'absolute',
								top: '-45px',
								left: '50%',
								transform: 'translateX(-50%)',
								backgroundColor: '#4CAF50',
								color: 'white',
								padding: '5px',
								borderRadius: '3px',
								fontSize: '0.8em',
							}}
						>
						Copied!
						</span>
					)}
				</span>
			</h1>
			<p><strong>Category:</strong> <Link to={`/category/${category.toLowerCase()}`}>{category}</Link></p>
			<p><strong>Description:</strong> {command.description}</p>
		</div>
	);
}

export default CommandPage;