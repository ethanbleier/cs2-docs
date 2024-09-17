import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import CommandPage from './pages/CommandPage';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import './styles/Documentation.css';

function AppContent() {
	const {isDarkMode} = useTheme();
	const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

	const toggleSidebar = () => {
		setSidebarCollapsed(!isSidebarCollapsed);
	};

	return (
		<div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
			<Router>
				<Header />
				<div className="content">
					<Sidebar 
						isCollapsed={isSidebarCollapsed} 
						toggleSidebar={toggleSidebar}
					/>
					<main className={isSidebarCollapsed ? 'sidebar-collapsed' : ''}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/category/:categoryName" element={<CategoryPage />} />
							<Route path="/command/:commandName" element={<CommandPage />} />
						</Routes>
					</main>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

function App() {
	return (
		<ThemeProvider>
			<AppContent />
		</ThemeProvider>
	);
}

export default App;