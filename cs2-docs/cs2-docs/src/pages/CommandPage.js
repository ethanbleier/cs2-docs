import React from 'react';
import { useParams, Link } from 'react-router-dom';
import commands from '../data/commands';

function CommandPage() {
	const { commandName } = useParams();
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

	return (
		<div>
			<h1>{command.name}</h1>
			<p><strong>Category:</strong> <Link to={`/category/${category.toLowerCase()}`}>{category}</Link></p>
			<p><strong>Description:</strong> {command.description}</p>
		</div>
	);
}

export default CommandPage;