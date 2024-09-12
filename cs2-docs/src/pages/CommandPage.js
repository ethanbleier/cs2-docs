import React from 'react';
import { useParams } from 'react-router-dom';

function CommandPage() {
	const { commandName } = useParams();

	return (
		<div>
			<h1>{commandName}</h1>
			<p>This page will show details for the {commandName} command.</p>
		</div>
	);
}

export default CommandPage;