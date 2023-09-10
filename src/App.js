import './App.css';
import { useEffect, useState } from 'react';
import About from './components/About.js';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Package from './components/Package';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Splash from './components/Splash';
// const About = lazy(() => import('./components/About'));
// const Nav = lazy(() => import('./components/Nav'));
// const Projects = lazy(() => import('./components/Projects'));
// const Package = lazy(() => import('./components/Package'));
// const Hero = lazy(() => import('./components/Hero'));
// const Footer = lazy(() => import('./components/Footer'));

function App() {
	const [showSplash, setShowSplash] = useState(true);
	
	
	useEffect(() => {
		const options = {
			root: null,
			threshold: 0.0,
		};
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				entry.isIntersecting && entry.target.classList.add('show-el');
			});
		}, options);
		const sections = document.querySelectorAll('.animated-sections');
		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, [showSplash]);

	useEffect(() => {
		setTimeout(() => {
			setShowSplash(false);
		}, 2500);
	}, []);

	return (
		<>
			{showSplash ? (
				<Splash />
			) : (
				<>
					<Nav />
					<div className='content'>
						<Hero />
						<About />
						<Projects />
						<Package />
						<Footer />
					</div>
				</>
			)}
		</>
	);
}

export default App;
