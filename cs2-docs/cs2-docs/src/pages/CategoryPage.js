import React from 'react';
import { useParams, Link } from 'react-router-dom';
import commands from '../data/commands';

function CategoryPage() {
	const { categoryName } = useParams();
	const category = commands.find(cat => cat.category.toLowerCase() === categoryName.toLowerCase());

	if (!category) {
		return <div>Category not found</div>;
	}

	return (
		<div>
			<h1>{category.category} Commands</h1>
			<ul>
				{category.commands.map((cmd, index) => (
					<li key={index}>
						<Link to={`/command/${encodeURIComponent(cmd.name)}`}>
							{cmd.name}
						</Link>
						<p>{cmd.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CategoryPage;