import '../css/Hero.css'

const Hero = () => {

    const bg = '../Assets/Images/hero__bg.jpg'

    return (  
        <div className="hero animated-sections" id='portfolio' > 
            <img className='hero__bg animated-sections' src={process.env.PUBLIC_URL +  'Assets/Images/hero bg.jpg'} alt="" />
            <div className="container">
                <h1 className="hero__title text-center animated-sections">Design your landing page from scratch, help your brand stay mighty </h1>
                <p className="hero__text text-center animated-sections"><span className="themed-text">I am Seif</span>, a software developer with an affinity for working with creative clients on everything  </p>
            </div>
        </div>
    );
}
 
export default Hero;