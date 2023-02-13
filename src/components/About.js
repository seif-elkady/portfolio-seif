import '../css/About.css';
import TechItem from './TechItem.js';

const About = () => {
    const techList = [
        {
            name: 'JavaScript',
            icon: process.env.PUBLIC_URL + '/Assets/Icons/JavaScript Logo icon.png',
        },
        {
            name: 'ReactJs',
            icon: process.env.PUBLIC_URL + '/Assets/Icons/React icon.png',
        },
        {
            name: 'Bootstrap',
            icon: process.env.PUBLIC_URL + '/Assets/Icons/Bootstrap icon.png',
        },
        {
            name: 'Nodejs',
            icon: process.env.PUBLIC_URL + '/Assets/Icons/Nodejs icon.png',
        },
        {
            name: 'Redux',
            icon: process.env.PUBLIC_URL + '/Assets/Icons/Redux icon.png',
        },
        {
            name: 'Nextjs',
            icon: process.env.PUBLIC_URL + '/Assets/Icons/Nextjs icon.png',
        },
        {
            name: 'Express',
            icon: process.env.PUBLIC_URL + '/Assets/Icons/Expressjs icon.png',
        },
        {
            name: 'MongoDB',
            icon: process.env.PUBLIC_URL + '/Assets/Icons/Mongodb icon.png',
        },
    ];

    return (
        <div className='about' id='about'>
            <h2 className='section-title text-center animated-sections'>About Me</h2>

            <div className='about__content d-flex container'>
                <div className='about__text d-flex flex-column animated-sections'>
                    <div>
                        <p>
                            Hello, my name is Seif, I am a developer who loves trying and learning
                            new stuff to create applications. I went to college in 2017, in 2018
                            when I learnt Java, I made my first game using Eclipse.
                            <br /> <br />I then learned Unity and started creating games
                            collaborating with an artist, we made a very noticeable progress with
                            some unreleased game projects, and finally we released
                            <span>
                                {' '}
                                <a href='https://sayyf.itch.io/i-wanna-be-the-vinci'>
                                    I Wanna Be The Vinci
                                </a>
                            </span>{' '}
                            that was made originally for a game jam, but features were added to it
                            later on. <br /> <br />
                            To improve my programming skills further, I learned Front-End
                            Development and graduated from Udacity's React Development
                            Cross-Skilling Nanodegree followed by Backend Development with another
                            Udacity's certificate for Full-Stack Advanced Track.
                            <br /> <br />
                        </p>
                    </div>
                    <span className='tech-title text-center'>
                        Some of the technologies I used recently are:
                    </span>
                    <ul className='about__tech-list '>
                        {techList.map((tech, idx) => (
                            <TechItem key={idx} name={tech.name} icon={tech.icon} />
                        ))}
                    </ul>
                </div>
                <div className='about__image animated-sections'>
                    <img
                        className='about__pic'
                        src={process.env.PUBLIC_URL + '/Assets/Images/about-pic.jpg'}
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
