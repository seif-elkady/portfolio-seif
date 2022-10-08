import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Package from './components/Package';
import Footer from './components/Footer';
import { useEffect } from 'react'


function App() {

  const options = {
    root: null,
    threshold: 0.000,

  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
            entry.isIntersecting && entry.target.classList.add("show-el")
      })
  }, options)


  useEffect(() => {
      const sections = document.querySelectorAll('.animated-sections')
      sections.forEach(section => {
          observer.observe(section)
  })

      return (() => {
          sections.forEach(section => {
              observer.unobserve(section)
          })
      })
  },[])
  return (
    <>
    <Nav />
    <div className="content">
      <Hero />
      <About />
      <Projects />
      <Package />
      <Footer />
    </div>
    </>
    
  );
}

export default App;
