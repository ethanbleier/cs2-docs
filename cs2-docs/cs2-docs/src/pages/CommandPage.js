import React from 'react';
import { useParams } from 'react-router-dom';
import commands from '../data/commands';

function CommandPage() {
	const { commandName } = useParams();
	const command = commands
		.flatMap(category => category.commands)
		.find(cmd => cmd.name === decodeURIComponent(commandName));

	if (!command) {
		return <div>Command not found</div>;
	}

	return (
		<div>
			<h1>{command.name}</h1>
			<p>{command.description}</p>
		</div>
	);
}

export default CommandPage;