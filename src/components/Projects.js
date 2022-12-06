import '../css/Projects.css'
import Project from './Project';

const Projects = () => {

    const projects = [
        {
            id:1,
            title: 'MyReads',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque aperiam in perferendis! In, nesciunt?',
            tags: ['Ebooks', 'Responsive', 'ReactJs', 'API server', 'JavaScript'],
            thumbnail: process.env.PUBLIC_URL + '/Assets/Images/myreads.png',
            link: 'https://myreads-seifelkady.netlify.app'
        },
        {
            id:2,
            title: 'E-Commerce Page UI',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque aperiam in perferendis! In, nesciunt?',
            tags: ['Branding', 'E-Commerce', 'Responsive', 'JavaScript'],
            thumbnail: process.env.PUBLIC_URL + '/Assets/Images/e-commerce-page.png',
            link: 'https://e-commerce-page-seifelkady.netlify.app/'
        },
        {
            id:3,
            title: 'Seafood restaurant site with CRUD operations',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque aperiam in perferendis! In, nesciunt?',
            tags: ['Branding', 'CRUD', 'Responsive'],
            thumbnail: process.env.PUBLIC_URL + '/Assets/Images/seafood.png',
            link: 'https://github.com/Sayyfz/seafood-site'
        },
        {
            id:4,
            title: 'E-Commerce Page',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque aperiam in perferendis! In, nesciunt?',
            tags: ['Branding', 'E-Commerce', 'Responsive'],
            thumbnail: process.env.PUBLIC_URL + '/Assets/Images/e-commerce-page.png',
            link: 'https://github.com/Sayyfz/My-Reads'
        },
        {
            id:5,
            title: 'E-Commerce Page',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque aperiam in perferendis! In, nesciunt?',
            tags: ['Branding', 'E-Commerce', 'Responsive'],
            thumbnail: process.env.PUBLIC_URL + '/Assets/Images/e-commerce-page.png',
            link: 'https://github.com/Sayyfz/My-Reads'
        },
    ]

    
    return (  
        <div className="projects container" id='projects'>
            <hr style={{width: '100%'}}/>

            <h2 className="section-title text-center animated-sections">
                Projects
            </h2>
            <p className="projects__description text-center animated-sections">I love transforming residential design into interactive interface that is tempting to interact with.</p>

            <div className="projects-list d-flex flex-column animated-sections">
                {
                    projects.map((project, idx) => 
                        <Project key={project.id} project={project} reversed={idx % 2 !== 0}/>
                    )
                }
            </div>
        </div>
    );
}
 
export default Projects;