import React from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
	const { categoryName } = useParams();

	return (
		<div>
			<h1>{categoryName} Commands</h1>
			<p>This page will list all commands in the {categoryName} category.</p>
		</div>
	);
}

export default CategoryPage;