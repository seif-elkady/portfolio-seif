import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';


function App() {
  return (
    <>
    <Nav />
    <div className="content">
      <Hero />
      <About />
    </div>
    </>
    
  );
}

export default App;
