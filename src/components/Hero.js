import '../css/Hero.css';

const Hero = () => {
    const bg = 'Assets/Images/hero bg.webp';

    return (
        <div className='hero animated-sections' id='portfolio'>
            <img className='hero__bg animated-sections' src={process.env.PUBLIC_URL + bg} alt='' />
            <div className='container'>
                <h1 className='hero__title text-center animated-sections'>
                    Seif's Portfolio – Crafting Solutions with Code and Creativity
                </h1>
                <p className='hero__text text-center animated-sections'>
                    I am a software developer with an affinity for working with creative individuals
                </p>
            </div>
            <span className='overlay animated-sections'></span>
        </div>
    );
};

export default Hero;
