import '../css/About.css'
import TechItem from './TechItem.js'

const About = () => {

    const techList = [
        {
            name:'JavaScript' ,
            icon: process.env.PUBLIC_URL + '/Assets/Icons/JavaScript Logo icon.png',
        },
        {
            name:'ReactJs' ,
            icon: process.env.PUBLIC_URL + '/Assets/Icons/React icon.png',
        },
        {
            name:'Bootstrap' ,
            icon: process.env.PUBLIC_URL + '/Assets/Icons/Bootstrap icon.png',
        },
        {
            name:'Nodejs' ,
            icon: process.env.PUBLIC_URL + '/Assets/Icons/Nodejs icon.png',
        },
        {
            name:'Redux' ,
            icon: process.env.PUBLIC_URL + '/Assets/Icons/Redux icon.png',
        },
        {
            name:'Unity' ,
            icon: process.env.PUBLIC_URL + '/Assets/Icons/Unity icon.png',
        },
    ]

    return (  
        <div className="about" id='about'>
            <h2 className="section-title text-center animated-sections">
                About Me
            </h2>

            <div className="about__content d-flex container">
                <div className="about__text d-flex flex-column animated-sections">
                    <div>
                        <p>
                            Hello, my name is Seif, i am a developer who loves trying and learning new stuff to create applications. I went to college in 2017, in 2018 when i learned Java, i made my first game using Eclipse.<br/> <br/>
                            Few years later i learned Unity and started creating games collaborating with an artist, we made a very noticeable progress with some unreleased game projects, and finally we released 
                            <span> <a href="https://sayyf.itch.io/i-wanna-be-the-vinci">I Wanna Be The Vinci</a></span> that was made originally for a game jam, but features were added to it later on. <br/> <br/>
                            During that time, i also learned Web development to further improve my programming skills .
                            <br /> <br /> Some of the technologies i used recently are:
                        </p>
                    </div>
                    <ul className="about__tech-list ">
                        {
                            techList.map((tech,idx) => 
                                <TechItem key={idx} name={tech.name} icon={tech.icon} />
                        )}
                    </ul>
                </div>
                <div className="about__image animated-sections">
                    <img className='about__pic' src={process.env.PUBLIC_URL + '/Assets/Images/about-pic.jpg'} alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default About;