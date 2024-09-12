import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import CommandPage from './pages/CommandPage';
import './styles/Documentation.css';

function App() {
	return (
		<Router>
			<div className="app">
				<Header />
				<div className="content">
					<Sidebar />
					<main>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/category/:categoryName" element={<CategoryPage />} />
							<Route path="/command/:commandName" element={<CommandPage />} />
						</Routes>
					</main>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;